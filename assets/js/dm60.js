//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"./assets/img/memoImages/dm60_pov.jpg\" target=\"_blank\">Luke, you’re going to find that many of the truths we cling to depend greatly on our own point of view.</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Dependencies</span><i> are logical relationships between activities in which one activity is dependent on another to complete an action, or perhaps dependent on another to start an action, before it can proceed.</i></p>";

memoString += "<p>We’ve all been stuck before, unable to make progress with tied hands because something we relied on – perhaps an assumption – is incomplete. This week, some background about dependencies which we’ll later build upon :)</p>";

memoString += "<ul><li><b>Mandatory Dependencies</b> (also known as <i>hard logic</i> or <i>hard dependencies</i> [...sounds like a Tom Clancy novel]) are defined by the type of work being performed. For example, it’s impossible to start build before the server and environment configuration is complete... The nature of the work itself dictates the order in which the activities should be performed, and here physical limitation is a clear giveaway that you’re dealing with a mandatory dependency.</li><br />";

memoString += "<li><b>Discretionary Dependencies</b> (also known as <i>preferred logic</i>, <i>soft logic</i>, or <i>preferential logic</i>) are defined by the project team. Generally, discretionary dependencies are process-driven relationships based on best practices and/or past experience. For example, while you could go live before all testing is complete, you really, really, really don’t want to do that... really. Generally, it’s discretionary dependencies which have the flexibility to be changed or removed for schedule compression needs when fast tracking a project task.</li><br />";

memoString += "<li><b>External Dependencies</b>, while external to your project and therefore non-project activity, will impact project activities. For example, if your customer hasn’t yet completed Medicare Credentialing, then you’re not going to be billing CMS. This isn’t generally something in the scope of your software project, but will nonetheless affect your work.</li><br />";

memoString += "<li><b>Internal Dependencies</b> - Captain Obvious would like to describe how these differ from external dependencies: they come from inside the project! Perhaps your customer wants to hold off on a workflow decision until the Process Improvement group studies current operational inefficiencies. In that case, the outstanding decision (now dependent on PI review) means you’re unable to build the workflow, which results in being unable to test that workflow.</li></ul>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
