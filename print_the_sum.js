   // Ques 6: This time we are required to print the sum of marks of the students with id > 120.
let sum=0;
    for(i=0; i<=3; i++){                                
        if (studentRecords[i].id > 120){
            sum += studentRecords[i].marks;
        }
    }
    console.log(sum);
