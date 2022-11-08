var arr = [1, 3, 55, 6, 74, -8, 19, -100, 99, 58];
var languages = ["JavaScript", "PHP", "Ruby", "Java", "Dart"];
//1
// var length = length.arr;
// for ( var i = 0; i < length ; i++) {
//   console.log(`Index: ${i} - Value: ${arr[i]} - Next: ${arr[i+1]}`);
// }
//2
// var max = Math.max(...arr);
// var index = arr.indexOf(max);
// console.log(`So lon nhat la :` + max + `  ` + `index la:` + index);
//3
// var min = Math.min(...arr);
// var index = arr.indexOf(min);
// console.log(`So nho nhat la :` + min + ` ` + `index la:` + index);
//4
// var avg = 0;
// var sum = 0;
// for (var i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(avg = sum / arr.length)
//5
//6
// var length = arr.length;
// var result = [];
// for (var i = 0; i < length; i++){
// arr[i] < 0 && result.push(arr[i])

// }
// console.log(result)
//7
// var length = arr.length;
// var result = 0;
// for (var i = 0; i < length; i++){
//     if (arr[i] % 5 == 0) result+= arr[i]
// }
// console.log(result)
//8
// var length = arr.length;
// for (var i = 0; i < length - 1; i++){
//     for (var j = i + 1; j < length; j++){
//         if ( arr[i] > arr[j] ) {
//         var thutu = arr[i];
//         arr[i] = arr[j];
//         arr[j] = thutu;
//         }
//     }

// }
// console.log(arr)
//9
// result = [];
// var length = arr.length;
// for (var i = 0; i < length; i++){
//     result.push(arr[i] * 2 + i);
// }
// console.log(result)
//10
// function checkPrime(num){
//     for (var i = 2; i  Math.sqrt(num); i++){

//     }
// }
// Object
var myInfo = {
  id: 1,
  name: "Thien",
  age: 18,
  address: "Ha Nam",
  getName() {
    return this.name;
  },
  getAge() {
    return this.age;
  },
  getAddress() {
    return this.address;
  },
  salary: {
    id: 1,
    rank: 20,
    getrank() {
      return this.rank * 1490000;
    },
  },
  showInfo(){
      console.log('Name: ' + this.name +  ', Age: ' + this.age + ', Address: ' + this.address);
  }

};
console.log(myInfo.salary.getrank());
myInfo.showInfo()

