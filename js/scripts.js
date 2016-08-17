//Backend
var characterArray = function(word) {
  var array = ["a", "e", "i", "o", "u"];
   if(array.includes(word.charAt(0))){
     word += "ay";
   } else {
   }
  return(word);
 }


//Frontend
$(document).ready(function() {
  $("form").submit(function(event){
    var pigInput = $("#pig").val().toLowerCase()
    var result = characterArray(pigInput)
    $("#result").text(result);

    event.preventDefault();
  });
});
