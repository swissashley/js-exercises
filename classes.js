const Student = require('./student');
const Course = require('./course');

const s = new Student("vic", "lin");
console.log(s.name());

const c1 = new Course ("ENG101", "Eng", 4);
const c2 = new Course ("ENG102", "Eng", 4);
const c3 = new Course ("ART101", "Art", 3);
const c4 = new Course ("MATH101", "Math", 4);

s.enroll(c1);
s.enroll(c2);
s.enroll(c3);
s.enroll(c4);

console.log(s.courseLoad());

console.log(c1.students);
console.log(s.courses);
