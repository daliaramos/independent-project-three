$(document).ready(function(){
  $("form#beep-Boop").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    $("#result").text(result);
  });
  var beepBoop = function(number){
      if else(number.charAt(0) === 0 || number.charAt(1) === 0)
        number +="q";
        return number;
    }
});
