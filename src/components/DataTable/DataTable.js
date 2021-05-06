import { useEffect, useState, Fragment } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
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
    justifyContent: "center",
    marginTop: theme.spacing(3),
    marginRight: "auto",
    marginLeft: "auto",
  },
  emptyMsg: {
    margin: theme.spacing(2),
  },
  pointer: {
    cursor: "pointer",
  },
}));

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const classes = useStyles();

  useEffect(
    () =>
      (async () => {
        const response = await fetch(`${serverUrl}/api/getEntries`);
        const { data } = await response.json();
        setRows(data);
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
        <Table
          className={classes.table}
          aria-label="simple table"
          loading="true"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Video</TableCell>
              <TableCell align="center">TimeStamp</TableCell>
              <TableCell align="center">IP Address</TableCell>
              <TableCell align="center">Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData.length === 0 ? (
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
                      to={`/video/${filename}`}
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
