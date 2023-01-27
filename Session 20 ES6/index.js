/*
ES6 ECMA javascript 2015
+ LET CONST

 */
/*
phạm vi của let và var;
phạm vi của let: scope;({}) sd trong hàm
phạm vi của var là function; khi nó được khai báo trong function
var, let nếu khai báo trong hàm thì phạm vi là trong hàm. Nếu khai báo ngoài hàm thì phạm vi là global
var có thể khai báo lại, gán giá trị lại. Let k thể khai báo lại, có thể gán lại giá trị
 */

// var a=6;
// function test(){
//     var a=9;
//     console.log("a trong function",a);
// }
// test();
// console.log(a);

// const a=7;
// a = 9;
// console.log(a);

// const student = {
//     name: "Trương Thu",
//     age: "18+",
// }
// student.name = "Trương Nhung";
// console.log(student);

// const arrayNumber = [1,2,3,4,5];
// console.log(Array.isArray(arrayNumber));
// console.log(typeof arrayNumber);

/*
+ Decstructuring
 */
// let listStudents = ["Thu", "Dương", "Minh", "Đức"];
// let name = listStudents[1];
// let [name1, name2, name3] = listStudents;
// console.log(name1);
// console.log(name2);
// console.log(name3);

// let obj = {
//   nameStudent: "Hoàng",
//   age: 50,
//   id: 1,
// };
// let objName = obj.nameStudent;// cách 1 theo thuộc tính
// // console.log(objName);
// let obj1 = obj["nameStudent"]; // tìm theo vị trí
// // console.log(obj1);

// let {age, id} = obj; // cách 2 theo thuộc tính
// // console.log(nameStudent);
// console.log(age);
// console.log(id);

/*
+ Spread
*/
// let array1 = [1,2,3];
// let array2 = [4,5,6];
// // let array = array1.concat(array2);
// let array = [...array2, ...array1, ...array2];
// console.log(array);

// let student1 = {
//     name: "Hà",
//     age: 32
// }
// let address = {
//     address: "Hà Nội",
// }
// let student2 = {...student1, ...address};
// console.log(student2);

// function param(a,...params){
//     console.log(a);
//     console.log(params);
// }
// param(1,2,3,7,8,9);

/*
+ Arrow function (hàm mũi tên); context
 */
// let result = ()=>{
//     console.log("Ohayou!");
// }
// result();
// let obj = {
//     name: "Ha",
//     age: 32,
//     says: function (){
//         console.log(this);
//     },
//     say1: ()=>{
//         console.log(this);
//     },
// }
// obj.says();
// obj.say1();

/*
+ Template string $ (``)
 */
// let name1 = "Hà";
// let say = `"hello \${} ${name1}"`;
// console.log(say);

/*
+ Class JS
 */
// function object(name, age, id){
//     this.name = name;
//     this.age = age;
//     this.id = id;
// }
// let object1 = new object("Ha", "32", 1);

// class Person{
//     constructor(name, age, id){
//         this.name = name,
//         this.age = age,
//         this.id = id
//     }
//     setName(name){
//         this.name = name;
//     }
//     setAge(age){
//         this.age = age;
//     }
//     getName(){
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
// }
// let person1 = new Person("Ha", 20, 1);
// console.log(person1.getName());
// console.log(person1.getAge());

// // Tính kế thừa trong JS dùng extends
// class Person3 extends Person{ // thừa hưởng tất cả thuộc tính và hành vi của cha
//     constructor(name, age, lastName){
//         super(name, age); // gọi constructor của cha
//         this.lastName = "Pham Thanh";
//     }
//     getInfor(){
//         return this.getName() + this.lastName + this.getAge();
//     }
// }
// let person4 = new Person3("Dương", 20)
// console.log(person4.getInfor());

/*
+ Import nạp, export xuất ra, module
*/
// export sd 2 cách export, export default
import test from "./export.js";
console.log(test());
import { sayBye , sayNo} from "./export.js";
console.log(sayBye());
console.log(sayNo());