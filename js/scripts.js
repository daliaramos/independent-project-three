$(document).ready(function(){
  $("form#beep-Boop").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    $("#result").text(result);
      event.preventDefault();
  });
  var beepBoop = function(number) {
    if (number === 0){
      return "boop"
    }
    else if (number === 1){
      return "beep"
    }

    else if (number/3) {
    return "Im sorry, Im afraid I can not do that."
    }
      }
    });
