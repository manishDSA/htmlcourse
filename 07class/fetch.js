// function hello() {
//     try {
//         console.log("hello");
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// hello()


//API fetch
// async function hello() {
//     try {
//         const response = await fetch("https://api.ipify.org/?format=json")
//         const jsonResponse = await response.json()
//         console.log(jsonResponse)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// hello()


// function hello() {
//     new Promise((resolve, reject) => {
//         fetch("https://api.ipify.org/?format=json")
//             .then(response => response.json())
//             .then(jsonResponse => resolve(jsonResponse))
//             .catch(error => reject(error));
//     })
//     .then(jsonResponse => {
//         console.log(jsonResponse);
//     })
//     .catch(error => {
//         console.log(error.message);
//     });
// }

// hello();




// function hello() {
//     fetch("https://api.ipify.org/?format=json")
//       .then((response) => {
//         // Check if the response is okay (status in the range 200-299)
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((jsonResponse) => {
//         console.log(jsonResponse);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }
  
//   hello();
  

// const ipID =async ()=>{
//     try {
//                 const response = await fetch("https://api.ipify.org/?format=json")
//                 const jsonResponse = await response.json()
//                 console.log(jsonResponse)
//             } catch (error) {
//                 console.log(error.message)
//             }
//         }

// ipID() 



// const address = async (a)=>{

//     try {
//        const response =  await fetch(`https://api.zippopotam.us/IN/${a}` )

//        const  jsonrespone = await response.json()
//        console.log(jsonrespone);
//     } catch (error) {
        
//         console.log(error.message);
//     }
// }

// address(283110)

const cricket = async ()=>{

    try {
       const response =  await fetch("https://api-v1.com/v1/sV3.php?key=NZQ" )

       const  jsonrespone = await response.json()
       console.log(jsonrespone["j"]);
       console.log(jsonrespone["A"]);
      
    } catch (error) {
        
        console.log(error.message);
    }
}

cricket()