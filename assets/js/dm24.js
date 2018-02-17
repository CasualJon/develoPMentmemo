//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Many carry a nostalgia for the past. Some go further and prefer the (sometimes naïvely assumed) simplicity of times well gone.<br />";
memoString += "Along that line, I prefer dictionaries which choose to first define stress as an emphasis or attached importance to a thing over dictionaries that <i>stress</i> our modern-day concept of stress.</span></p><br />";

memoString += "<p><i>Deadlines...</i></p>";

memoString += "<p>Interestingly, the word \"deadline\" does not occur in the PMBOK Guide (5th Edition) despite the <i>stress</i> we place upon the notion.</p>";

memoString += "<p>Deadlines are a core concept in Project Management. We plan and manage schedules of activities dedicated to the delivery of a unique, non-existent outcome by a defined end-date. The whole projet is, itself, an instantiated deadline.</p>";

memoString += "<p>As project managers, we obsess about deadlines because that is the inherent nature of projects. However, deadlines are valuable not because of the stress they cause, but because of the <i>stress</i> they carry.</p>";

memoString += "<p>Deadlines are important. We stress about deadlines because we <i>stress</i> deadlines.<br />";
memoString += "Deadlines give clear prioritization: they are the mile markers of reassurance to show that you are still on the planned route.<br />";
memoString += "So, perhaps it’s not a bad thing to be a stress-driven person if all that means is having the right priorities.</p>";

memoString += "<p><small>Walt Disney: <i>\"Everyone needs deadlines.\"</i><br />";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
