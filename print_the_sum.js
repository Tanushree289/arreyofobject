    let sum=0;
    for(i=0; i<=3; i++){                                
        if (studentRecords[i].id > 120){
            sum += studentRecords[i].marks;
        }
    }
    console.log(sum);
