module.exports = Student;

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

Student.prototype.enroll = function(course){
  this.courses.push(course);
  course.addStudent(this);
  return course;
};

Student.prototype.courseLoad = function(){
  let load = {};

  this.courses.forEach(course => {
    if (load[course.dept] === undefined){
      load[course.dept] = course.units;
    } else {
      load[course.dept] += course.units;
    }
  });

  return load;
};
