// var names = ['Alex', 'Kat', 'Pete'];
//
// function loggerFunc (name) {
//   console.log(name);
// }
//
// var person = {
//   name: 'Don',
//   greet: function () {
//     function logger() {
//       console.log(this.name);
//     }
//     logger();
//   }
// }
//
// person.greet();
//
//
//
//
// // var p = function () {
// //   console.log('Hello');
// // }
// //
// // p.hiEveryone = function () {
// //   this();
// // }
// //
// // p.hiEveryone();


var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a,b) => a + b;


console.log(addStatement(3, 4));

console.log(addExpression(-5, 3));
