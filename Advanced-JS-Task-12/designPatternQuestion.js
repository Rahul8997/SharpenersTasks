class Student{
 constructor(name,age,phone_number,board_marks){
  this.name=name;
  this.age=age;
  this.phone_number=phone_number;
  this.board_marks=board_marks
 }
 SetPlacementAge=(minAge)=>{
 return (minMarks)=>{
  if(this.age>minAge && this.board_marks>minMarks){
   return true;
  }else{
   return false;
  }
 }
 }
}

let std1=new Student("ajay",20,123,45);
let std2=new Student("bhumi",21,1234,35);
let std3=new Student("charu",22,12345,55);
let std4=new Student("dinesh",23,1234,35);
let std5=new Student("erika",24,12345,65);

let arr=[];
arr.push(std1,std2,std3,std4,std5);
for(let i=0;i<arr.length;i++){
 if(arr[i].SetPlacementAge(18)(40)==true){
  console.log(`${arr[i].name} is eligible`);
 }
}