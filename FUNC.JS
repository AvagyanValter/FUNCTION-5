//1 Տրված է բնական թիվ: Արտածել YES, եթե թվի թվանշանների մեջ կա 3 թվանշան,հակառակ դեպքում NO

// function f(num) {
//     while (num > 0) {
//         let tvanshan = num % 10;
//         if (tvanshan === 3) {
//             console.log("YES");
//             return;
//         }
//         num = (num - tvanshan) / 10;
//     }
//     console.log("NO");
// }

// f(123);
// f(25647);
// f(53964);
// f(25610);


//2 Տրված է բնական թիվ: Արտածել YES, եթե թվի թվանշանների մեջ չկա 5 թվանշանը,հակառակ դեպքում արտածել NO:

// function f(num) {
//     while (num > 0) {
//         let tvanshan = num % 10;
//         if (tvanshan === 5) {
//             console.log("NO");
//             return;
//         }
//         num = (num - tvanshan) / 10;
//     }
//     console.log("YES");
// }

// f(123);
// f(26457);
// f(73964);
// f(25610);


//3 Տրված է բնական թիվ: Արտածել YES, եթե  թվի թվանշանները աճման կարգով են դասավորված հակառակ դեպքում արտածել NO:

// function f(number) {
//     let naxordtvanshan;
//     while (number > 0) {
//         let tvanshan = number % 10;
//         if (tvanshan >= naxordtvanshan) {
//             console.log("NO");
//             return;
//         }
//         naxordtvanshan = tvanshan;
//         number = (number - tvanshan) / 10;
//     }
//     console.log("YES");
// }

// f(1234);
// f(2564);
// f(231);
// f(3456789);


//4 Տրված է բնական թիվ: Արտածել YES, եթե թվի թվանշանները նվազման կարգով չեն դասավորված,հակառակ դեպքում արտածել NO:

// function f(number) {
//     let naxordtvanshan = -1;
//     while (number > 0) {
//         let tvanshan = number % 10;
//         if (tvanshan <= naxordtvanshan) {
//             console.log("YES");
//             return;
//         }
//         naxordtvanshan = tvanshan;
//         number = (number - tvanshan) / 10;
//     }

//     console.log("NO");
// }

// f(4321);
// f(5432);
// f(12546);
// f(87654);


//5 Տրված է բնական թիվ: Արտածել YES, եթե թվի թվանշանների գումարը մեծ է քսանից,հակառակ դեպքում արտածել NO:

// function f(number) {
//     let sum = 0;
//     while (number > 0) {
//         let tvanshan = number % 10;
//         sum += tvanshan;
//         number = (number - tvanshan) / 10;
//     }
//     if (sum > 20) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }
// }

// f(1234);
// f(4321);
// f(97531);
// f(2468);


//6 Տրված է բնական թիվ: Արտածել YES, եթե թվի թվանշանների արտադրյալը փոքր է երեսունից:Հակառակ դեպքում արտածել NO:

// function f(number) {
//     let p = 1;
//     while (number > 0) {
//         let tvanshan = number % 10;
//         p *= tvanshan;
//         number = (number - tvanshan) / 10;
//     }
//     if (p <= 30) {
//         console.log("YES"); 
//     } else {
//         console.log("NO"); 
//     }
// }

// f(1234);
// f(97531);
// f(2468);
// f(11119);
// f(1235);