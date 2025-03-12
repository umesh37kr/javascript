// ****************************
// 1. what will be the output
// ****************************
// let age = 10;
// const obj = {
//   age: 20,
//   name: "Alice",
//   firstFn: () => {
//     console.log(this.age);
//   },
// };
// obj.firstFn();

// ****************************
// 2. what will be the output
// ****************************
// console.log(typeof undefined);
// console.log(typeof null);

// ****************************
// 3. what will be the output
// ****************************
// const a = null;
// const value = a || "Default value";
// console.log(value);

// ****************************
// 4. what will be the output
// ****************************
// const student = {
//   name: "John",
//   courses: {
//     math: {
//       grade: "A",
//     },
//   },
// };
// const historyGrade = student.courses.history.grade;
// console.log(historyGrade);

// ****************************
// 5. what can you do to above code to run without error
// ****************************
// const student = {
//   name: "John",
//   courses: {
//     math: {
//       grade: "A",
//     },
//   },
// };
// const historyGrade = student.courses.history?.grade;
// console.log(historyGrade);
