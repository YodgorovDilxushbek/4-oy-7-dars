//                            Math function
// 1-misol
// let num =Math.trunc(Math.random()*100)

// console.log(num);

// 2-misol

// let num =+prompt(`sonni kiriting`)

// if (num>0) {
//     let kvadiratIldizi =Math.sqrt(num)

//     console.log(`sonni kvadirat ildizi` +` `+ kvadiratIldizi);

// }

// 3-misol

// let num1 = +prompt(`1-sonni kiriting`);
// let num2 = +prompt(`2 -sonni kiriting`);
// let num3 = +prompt(`3 -sonni kiriting`);
// let num4 = +prompt(`4 -sonni kiriting`);
// let num5 = +prompt(`5 -sonni kiriting`);

// let engKatta = Math.max(num1, num2, num3, num4, num5);
// let engKichik = Math.min(num1, num2, num3, num4, num5);

// console.log(`eng katta son` + engKatta);
// console.log(`eng kichik son` + engKichik);

// 4-misol
// let num =+prompt(`haqiqiy sonni kiriting`)

// let yuqorigaYaxlitlash = Math.ceil(num)

// let pastgaYaxlitlash = Math.floor(num)

// console.log(`Yuqoriga yaxlitlash` +` ` + yuqorigaYaxlitlash);

// console.log(`pastga yaxlitlash` +` ` + pastgaYaxlitlash);

// 5-misol
// let radius = prompt("Aylananing radiusini kiriting:");
// let pi = 3.1415;
// let uzunlik = 2 * pi * radius;
// console.log("Aylananing uzunligi = " + uzunlik);

//                                          Ternary operator

// 1-misol
// let num = prompt("sonni kiriting");
// let sum =num>0?  console.log(`musbat son`) : console.log(`manfiy son`);

// 2-misol

// let age = prompt("yoshingni kirit");
// age>=18?  console.log(`ruxsat berilgan`) : console.log(`ruxsat berilmagan`);

// // 3-misol
// let num = prompt("sonni kiriting");
// num%2==0 ?  console.log(`juft son`) : console.log(`toq son`);
//                                             for sikl operator

// 1-misol
// for (let i = 1; i <= 20; i++) {
//     if (i%2==0 && i%2!=1) {
//         console.log(i);

//     }
// }

// 2-misol
// let sum =0
// for (let i = 1; i <=10; i++) {
//     let num =+prompt(`${i} sonni kiriting` )
//     if (num>0) {
// sum=sum +i;
//     }
// }
// console.log(sum);

// 3-misol
// for (let i = 1; i <=100; i++) {
//     if (i>=30 && i<=50) {
//         console.log(i);

//     }
// }

//4-misol
// let musbatSon=0;
// let manfiySon=0;

// for (let i = 1; i <= 15; i++) {
//     let num =+prompt(`${i} sonni kiriting`)
// if (num > 0) {
//     musbatSon ++
// }else{
//     manfiySon++
// }
// }
// console.log(musbatSon);
// console.log(manfiySon);

// 6-misol
// let sum=0;
// for (let i = 1; i <= 50; i++) {

// if (i%2==1) {
//     sum=sum+i;
// }
// }
// console.log(sum);

// 7-misol
// for (let i = 1; i <=5; i++) {
//     let num =+prompt(`${i} sonni kiriting`)
//     if (num>=18) {
//         console.log(`voyaga yetgan `);

//     }else{
//         console.log(`voyaga yetmagan`);

//     }
// }

// 8-misol
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum++;
//   }
// }
// console.log(sum);

// 9-misol
// let counter=0;
// for (let i = 1; i <=10; i++) {
//         let num =+prompt(`${i} sonni kiriting`)
//         if (num > 5 && num < 10) {
            
//         counter++
//         }
//     }
//     console.log(counter);
    
// 10-misol
// for (let i = 1; i <=10; i++) {
//             let num =+prompt(`${i} sonni kiriting`)
        
//         if (num>0) {
//             console.log(num);
            
//         }
//     }   

// 11-misol
    // let counter =0;
    // for (let i = 1; i <=15; i++) {
    //                 let num =+prompt(`${i} sonni kiriting`)
                
    //             if (num%2==0 || num<0) {
                
    //                 counter++
    //             }
    //         }   
    //     console.log(counter);
    
    // 12-misol
    // for (let i = 1;i <=50; i++) {
      
    //     if (i % 3 == 0) {
    //         console.log(i);
            
    //     }
    // }

    // 14-misol
    //  for (let i = 1;i <=10; i++) {
    //     let num =+prompt(`${i} sonni kiriting`)
      
    //     if (num>=50) {
    //         console.log(num);
            
    //     }
    // }

    // 15-misol
    //      for (let i = 1;i <=10; i++) {
    //     let num =+prompt(`${i} sonni kiriting`)
      
    //     if (num===0) {
    //         console.log(`0 mavjud`);
            
    //     }
    // }