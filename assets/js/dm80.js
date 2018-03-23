//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">People with experience-won expertise and skill are often willing to share... But, time – like money – is a limited resource. Just as you aren't walking around trying to give away money, people generally wait to be asked before giving away their time.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">25</span>:<i> Know the resources of your center and if possible other centers. Other centers, if they have the resources, are normally happy to help. It is always surprising how much good help one can get by just asking.</i></p>";

memoString += "<p>There is a phrase that makes its way through our circle, explained to me by someone who was told the same by another:<br />";
memoString += "<i>The chance of getting what you want (or need) increases dramatically if you ask.</i></p>";

memoString += "<p>Asking for help is a remarkable thing.<br />";
memoString += "Asking for help shows that you are not ignorant to recognizing when you need it, nor are you so stubborn as to hide that need. And, if help should be asked of you, foster community. When appropriate, the asking and lending of help allows us to build community strength rather than let circumstance exploit an individual weakness.</p>";

memoString += "<p>After all, <a href=\"https://www.youtube.com/watch?v=qtT_8pEjHgo&t=22m03s\" target=\"_blank\">one of the most gorgeous examples of soul-lifting syncopation doesn't come from a plea to ignore help when sought or offered...</a></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
