let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("no random number was supporting")
        
    }
    else {
        setTimeout(()=>{
            console.log("I am")
            resolve("Rishi")
        }, 1000); 
    }
})

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("no random number was supporting 2")
        
    }
    else {
        setTimeout(()=>{
            console.log("I am 2")
            resolve("Rishi 2")
        }, 3000); 
    }
})

let p3 = Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})