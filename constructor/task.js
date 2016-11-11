"use strict";

const Task = (name) => {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = () => {
  console.log(`completing task: ${this.name}`);
  this.complete = true;
};

Task.prototype.save = () => {
  console.log(`saving task: ${this.name}`);
};
