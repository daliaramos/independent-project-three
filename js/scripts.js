$(document).ready(function(){
  $("form#beep-Boop").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    $("#result").text(result);
  });
  var beepBoop = function(number){
    if ((number % 3 === 0))
      return true;
  }
});
