/ Ques 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50

let name = [];
let name1 = studentRecord.map((a)=>{
if(a.marks>50){
    name.push(a.name);
}
}) 
console.log(name);
