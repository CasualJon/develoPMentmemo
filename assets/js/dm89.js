//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"https://www.youtube.com/watch?v=iKW3UbjNlFA\" target=\"_blank\">Beating a dead horse is a disturbing turn of phrase</a>, but it makes the point that you're going nowhere just as fast as you possibly can.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">127</span>:<i> Too many people at Headquarters believe the myth that you can reduce the food to the horse every day till you get a horse that requires no food. They will try to do the same with projects, which eventually end up as dead as the horse.</i></p>";

memoString += "<p>Cannibalism isn’t often a concern on our projects: the Epic implementation is the organizational priority pulling people, time, and money from elsewhere.</p>";

memoString += "<p>But, the point that subtle change can overwhelm is significant.<br />";
memoString += "An analyst leaves, a couple of new forms become necessary, an additional department is included... Not every major concern comes like a hairpin turn before go-live, and a few degrees here and there over many miles will take you just as far from your planned destination.</p>";

memoString += "<p>Evaluate how a change will affect the current situation, but keep in mind the sum of all changes from the original plan – it's difficult to deliver on expectations when you're chasing a moving target.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
