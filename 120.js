// using bind 

let multiply=function(x,y){
    console.log(x*y);
}

// using closures
let mutiply=function(x){
    return function(y){
    console.log(x*y)
    }
}
let mutiplyByTwo=mutiply(2);
mutiplyByTwo(3);

let mutiplyByThree=mutiply(3);
mutiplyByThree(5);