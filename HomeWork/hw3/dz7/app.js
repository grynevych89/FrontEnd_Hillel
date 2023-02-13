let numOrStr = prompt('input number or string');

switch (numOrStr) {
    case null:
      console.log('ви скасували');
      break;
    case '':
      console.log('Empty String');
      break;
    case !isNaN(+numOrStr) || numOrStr:
      console.log('number is Ba_NaN');
      break;
    default:
      console.log("OK!");
  }
console.log(numOrStr)

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }
