import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import serverUrl from "../../serverUrl";

const useStyles = makeStyles((theme) => ({
  videoParent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

const Video = () => {
  const classes = useStyles();
  const { filename } = useParams();
  const [video, setVideo] = useState("");

  useEffect(() => {
    (async () => {
      const resp = await fetch(`${serverUrl}/video/${filename}`);
      const { video } = await resp.json();
      setVideo(`data:video/webm;base64,${video}`);
    })();
  });

  console.log(filename);
  return (
    <div className={classes.videoParent}>
      <video autoPlay controls src={video} loading></video>
    </div>
  );
};

export default Video;
