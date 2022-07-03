// Fetch
fetch("https://feriirawan-api.herokuapp.com/list/symbols/province/150")
   .then((res) => res.json())
   .then((data) => {
      console.log(data);
   });

   
// Ajax
const ajax = new XMLHttpRequest();
ajax.open("GET", "https://feriirawan-api.herokuapp.com/list/symbols/province/150");
ajax.send();
ajax.onload = function () {
   const data = JSON.parse(ajax.response);
   console.log(data);
};
