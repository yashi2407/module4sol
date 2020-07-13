(function (window) {


var names = ["Yashika", "Jasvir", "Jenny", "Paulina", "Faarah", "Lakshay", "Punam", "Lalit", "Jimmy","harsh"];


for (var i in names) {

 
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  
  if (firstLetter == 'j') {
     window.bye.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);