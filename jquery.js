// getJson
$.getJSON("https://sultonmuhajir.github.io/tenses/assets/tenses.json", function (data) {
   console.log(data);
});

// Ajax
$.ajax({
   url: "https://sultonmuhajir.github.io/tenses/assets/tenses.json",
   success: function (data) {
      console.log(data);
   },
});
