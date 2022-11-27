
// 1.Write a function and use 'call' to call the function
var obj={num:2};
var addToThis=function (a) {
    return this.num+a;
}
let ans=addToThis.call(obj,3);
console.log(ans);

//2. Write a program using apply
var obj2={num:2};
var addToThisApply=function (a,b,c) {
    return this.num+a+b+c;
}
var arr=[1,2,3]
let ans2=addToThisApply.apply(obj2,arr);
console.log(ans2);

//3. Write a program using bind
var obj3={num:2};
var addToThisBind=function (a,b,c) {
    return this.num+a+b+c;
}
var arr2=[1,2,3];
let bound=addToThisBind.bind(obj3);
bound(1,2,3);


//4. Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
let Student={
    age:20
}
var printAge=function () {
    return this.age;
}
let bound2=printAge.bind(Student);
bound2();

//Currying
// Write down the code like the way the youtuber does
//By using bind method
let multiply=function (x,y) {
    console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);
let multiplyByThree=multiply.bind(this,3);
multiplyByThree(5);


//By using clousures 
let multiplybyClosures=function (x) {
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo2=multiplybyClosures(2);
multiplyByTwo2(3);
let multiplyByThree2=multiplybyClosures(3);
multiplyByTwo2(10);