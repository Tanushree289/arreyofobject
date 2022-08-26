let name = [];
let name1 = studentRecord.map((a)=>{
if(a.marks>50){
    name.push(a.name);
}
}) 
console.log(name);
