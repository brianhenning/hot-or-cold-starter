$(document).ready(function(){
	

/*--Display information modal box--*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

 /*--Hide information modal box--*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });



   var generateNum = function() {
    return Math.floor((Math.random() * 100) + 1);
  };


    var randomNum = generateNum();
    var userNum = $('#userGuess').val();
    var difference = ('randomNum' - 'userNum');
    var totalGuess = 1;
      

      /*var userNum = $('#userGuess').val();
      var difference = (randomNum - userNum);
      $('#count').text("0");
      $('#guesslist').empty();
      $('#feedback').text("Make your Guess!");*/

      if (userNum === randomNum) {
        $('#feedback').text("You Got It - How Did You Do That?!");
      };
      else if (difference >= 50) {
        $('#feedback').text("Ice Cold - I Mean Frigid Really!");
      };
      else if (difference >= 35 && difference < 50) {
        $('#feedback').text("Pretty Darn Cold");
      };
      else if (difference >= 30 && difference < 35) {
        $('#feedback').text('Cold');
      };
      else if (difference >= 25 && difference < 30) {
        $('#feedback').text("Luke Warm");
      };
      else if (difference >= 15 && difference < 25) {
        $('#feedback').text("Warm");
      };
      else if (difference >= 10 && difference < 15) {
        $('#feedback').text("Hot!");
      };
      else if (difference >= 5 && difference < 10) {
        $('#feedback').text("Very Very Hot!");
      };
      else if (difference >= 2 && difference < 5) {
        $('#feedback').text("Screaming HOT!");
      };
      else if (difference >= 1) {
        $('#feedback').text("BLAZZING HOT! - Just Pick It Already!");
      };
      else {
        alert("Whoops - Something Went Wrong Here");
      };

};


});