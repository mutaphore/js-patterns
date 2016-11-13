
const Task = function (name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function () {
  console.log(`Completing task ${this.name}`);
  this.completed = true;
}

Task.prototype.save = function () {
  console.log(`Saving task ${this.name}`);
}

// PriorityTask is a facade of the underlying Task object

const PriorityTask = function (name, priority) {
  Task.call(this, name);
  this.priority = priority;
  console.log(this);
}

PriorityTask.prototype = Object.create(Task.prototype);

PriorityTask.prototype.notify = function () {
  console.log(`Notification for priority ${this.priority} task`);
}

PriorityTask.prototype.save = function () {
  if (this.priority > 2) {
    this.notify();
  }
  Task.prototype.save.call(this);
}

const pt1 = new PriorityTask("Important task", 4);

pt1.save();
pt1.complete();
