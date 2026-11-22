// const msgPromise: Promise<string> = 
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Welcome to MD")
//         },2000)
//     })

// msgPromise.then((message)=>{
//     console.log(message);
// })

// const agePromise: Promise<number> = 
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(30)
//         },2000)
//     })

// agePromise.then((message)=>{
//     console.log(message);
// })

// function getUser(): Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Mohit")
//         },1000)
//     })
// }

// async function showUser(){
//     const user = await getUser();
//     console.log(user);
// }

// showUser()

// interface User{
//     id: number;
//     name:string;
// }

// function getUser(): Promise<User>{
//     return Promise.resolve({
//         id:1,
//         name:"Mohit"
//     })
// }

// getUser().then((user)=>{
//     console.log(user.name);
// })

function login(): Promise<string>{
    return new Promise((resolve, reject)=>{
        const success = false;

        if(success){
            resolve("Login Fine")
        } else{
            reject("Invalid Username")
        }
    })
}

login().then((msg)=>{
    console.log(msg);
}).catch((error)=>{
    console.log(error);
})