// // // !---USING LITERAL WAY ----
// // // let arr=["html","css", "javascriprt",1,2];
// // // console.log(arr);

// // let arr=["html", "css"]
// // console.log(arr);
// // console.log(arr[0]);
// // arr[2]="javascript"
// // console.log(arr);
// // arr[1]="react js"
// // console.log(arr);
// // delete arr[1]
// // console.log(arr);
// // console.log(arr[1]);


// // // !--USING ARRAY CONSTRUCTOR----
// // let arr1=new Array()
// // console.log(arr1);
// // arr1[0]=1
// // console.log(arr1);

// // !---USING METHOD OF ARRAYS---

// // let arr=["html","css","javascript"]
// // // console.log(arr.length);          //!--1

// // // arr.push("bootstrap","reactjs")  //!--2
// // // arr.pop()                        //!--3
// // // arr.unshift("java", "sql")       //!--4
// // // arr.shift()                      //!--5
// // console.log(arr);

// // let arr=["html","css","javascript","Bootstrap","React js"]  //!--6
// // // // let arr1=arr.slice(0,3)
// // // console.log(arr1);  

// // arr.splice(1,2,"java","sql","phyton","c++")    //!--7
// // console.log(arr);

// let arr=[10,20,30,40,50]
// // arr.map((v)=>{
// //     console.log(v);
//     //    console.log(v+5);
// // })

// let arr1=arr.map((v)=>{
//     return v+5;
// })
// console.log(arr);
// console.log(arr1);

// let arr=[3,5,8,10,11,13]

// let arr1=arr.filter((a)=>{
//     return a%2!=0;
// })
// console.log(arr1);

// let arr = [110, 82, 64, 51, 140, 99, 33];
// let result = arr
//   .filter(v => v > 80)   // keep 110, 82, 140, 99
//   .map(v => v + 100);    // add 100 -> 210, 182, 240, 199

// console.log(result); // [210, 182, 240, 199]

// let arr1=arr.filter((v)=>{
//     return v>80
// })
// console.log(arr1);

// let arr2=arr1.map((v)=>{
//     return v+100
// })
// console.log(arr2);


// !EXAMPLE---1 

// let arr=[20,null,undefined,12,true,16]
// let arr1=arr.filter((v)=>{
//     return typeof v== "number";
// })
// console.log(arr1);
 
// let food=["ChickenBiryani",
//     "panner Biryani",
//     "chilly chicken",
//     "paneer kadahi",
//     "chicken masala",
//     "fried rice",
//     "gulab jamun",
//     "panner chilli"];
//     let arr1= food.filter((a)=>{
//         return a.includes("ch");
//     })
//     console.log(arr1);
    

// let arr=[2,7,9,4,3,6,1,8,55,23,45,78,90]

// let arr1=arr.some((z)=>{
//     return z>80;
// })
// console.log(arr1);

// let arr1=arr.every((z)=>{
//     return z>0;
// })
// console.log(arr1);

// let arr=["html", "css","javascript"]
// let arr1=arr.includes("javascript")
// console.log(arr1);

// let arr=["html", "css"]
// let arr1=["javascript","reactjs"]
// let arr2=["Bootstrap","Tailwind Css"]
// let newArray=arr.concat(arr1,arr2)
// console.log(newArray);
// console.log(arr);

// let arr=["html", "css","javascripti","html","react js"]
// console.log(arr.indexOf("html",2));
// console.log(arr.lastIndexOf("html",3)); 

// let arr=[1,2,3,4,5,6]
// arr.reverse();       // !-- WILL CHANGE TO ORGINAL ARRAY
// console.log(arr);

// let arr=["html",["css",["javascript",["react js"]]]]
// let arr1=arr.flat(3)
// console.log(arr1);

// arr1.map((v)=>{
//     console.log(v);
    
// })

// let arr=["html","css","js","sql","phyton"]
// arr.fill("java",1,3)
// console.log(arr);
 
// console.log(arr.toString());

// let str="javascript";
// let arr=Array.from(str)
// console.log(arr);

// let arr=["html","css","html","css"]

// let arr1=arr.find((v)=>{
//     return v=="css"
// })
// console.log(arr1);

// let iv=0
// let arr=[1,2,3,4,5,6]
// let arr1=arr.reduce((acc,cv)=>(acc+cv),iv)

// console.log(arr1);

