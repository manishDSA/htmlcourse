


function max(b,...a) {
let large= a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i]>large) 

            large=a[i]
            }
            console.log(large);
 
}
function min(b,...a) {
    let samll= a[0];
        for (let i = 1; i < a.length; i++) {
            if (a[i]<samll) 
    
                samll=a[i]
                }
                console.log(samll);
     
    }
function average(b,...a) {
    let sum=0;
    for(let i=0;i<a.length;i++){

    sum+=a[i];
    }
      return sum/a.length;
    
}

// max("Max",5,6,89,99,25,15,3)
// min("min",5,6,89,99,25,15,3)
//   console.log( average("average",5,6,7))

  let fun =(b,...a)=>{
    if(b=="max"){
        max("max",5,6,89,99,25,15,3)
        
    }
    
   else if(b=="min"){
        min("min",5,6,89,99,25,15,3)
    }

    
     else if(b=="average"){
      console.log(  average("averge",5,6,89,99,25,15,3));
    }
    
    else{
        
     console.log("please check code");
    }
  
  }
  let arr=[5,6,8,9,2]
  fun("max")
  fun("min")
  fun("average")
  fun("nsih")
 
 