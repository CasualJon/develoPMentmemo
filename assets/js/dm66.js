//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">The value of our company culture is not from existence, but through the meaning delivered in exercising its character.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">13</span>:<i> A project manager should visit everyone who is building anything for her project at least once… People like to know that the project manager is interested in their work, and the best proof is for the manager to visit them and see firsthand what they are doing.</i></p>";

memoString += "<p>You might see yourself as a normal person, but within the project your role carries importance.</p>";

memoString += "<p>To IT counterparts, you are the expert: a source of guidance and authority whose attention holds value beyond the time spent. To operational managers and stakeholders you are a symbol of the gravity of the implementation, the change directly affecting their lives.</p>";

memoString += "<p>Spend time showing interest in the work of others on the project. Everyone desires recognition for their work as well as acknowledgement of the personal effort required in making any change so significant, and it means a good deal when received.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
