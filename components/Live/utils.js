import {get} from "jquery";
import { timeParse } from "d3-time-format";

function parseData(parse) {
  return function(d) {
    d.date = parse(d.date);
    d.open = +d.open;
    d.high = +d.high;
    d.low = +d.low;
    d.close = +d.close;
    d.volume = +d.volume;

    return d;
  };
}

const parseDate = timeParse("%Y-%m-%d");

export function getData(url) {
  const promiseMSFT = get(url)
    .then(data => data.map(itemStr => {
      const item = itemStr.split(",");
      const d = {};
      d.date = new Date(parseInt(item[0], 10))
      d.open = item[1];
      d.high = item[2];
      d.low = item[3];
      d.close = item[4];
      d.volume = item[5];
      return d;
    }));
  return promiseMSFT;
}
