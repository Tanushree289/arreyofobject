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
