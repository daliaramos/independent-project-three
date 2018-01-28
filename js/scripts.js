
var array = [];

function beepBoop(number) {
  for(var i=0; i <= number; i++) {
    if (i % 3 == 0)
      array.push("sorry dave");
    else if (i.toString().includes("0"))
      array.push("beep");
    else if (i.toString().includes('1'))
      array.push("boop");
    else
      array.push(i)
  }

return array;
}
//busineslogic

$(document).ready(function(){
  $("form#beep-Boop").submit(function(event){
    event.preventDefault();
    var number = $("input#number").val();
    var result = beepBoop(number);
    $("#result").text(result);
      event.preventDefault();
});
});
