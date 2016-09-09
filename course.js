function Course (name, dept, units) {
  this.name = name;
  this.dept = dept;
  this.units = units;
  this.students = [];
}

Course.prototype.addStudent = function(student){
  this.students.push(student);
};

module.exports = Course;
