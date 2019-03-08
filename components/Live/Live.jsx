import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Chart from "./Chart";
import { getData } from "./utils";
import Slider from '@material-ui/lab/Slider';
import io from "socket.io-client";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundPosition: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1.5rem"
  }
});

class Live extends React.Component {
  state = {
    chartData: null,
    sliderValue: 1
  }

  gotData = chartData => {
    this.setState({chartData});
  }

  initSock = () => {
    const sock = new io("http://kaboom.rksv.net/watch");
    console.log(sock);
    sock.on("data", res => {
      console.log(data);
    });
    sock.on("error", res => {
      console.log(data);
    });
    sock.on("connect", (a, b) => {
      sock.emit("ping", {});
    })
  }

  componentDidMount = () => {
    getData(`http://kaboom.rksv.net/api/historical?interval=${this.state.sliderValue}`).then(this.gotData);
    this.initSock()
  }
  
  sliderChange = (a, sliderValue) => {
    getData(`http://kaboom.rksv.net/api/historical?interval=${sliderValue}`).then(this.gotData);
    this.setState({sliderValue})
  }

  render() {
    const {classes} = this.props;
    if (this.state.chartData == null) {
			return <div>Loading...</div>
		}
    return (
      <div className={classes.root}>
        Choose a scale from 1 to 9
        <Slider
          classes={{ container: classes.slider }}
          value={this.state.sliderValue}
          min={1}
          max={9}
          step={1}
          style={{width: 200, margin: "1rem"}}
          onChange={this.sliderChange}
        />
        <Chart data={this.state.chartData} />
      </div>
    );
  }
}

Live.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Live);