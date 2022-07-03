// getJson
$.getJSON("https://feriirawan-api.herokuapp.com/list/symbols/province/150", function (data) {
   console.log(data);
});


// Ajax
$.ajax({
   url: "https://feriirawan-api.herokuapp.com/list/symbols/province/150",
   success: function (data) {
      console.log(data);
   },
});
