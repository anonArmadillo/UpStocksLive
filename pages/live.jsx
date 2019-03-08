import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Head from "next/head";
import Live from "../components/Live/Live.jsx"

const styles = () => ({
  mainWrapper: {
    display: "flex",
    height: "100vh",
    flexDirection: "column"
  }
});

function MyApp(props) {
  const {classes} = props;
  return (
    <React.Fragment>
      <Head>
        <title>Live Chart</title>
      </Head>
      <div className={classes.mainWrapper}>
        <Live />
      </div>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MyApp);
