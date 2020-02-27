//$("<button>").on("click", function() {
//     var searchTearm = $('#');
//     var numRec = $('#');
//     var startYear = $("#");
//     var endYear = $("#");
//     var searchBtn = $("#");
//     var clearBtn = $('#');

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=4NMFTXCRbYx8LHy7QqBwn8u8lZQLJ54C";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.response.docs;
        console.log(results);
    });
