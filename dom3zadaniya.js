// 1
let cto = 0
function two(numm){
    for(let i in numm){
        if(numm[i] == 7){
        
            cto = 1
        } 

        
    }  
    if(cto == 0){
        console.log('netu 7');
    } else if(cto == 1){
        console.log('boom');

    }
}

two([1, 2, 3, 7])

// 2
// function three(nummm){
    // console.log(Math.max(nummm));
// 
// 
    //  for(let i in nummm){
        //  console.log(nummm[i]);
    //  }  
    // 
// }
// 
// three({a: 1, b: 2, c: 3})