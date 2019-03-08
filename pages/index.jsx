import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Head from "next/head";

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
        <title>Prathamesh Netake</title>
      </Head>
      <div className={classes.mainWrapper}>
        this is index
      </div>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MyApp);
