// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after // a grace of 15 marks has been added to those students who scored less than 50.

let gracemarks = 0;
    for(i=0; i<=3; i++){                               
        if (studentRecords[i].marks < 50){
            studentRecords[i].marks += 15; 
        }  
        if (studentRecords[i].marks > 50){
            gracemarks += studentRecords[i].marks; 
        }
    }
    console.log(gracemarks);
