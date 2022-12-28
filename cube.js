// function cube(n1){
//     return n1**3
// }
// console.log(cube(4));

// function subtraction(n1,n2){
//     return n1>n2?n1-n2:n2-n1
// }
// console.log(subtraction(100,50));
// console.log(subtraction(50,100));
   
// var sum=(n1,n2)=>n1+n2
// console.log(sum(10,20));

// var cube=(n)=>n**3
// console.log(cube(3));

// var sub=(n1,n2)=>n1>n2?n1-n2:n2-n1

// var numchk=(n)=>n%2==0?"even":"odd"
// console.log(numchk(2));

// var arr=[1,4,6,8,10];
// for (let i of arr){
//     console.log(i);
// }

var marks=[45,43,32,35,46,50,27,100]
// marks.forEach(m=>console.log(m))
// marks.map(m=>m+3).forEach(n=>console.log(n))
// marks.map(m=>m>40?m+5:m+2).forEach(n=>console.log(n))
// marks.filter(m=>m%2==0).forEach(m=>console.log(m))
// marks.filter(m=>m>=45).map(m=>m+5).forEach(m=>console.log(m))
// console.log(marks.includes(50));
marks.sort((m1,m2)=>m1-m2)
console.log(marks);