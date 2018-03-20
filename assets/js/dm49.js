//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Sometimes I know a thing by the sight of it – what it is, how it works, what it means... I just don’t always know the name of it.</span></p><br />";

memoString += "<p><i>A </i><span id=\"vocab\">Gantt Chart</span><i> is a bar chart of schedule information where activities are listed on the vertical axis, dates are shown on the horizontal axis, and activity durations are shown as horizontal bars placed according to start and finish dates.</i></p>";

memoString += "<p>Gantt charts are easy to read and commonly used as a visual representation of a project schedule. Because of this level of clarity, you’ll commonly find Gantt charts in management presentations. Developed by <a href=\"./assets/img/memoImages/dm49_gantt.jpg\" target=\"_blank\">Henry Gantt as a production control tool</a>, a Gantt chart shows the start and finish dates of the different required elements within a project.</p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/dm49_chart.png\" width=\"500\"><br /></p>";

memoString += "<p>Depending on the depth of software (or effort employed) and the message you wish to communicate, Gantt charts might also show additional depth of a project’s schedule details including activity sequencing, activity completion status, resource assignment/availability, dependencies, critical path, and so on.</p>";

memoString += "<p>I generally find Gantt charts most helpful in visualizing all the pieces of the puzzle to make better informed decisions about timetables and commitments.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
