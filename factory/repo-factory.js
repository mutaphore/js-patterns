"use strict";

const RepoFactory = () => {
  this.taskRepo = () => {
    return {
      name: "Task repo"
    };
  };
  this.userRepo = () => {
    return {
      name: "User repo"
    };
  };
  this.projRepo = () => {
    return {
      name: "Project repo"
    };
  };
}

RepoFactory.prototype.getRepo = (type) => {
  switch (type) {
    case "task":
      return this.taskRepo();
    case "user":
      return this.userRepo();
    case "project":
      return this.projRepo();
    default:
      console.log("warning: unsupported repo type");
      break;
  };
}

module.exports = RepoFactory;
