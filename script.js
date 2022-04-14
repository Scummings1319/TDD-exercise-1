let vowels = ["a", "e", "i", "o", "u"];

let translate = (word) => {
  //if it starts with a vowel
  //add way to end of word
  // return the pig latin
  word = word.toLowerCase();

  //charAt(0) is identifying the first letter of word
  if (vowels.includes(word.charAt(0))) {
    return word + "way";
  }
  //else add first constanant, add the end of word and add ay, then return pig latin
  else {
    // i is index for the first vowel
    var i = 0;
    //looping to see the letters before the first vowel
    // exclamination mark means to keep looping until you find a vowel.
    while (!vowels.includes(word.charAt(i))) {
      i++;
    }
    return word.slice(i) + word.slice(0, i) + "ay";
  }
};

module.exports = translate;
