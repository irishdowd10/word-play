$(function() {
  $("#words").submit(function() {
    event.preventDefault();
    var sentence = $("#sentenceOne").val().split(" ");

    console.log(sentence);

    threeOrMore = [];
    sentence.forEach(function(word) {
      if ((word.length) >= 3) {
        threeOrMore.push(word)
      }
    alert(threeOrMore);
  });
  threeOrMore.reverse();
  var newString = threeOrMore.join(" ");
  $("#unordered").append(newString);

  console.log(newString);
});
});
