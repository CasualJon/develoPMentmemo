//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">In part, Culture is the collection of ideas, rules, and shared history of a community. It is what you uphold as part of that community, so embrace feedback as a basis for improvement by making it an open and safe process. A community that collectively makes reviews and feedback safe means nothing is withheld or ever learned second-hand.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">37</span><i> Reviews are for the reviewed and not the reviewer. The review is a failure if the reviewed learn nothing from it.</i></p>";

memoString += "<p>When I write an email, I often reread it before sending – just to check for errors or mistakes.</p>";

memoString += "<p>Unfortunately, I too often find that things look good in that quick read-through, so... click! Sent!<br />";
memoString += "With a reply, I might review my initial email to refresh myself, and that's when I find mistakes – which by then are frustrating and embarrassingly laughable.</p>";

memoString += "<p>When you're heavily engaged in a task – whether writing, building, managing to the project plan, etc. – sometimes you see what you expect to see because you know what <i>should be</i> or you've rationalized it that way.</p>";

memoString += "<p>Reviews by someone external are a sanity check for quality's sake and not a personal critique of you, so don’t bristle at the feedback. The process is for us to identify things which might be really embarrassing on down the line if not caught now.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
