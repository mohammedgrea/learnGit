var towSum = (numbers,target)=>{
    for(var i = 0 ; i<numbers.length ;i++){
        const firstNumber = numbers[i];
        for(var j = 1; j<numbers.length ; j++){
            const secondtNumber = numbers[j];
            if(firstNumber+secondtNumber===target){
                return console.log([i,j]);
            }
        }
    }
}

towSum([2,5,5,11],10);