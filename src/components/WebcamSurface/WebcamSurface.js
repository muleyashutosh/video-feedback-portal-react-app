import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import serverUrl from "../../serverUrl";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  video: {
    margin: "10px",
    width: "50%",
  },
  buttonContainer: {
    display: "grid",
    gap: "10px",
    gridTemplateColumns: "1fr 1fr",
    width: "50%",
    padding: "20px",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const WebcamSurface = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  const [submitButtonState, setSubmitButtonState] = useState(true);
  const [ip, setIp] = useState("");
  const classes = useStyles();

  const handleDataAvailable = ({ data }) => {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("https://geolocation-db.com/json/");
      const data = await response.json();
      setIp(data.IPv4);
      // console.log(ip)
    })();
  }, [ip]);

  const handleStartCaptureClick = () => {
    setCapturing(true);
    setSubmitButtonState(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
    setImgSrc(webcamRef.current.getScreenshot());
  };

  const handleStopCaptureClick = () => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
    setSubmitButtonState(false);
  };

  const handleSubmit = async () => {
    // console.log(recordedChunks);
    NProgress.start();
    // console.log(imgSrc)
    if (recordedChunks.length && imgSrc) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const data = new FormData();
      data.append("video", blob);
      data.append("ip", ip);
      data.append("timestamp", new Date().toLocaleString());
      data.append("thumbnail", imgSrc);
      await fetch(`${serverUrl}/api/storeVideo`, {
        method: "post",
        body: data,
      });
      setRecordedChunks([]);
      setImgSrc("");
      setSubmitButtonState(true);
    }
    NProgress.done();
  };

  return (
    <div className={classes.center}>
      <Webcam
        className={classes.video}
        audio={true}
        ref={webcamRef}
        mirrored={true}
      />
      <div className={classes.buttonContainer}>
        {capturing ? (
          <Button
            color="secondary"
            variant="contained"
            onClick={handleStopCaptureClick}
          >
            Stop
          </Button>
        ) : (
          <Button
            color="primary"
            variant="contained"
            onClick={handleStartCaptureClick}
          >
            Capture
          </Button>
        )}
        <Button
          color="primary"
          variant="contained"
          disabled={submitButtonState}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default WebcamSurface;
