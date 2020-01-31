





//////////////////////////////////////////////////////////////////////
///////////////////////1. ВОЗВЕДЕНИЕ В СТЕПЕНЬ////////////////////////
//////////////////////////////////////////////////////////////////////



// let degreeBasis = "ОСНОВАНИЕ СТЕПЕНИ   "
// let exponent = "ПОКАЗАТЕЛЬ СТЕПЕНИ   "
// let renouncement = "ВЫ ОТКАЗАЛИСЬ ОТ ВВОДА ЧИСЛА"
// let inputBaseDataA = prompt("ВВИДИТЕ ПЕРВОЕ ИЗ ДВУХ ЦЕЛОЕ ЧИСЛО - " + degreeBasis)
// if (inputBaseDataA == null) { 
//   alert(renouncement + " - " + degreeBasis)
// } else {
//   if ( isNaN(inputBaseDataA)) {
//     alert(degreeBasis + inputBaseDataA + "  - ЭТО НЕ ЧИСЛО")
//   } else {
//     if ((inputBaseDataA - Math.trunc(inputBaseDataA)) > 0) {
//       alert(degreeBasis + inputBaseDataA + "  - ЭТО НЕ ЦЕЛОЕ ЧИСЛО")  
//     } else {
//       let inputRowDataN = prompt("ВВИДИТЕ ВТОРОЕ ИЗ ДВУХ ЦЕЛОЕ ЧИСЛО - " + exponent)
//       if (inputRowDataN == null) {
//         alert(renouncement + " - " + exponent)
//       } else {
//         if (isNaN(inputRowDataN)) {
//           alert(exponent + inputRowDataN + "  - ЭТО НЕ ЧИСЛО")
//         } else {
//           if ((inputRowDataN - Math.trunc(inputRowDataN)) > 0 ) {
//             alert(exponent + inputRowDataN + "  - ЭТО НЕ ЦЕЛОЕ ЧИСЛО")       
//           } else {
//             alert(degreeBasis + inputBaseDataA + "     " + exponent + inputRowDataN + "\n\ РЕЗУЛЬТАТ :  " + nunberToRower(inputBaseDataA, inputRowDataN))
//           }
//         }
//       }
//     }  
//   }  
// }
// function nunberToRower(a = 0, n = 0) {
//   let res = 1
//   let b = 1
//   if (n === 0) {
//     res = 1
//   } else {
//     for(let i = 0; i < Math.abs(n); i++) {
//       b = b * a
//     }   
//   }
//   // if (n > 0) {
//   //   res = b
//   // } else {
//   //   let c = (1 / b)
//   //   res = c
//   // }
//   return res = (n > 0) ? b : 1 / b
// }



//////////////////////////////////////////////////////////////////////
///////////////////  2. ВЫВОД АРГУМЕНТОВ ФУНКЦИИ  ////////////////////
//////////////////////////////////////////////////////////////////////



// function logArgsFunc() {
//   let res = ""
//   if (arguments.length == 0) {
//     res = "No arguments in function"
//     //console.log("No arguments in function")
//   } else {
//     for (let i = 0; i < arguments.length; i++) {
//       //console.log(arguments[i], typeof(arguments[i]))
//       if (typeof(arguments[i]) !== 'function') {
//         res = res.concat(arguments[i], ", ", typeof(arguments[i]), "\n" )
//       } else {
//         res = res.concat("function was called \n")
//       } 
//     }
//   }
//   return res
// }



// let uselessFunction = function() {
//   console.log("I am function")
// }


// // let result_str = logArgsFunc()

// let result_str = logArgsFunc(100, "text", uselessFunction, null, false, NaN)

// console.log(result_str)










//////////////////////////////////////////////////////////////////////
///////////////////////  3. СТРОКА ПАЛИНДРОМ  ////////////////////////
//////////////////////////////////////////////////////////////////////


// let inputDataString = prompt("ВВИДИТЕ СТРОКУ ИЗ СИМВОЛОВ")
// if (inputDataString == null) { 
//   alert("ВЫ ОТКАЗАЛИСЬ ВВЕСТИ СТРОКУ")
// } else { 
//   if (inputDataString.length < 1) {
//     alert("ВЫ НИЧЕГО НЕ ВВЕЛИ")
//   } else {
//     if (isPolindrom(inputDataString) == true) {
//       alert(inputDataString + "\n\ СТРОКА ЯВЛЯКТСЯ ПОЛИНДРОМОМ")
//     } else {
//       alert(inputDataString + "\n\ СТРОКА  НЕ ЯВЛЯКТСЯ ПОЛИНДРОМОМ")
//     }
//   }
// }  
// function isPolindrom(str) {
//   str = str.toLowerCase()
//   b = true
//   for (i = 0; i < Math.trunc(str.length / 2); i++) {
//     n = str.length - 1
//     if (str.charAt(i) == str.charAt(n - i)) {
//       continue  
//     } else {
//       return b = false
//     }
//   }
//   return b = true
// }



////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////




  


















