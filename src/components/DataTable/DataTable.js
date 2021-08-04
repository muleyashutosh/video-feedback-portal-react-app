import { useEffect, useState, Fragment } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import serverUrl from "../../serverUrl";
import { GetApp } from "@material-ui/icons/";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
});

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  container: {
    width: "95%",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: theme.spacing(3),
    marginRight: "auto",
    marginLeft: "auto",
    flexDirection: "column",
    overflowY: "hidden",
  },
  emptyMsg: {
    margin: theme.spacing(2),
  },
  pointer: {
    cursor: "pointer",
  },
  loader: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  tableHeading: {
    fontWeight: "bold",
    background: "#3f3f3f",
    color:"#fff",
    fontSize: "0.9rem"
  }
}));

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  useEffect(
    () =>
      (async () => {
        const response = await fetch(`${serverUrl}/api/getEntries`);
        const { data } = await response.json();
        setRows(data);
        setLoading(false);
      })(),
    [setRows]
  );

  const rowsData = rows.map(({ filename, image, timestamp, ip }, index) => {
    return {
      id: index + 1,
      thumbnail: image,
      timestamp: timestamp,
      ip: ip,
      filename: filename,
    };
  });

  const handleDownload = async (filename) => {
    NProgress.start();
    const resp = await fetch(`${serverUrl}/video/${filename}`);
    const { video } = await resp.json();
    const base64 = await fetch(`data:video/webp;base64,${video}`);
    const blob = await base64.blob();
    const a = document.createElement("a");
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.style.display = "none";
    a.download = "video.webm";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
    NProgress.done();
  };

  return (
    <Fragment>
      <TableContainer
        className={classes.container}
        component={Paper}
        elevation={3}
      >
        {loading ? <LinearProgress className={classes.loader} /> : null}
        <Table
          className={classes.table}
          aria-label="simple table"
          loading="true"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeading}>ID</TableCell>
              <TableCell className={classes.tableHeading} align="center">Video</TableCell>
              <TableCell className={classes.tableHeading} align="center">TimeStamp</TableCell>
              <TableCell className={classes.tableHeading} align="center">IP Address</TableCell>
              <TableCell className={classes.tableHeading} align="center">Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData.length === 0 && !loading ? (
              <TableRow className={classes.emptyMsg}>
                <TableCell>{"No Records to show yet"}</TableCell>
              </TableRow>
            ) : (
              rowsData.map(({ filename, thumbnail, timestamp, ip }, index) => (
                <TableRow key={index + 1}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/video-feedback-portal-react-app/video/${filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={thumbnail}
                        alt=""
                        style={{ width: 100, height: 80 }}
                      />
                    </Link>
                  </TableCell>
                  <TableCell align="center">{timestamp}</TableCell>
                  <TableCell align="center">{ip}</TableCell>
                  <TableCell align="center">
                    <GetApp
                      className={classes.pointer}
                      onClick={() => handleDownload(filename)}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default DataTable;
