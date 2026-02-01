//  let p1=new Promise((res,rej)=>{
//     // res("i am resolved")
//     rej("i am rejected")
//  }) 
//  p1.then(()=>{
//     console.log("resolved then");
    
//  })
//  p1.catch(()=>{
//     console.log("rejected catch");
//  })

//  p1.finally(()=>{
//     console.log("finally");
//  })

// p1.then(()=>{
//     console.log("resolved then");
// }).catch(()=>{
//     console.log("rejected catch");
// }).finally(()=>{
//     console.log("finally");
// })

//!---------------------------------------------------------------------------------------------------------------------------!//

// let p1=new Promise((res, rej)=>{
//     res("i am resolved-p1")
// })
// let p2=new Promise((res, rej)=>{
//     res("i am resolved-p2")
// })
// let p3=new Promise((res, rej)=>{
//     res("i am resolved-p3")
// })
// Promise.all([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("then block ");
// }).catch(()=>{
//     console.log("catch block ");
// }).finally(()=>{
//     console.log("finally ");
    
// })


//----------------------------------------------------------------------------------------------------------------------------------

// let p1=new Promise((res, rej)=>{
//     res("i am resolved-p1")
// })
// let p2=new Promise((res, rej)=>{
//     res("i am resolved-p2")
// })
// let p3=new Promise((res, rej)=>{
//     res("i am resolved-p3")
// })
// Promise.allSettled([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("then block ");
// }).catch(()=>{
//     console.log("catch block ");
// }).finally(()=>{
//     console.log("finally ");
    
// })

//----------------------------------------------(RACE)------------------------------------------------------------------------------------

// setTimeout(()=>{
//     console.log("HAPPY NEW YEAR 2026");
    
// },5000)

// setInterval(()=>{
//     console.log("HAPPY NEW YEAR 2026");
    
// },3000)

//!------------------------------------------------------------------------------------------------------------------------------


// let p1=new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("I AM P1")
//     },4000)
// })

// let p2=new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("I AM P2")
//     },3000)
// })

// let p3=new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("I AM P3")
//     },4000)
// })

// Promise.race([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("then block ");
// }).catch(()=>{
//     console.log("catch block ");
// }).finally(()=>{
//     console.log("finally ");
    
// })


// !-------------------------------------(ANY)----------------------------------------------------------------- !//

// let p1=new Promise((res, rej)=>{
//     setTimeout(()=>{
//         rej("I AM P1")
//     },1000)
// })

// let p2=new Promise((res, rej)=>{
//     setTimeout(()=>{
//         rej("I AM P2")
//     },2000)
// })

// let p3=new Promise((res, rej)=>{
//     setTimeout(()=>{
//         rej("I AM P3")
//     },3000)
// })

// Promise.any([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("then block ");
// }).catch((v)=>{
//     console.log("catch block ");
// }).finally((v)=>{
//     console.log("finally ");
    
// })

//---------------------------------------------------------------------------------------------------------------------//
