import "./App.css";
import { Fragment } from "react";
import NavBar from "./components/NavBar/NavBar";
import WebcamSurface from "./components/WebcamSurface/WebcamSurface";
import AdminPage from "./components/AdminData/AdminData.js";
import Video from "./components/Video/Video";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/video-feedback-portal-react-app/">
            <WebcamSurface />
          </Route>
          <Route path="/video-feedback-portal-react-app/admin">
            <AdminPage />
          </Route>
          <Route path="/video-feedback-portal-react-app/video/:filename">
            <Video />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
