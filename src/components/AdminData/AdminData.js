import { useState, Fragment } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import DataTable from "../DataTable/DataTable";
import serverUrl from "../../serverUrl";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "fit-content",
    margin: "20px auto",
  },
  verticalAlign: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputfield: {
    margin: theme.spacing(3),
    marginBottom: theme.spacing(0.5),
  },
  button: {
    margin: theme.spacing(2),
  },
  errMsg: {
    color: "#ea4335",
    margin: theme.spacing(2),
  },
  signoutButton: {
    margin: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const AdminPage = () => {
  const classes = useStyles();
  const [verified, setVerified] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCreds, setInvalidCreds] = useState(false);

  const handleSubmit = async (event) => {
    NProgress.start();
    event.preventDefault();
    const resp = await fetch(`${serverUrl}/api/signin`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    });
    const data = await resp.json();
    if (data.status === "OK") {
      setVerified(true);
    } else {
      setInvalidCreds(true);
    }
    NProgress.done();
  };

  const handleUsernameChange = ({ target }) => {
    setUserName(target.value);
  };
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSignout = () => {
    NProgress.start();
    setVerified(false);
    setInvalidCreds(false);
    NProgress.done();
  };

  return (
    <Fragment>
      {verified ? (
        <Fragment>
          <div className={classes.buttonContainer}>
            <Button
              onClick={handleSignout}
              variant="contained"
              color="secondary"
              className={classes.signoutButton}
            >
              Signout
            </Button>
          </div>
          <DataTable />
        </Fragment>
      ) : (
        <Card className={classes.root} elevation={2}>
          <CardContent className={classes.verticalAlign}>
            <TextField
              variant="filled"
              error={invalidCreds}
              onChange={handleUsernameChange}
              className={classes.inputfield}
              id="username"
              label="Username"
              required
            />
            <TextField
              variant="filled"
              type="password"
              error={invalidCreds}
              onChange={handlePasswordChange}
              className={classes.inputfield}
              id="password"
              label="Password"
              required
            />
            {invalidCreds ? (
              <Typography variant="body1" className={classes.errMsg}>
                {"Invalid Credentials"}
              </Typography>
            ) : null}
          </CardContent>
          <CardActions>
            <Button
              onClick={handleSubmit}
              color="primary"
              variant="contained"
              className={classes.button}
              size="medium"
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      )}
    </Fragment>
  );
};

export default AdminPage;
