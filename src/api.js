import request from 'superagent';
import {fromJS} from 'immutable';

const timeout = 5000;  // 5 seconds
// CORS hack
const corsBS = 'https://crossorigin.me/';

function handleCall(resolve, reject) {
  return function (err, res) {
    if (res.status === 200 && !err) {
      return resolve(fromJS(JSON.parse(res.text)));
    } else {
      console.log(err.response); // eslint-disable-line no-console
      return reject(fromJS(JSON.parse(err.response.text)));
    }
  };
}

export function get(path, query={}) {
  return new Promise((resolve, reject) => {
    request
    .get(path)
    .query(query)
    .timeout(timeout)
    .end(handleCall(resolve, reject));
  });
}

export function getDrones() {
  const path = `${corsBS}http://api.dronestre.am/data`;
  return get(path);
}
