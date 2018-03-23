//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Everyone has meetings. I learned the hard way that agendas and meeting size should be carefully matched.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">48</span>:<i> A working meeting has about six people attending. Meetings larger than this are for information transfer.</i></p>";

memoString += "<p>Want to generate new ideas by employing lateral thinking, or gain fresh insight into the problem by evaluating different perspectives? Hoping to sit down and push through a round of fixes? Trying to figure out what to order for lunch?</p>";

memoString += "<p>If you intend to accomplish something more than swirl, you need a small team with clearly defined roles and responsibilities that can work together and execute.</p>";

memoString += "<p>Too many in the room and either everyone wants to get their word in (swirl), or you’ll encounter <a href=\"https://en.wikipedia.org/wiki/Diffusion_of_responsibility\" target=\"_blank\">Diffusion of Responsibility</a> (nothing).</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
