$(document).ready(function(){
  $("form#beep-Boop").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    $("#result").text(result);
      event.preventDefault();
  });

  function beepBoop1(number){
      if (number.charAt(1) === 0)
        return "q";

  }
  });
