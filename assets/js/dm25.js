//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">There are scores of published volumes dedicated to exploring various leadership styles and management techniques.<br />";
memoString += "Ultimately, it all stems from the need for a team. Without a team what is leadership or management but simple self-discipline?</span></p><br />";

memoString += "<p><i>Project managers accomplish work through the project team and other stakeholders, and as teams progress and develop maturity, the project manager must adapt.</i></p>";

memoString += "<p>In “Developmental Sequence in Small Groups”, Dr. Bruce Tuckman proposed a four stage model of group development for the US Navy.<br />";
memoString += "Later, in 1977, Tuckman joined with Mary Ann Jensen for further study and revised the suggested model based on empirical evidence to include a fifth stage of the team development process.</p>";

memoString += "<ol><li><b>Forming</b><br />";
memoString += "Easy. The beginning stage of team formation, where all members are brought together, introduced, and told the objectives of the project to learn why they’re working together. Commonly, team members are formal and reserved at this stage. Here, a project manager should be focusing on communication.</li><br />";

memoString +="<li><b>Storming</b><br />";
memoString += "The not-fun time starts. Team members become confrontational as they’re maneuvering for position, control, and status. Here, a project manager should understand that some conflict is necessary to push through this stage and focus on ensuring everyone remains centered on the project goals.</li><br />";

memoString += "<li><b>Norming</b><br />";
memoString += "The storm calms. Team members know one another by now and have grown comfortable with their place within the team environment. Now, team efforts shift from people problems to project problems and begin making decisions jointly as productivity increases. Unless a project manager maintains focus on collaborative participation toward project goals, teams could regress to the Storming stage.</li><br />";

memoString += "<li><b>Performing</b><br />";
memoString += "High-functioning ahead. Great teams wind up here, productive and effective in maturity, supported by high levels of trust among team members. Project managers can focus more on the project management process that the team itself, which is usually a self-directing body at this point, so long as you continue to update the on progress and keep the lines of communication open.</li><br />";

memoString += "<li><b>Adjourning</b><br />";
memoString += "Cue a blues track... The work is done, and the team is dissolved. For high performing teams, this can be accompanied by anxiety, sadness, and a sense of loss just like any breakup. A closure process helps – team celebrations and acknowledgment or recognition for contribution and sacrifice.</li></ol>";

memoString += "<p>Different teams progress through the stages of development at different rates, so there is not a schedule you can force upon this because it relies on each team member's interpersonal relationships and personal discovery.</p>";

memoString += "<p>It’s important to note, however, that as new team members are brought onto the team, the team development cycle starts anew regardless of where the team was within the first four stages.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
