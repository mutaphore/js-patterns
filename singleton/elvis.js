"use strict";

const Elvis = (() => {
  let singleton = null;
  const createInstance = () => {
    return {
      name: "Elvis Presley",
      role: "Singer",
      age: 40
    };
  };
  return {
    getInstance: () => {
      if (!singleton) {
        singleton = createInstance();
      }
      return singleton;
    }
  };
})();

const elvis1 = Elvis.getInstance();
const elvis2 = Elvis.getInstance();

if (elvis1 === elvis2) {
  console.log("There is only one " + elvis1.name);
}
