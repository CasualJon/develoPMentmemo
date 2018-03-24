//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">We learn and we improve... lesson by lesson, task by task, <a href=\"https://www.youtube.com/watch?v=YR5ApYxkU-U&t=2m58s\" target=\"_blank\">brick by brick</a>.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Student Syndrome</span><i> is a form of planned procrastination where one will start to apply themselves to an assignment or task only at the last possible moment before a deadline.</i></p>";

memoString += "<p>In 2010, Derek Smith (University of Cape Town in South Africa) published <a href=\"http://iisit.org/Vol7/IISITv7p489-494Smith805.pdf\" target=\"_blank\">\"The Effects of Student Syndrome, Stress, and Slack on Information Systems Development Projects,\"</a> which builds upon earlier works investigating Student Syndrome in Project Management. Essentially, Smith asserts that people will sometimes wait as late as possible before starting a task to purposefully increase time pressure and stress levels.</p>";

memoString += "<p>Unfortunately, waiting until the very last to begin a task leaves zero margin for error.<br />";
memoString += "Some feel this approach is selected to induce a level of urgency, borne of necessity, to ensure full efforts are devoted to a task. Also unfortunately, those subjecting themselves to Student Syndrome operate under the misapprehension that there is such a thing as a \"clutch player.\"";

memoString += "<ul>Pro tip: there is not.<br />";
memoString += "<li><a href=\"https://www.psychologytoday.com/blog/extreme-fear/201006/the-science-sports-is-there-such-thing-clutch-performer\" target=\"_blank\">The Science of Sports: Is There Such a Thing as a Clutch Performer?</a><br /><small>(<i>Psychology Today</i>)</small></li>";
memoString += "<li><a href=\"http://research.sabr.org/journals/the-statistical-mirage-of-clutch-hitting\" target=\"_blank\">The Statistical Mirage of Clutch Hitting</a><br /><small>(<i>Society for American Baseball Research</i>)</small></li></ul>";

memoString += "<p>Student Syndrome certainly increases stress, but stress levels among IT project managers is already high enough. High stress levels negatively impact the health and well-being of individuals, as well as lead to lowered job satisfaction, low self-esteem, reduced motivation, anxiety, depression, and decreased organizational commitment. And to compound all of those great benefits by self-election?... eww.";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
