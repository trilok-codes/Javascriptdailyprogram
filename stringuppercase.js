function transform(s){
    //code here
  var words = s.split(' ');
var capitalizedWords = [];

for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
}

var resultString = capitalizedWords.join(' ');

return resultString;


}
var s= " tomorrie gaor bgst jsyue"
console.log(transform(s))
