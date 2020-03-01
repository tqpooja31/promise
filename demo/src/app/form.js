// const arr=[];

// function abc(){
// const url="https://reqres.in/api/users?";

// arr.push(url);
// }
// console.log(arr);

// function abc() {
//     var valueArray = [];
  
   
//     var url = "https://reqres.in/api/users?";
//     fetch(url)
//       .then(res => res.json())
//       .then(function(res) {
//         res.data.forEach(element => {
//           valueArray.push(element);
//         });
//       })
//       .then(() => console.table(valueArray))
//       .catch(err => console.log(err));
//   }
var url = "https://reqres.in/api/users?";

Promise.allSettled(url.map(url => fetch(url)))
  .then(results => { // (*)
    results.data.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });