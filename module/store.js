"use strict";

const store = () => {
  // private object is not assessible outside
  const private = {};

  const get = (id) => {
    return private[id];
  };

  const put = (id, val) => {
    private[id] = val;
  }

  return {
    get: get,
    put: put
  };
}

module.exports = store();
