// let num1  = 10;

// if (num1>18) {
//     console.log("yes num1 is greater");
    
// }
// else{
//     console.log("num1 is small");
// }

// let num1 = 10;
// let num2 =2;
// let num3 =10;
// if (num1<num2&&num1<num3) {
//     console.log("yes num1 is small");
    
// }else if(num2<num3){
//     console.log("yes num2 is small");
// }
// else {
//     console.log("num3 is samll");
// }


// let year = 2008;
// let month = 6;
// let date = 15;

// let new_date = new Date();
// console.log(new_date.getFullYear());
// console.log(new_date.getMonth()+1);
// console.log(new_date.getDate());

// let age = new_date.getFullYear()-year;
// console.log(age);
// if (age>=18){
//     console.log("valid for vote");
// }
// else{
      
    
//     console.log("not");
// }


// let num1 ="2";
// switch (num1) {
//     case 1:
//         console.log("one");
//         break;
// case "2":
//     console.log("two");
//     break;
//     default:
//         console.log("default");
//         break;
// }


// let num1 =200;
// let i=1;
// while (i<=10) {
//     // let a= i*2
//     // console.log("2*"+i+"="+a);
//     console.log(`${num1}*${i}=${num1*i}`);
//     i++
    
// }

// let i=1;
// let num= 2;
// do {
    
//     console.log(num+"*"+" "+i+" ="+i*num)
//     i++;
// } while (i<=10);


// let num1= 18;
// for(let i=1;i<=10;i++){
//     console.log(`${num1}*${i}=${num1*i}`);

// }

// let string ="manish solanki";
// let reversestr= "";

// for(let i=string.length-1;i>=0;i--){
//     reversestr+=string[i];

    
// }
// console.log(reversestr);

// let str =[{"name":"manish","age":25},{"lastname":"solanki"}]

// const result= str.map((item,index)=>{

//     console.log(item["name"]||null);
//     console.log(item["age"]||null);
// })

// let arr=[
// 	{
// 		color: "red",
// 		value: "#f00"
// 	},
// 	{
// 		color: "green",
// 		value: "#0f0"
// 	},
// 	{
// 		color: "blue",
// 		value: "#00f"
// 	},
// 	{
// 		color: "cyan",
// 		value: "#0ff"
// 	},
// 	{
// 		color: "magenta",
// 		value: "#f0f"
// 	},
// 	{
// 		color: "yellow",
// 		value: "#ff0"
// 	},
// 	{
// 		color: "black",
// 		value: "#000"
// 	}
// ]
// const arr1= arr.map((item,index)=>{

//     console.log(item["color"]);
//     console.log(item["value"]);
// })

// let arr=[
//     { "id": "1001", "type": "Regular" },
//     { "id": "1002", "type": "Chocolate" },
//     { "id": "1003", "type": "Blueberry" },
//     { "id": "1004", "type": "Devil's Food" }
// ]
// const arr1= arr.map((item, index) =>{
//    if(item.id==1001||item.id==1002){
//     console.log(item.id);
//    }
// })




// let arr =[[1,5,3],[4,5,6]]

// const map= arr.map((item,index)=>{
//     item.map((i)=>{
//         console.log(i);
//     })

    
// })

// let arr = [[[1,2,3],[4,5,6]]]

// arr.map((item,index)=>{
  
//    item.map((i)=>{
//    i.map((j)=>{
//     console.log(j);
//    })
    
//    })
   
// })

// let arr = [[[1,2,3,4,5,6],],[[7,8,9,10]],[11,12,13,14]]

// arr.map((item,index)=>{

//     item.map((i)=>{
        



//     if(index==0||index==1){
//         i.map((j)=>{
//             console.log(j);
//         })
//     }else if(index==2){

//         console.log(i);
//     }
        
//         // i.map((j)=>{
//         //     console.log(j);
//         // })
//     })
// })