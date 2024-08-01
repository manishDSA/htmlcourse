// function hello(){

//     console.log("my first function");
// }


// hello();

// function manish(a,b=0) {
//     console.log(a,b);
    
// }
// manish("hello",21)
// manish("solanki")
// manish(24)



// function name1(...a) {
//     console.log(a[0]);
    
// }

// name1("hello",21,true)


// function name2(b,...a) {
//     console.log(b,a);
    
// }
// name2("hello",21,true)

// function name3(...a) {
//      console.log(a);
//     console.log(a[0][0]);
//     console.log(a[0][1]);
//     console.log(a[1]["name"]);
//     console.log(a[1]["age"]);
    
// }
// let age=24
// let name = "manish"
// let obj= {name,age}
// let arr=[name,age]
// name3(arr,obj)

// function name4() {
//     console.log('hello');
//     let arr1=["manish",21,true]
//     let arr2 =["solanki",21,false]
//     return{arr1,arr2}
// }

//   let fun = name4()
//   console.log("fun",fun);




// function name5() {
//     try {
//         return hello
//         // return "hello"
//     } 
//     catch (error) {
       
//         return {"errormessage":error.message}
//         // return error.message
//     }
    
// }
// let fun1 = name5()

// if (fun1["errormessage"]) {
//     console.log("code mistake");
// }
// else{
//     console.log(fun1);
// }




// let name6=  (a)=>{
//     return a;

    
// }

// let obj ={"name":"manish","age":24}
// console.log(name6(obj));



// let name7 = ()=>{
//     console.log(obj);

// }
// let obj ={"name":"manish","age":24}
//  name7()

// let obj = {"name1":"function number 8","name2":"function number is 8"}
// let name8=()=>{
//     return obj
// }
// let name7 = ()=>{
// return name8()
// }

// let fun4= name7()
// console.log(fun4);