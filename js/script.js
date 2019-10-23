$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
function pig(s){
  return s[0] + "ay";
}
function pig2(input){
  var start = 0
  for(var i = 0; i < input.length; i++){
  if("aeiou".includes(input[i])){
  return input.substring(i);
  }
}
}
console.log(pig2("latin"))
 function pig3(x){
    return pig2(x)+pig(x)
 }

$("#button").click(function(){
    var text = $(".input").val();
    var pigtext = pig3(text);
    $(".output").html(pigtext);


function addAY(word, suffix){
    return word

     + suffix
}

funtion findVou(word) {
    let vowels = ["a", "e", "i", "o", "u"]
    let firstLetter = word[0];

    vowels.forEach(function(vowel){
if firstLetter == vowel


    })

}

})


});
