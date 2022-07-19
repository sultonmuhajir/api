// Fetch
fetch("https://sultonmuhajir.github.io/tenses/assets/tenses.json")
   .then((res) => res.json())
   .then((data) => {
      console.log(data);
   });

// Ajax
const ajax = new XMLHttpRequest();
ajax.open("GET", "https://sultonmuhajir.github.io/tenses/assets/tenses.json");
ajax.send();
ajax.onload = function () {
   const data = JSON.parse(ajax.response);
   console.log(data);
};
