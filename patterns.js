for(let i = 1 ; i <= 10 ; i++){
    let star = '';
    let num = 1;
    for(let j = 1 ; j <= i; j++){
            if(i%2 == 1){
                star +=num;
                process.stdout.write(""+num+" ");
                num++;
                
            }
    } 
  process.stdout.write("\n");
}

// console.log(10%5);

//         1
//       1 2 3
//     1 2 3 4 5
//   1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8 9  


