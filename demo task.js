function js(num){
    const slice=num.slice(1,3);
    
    arr.reverse();
    
    const pushed= arr.push(11);
   
    const pop=num.pop()
   
    
    
    console.log(slice);
     console.log(pushed);
      console.log(pop);
       return arr;
    
    
    
}
const arr=[ 1,4,6,8,10];
const array=js(arr)

console.log(array)