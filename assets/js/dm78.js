//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"https://www.youtube.com/watch?v=s28vNyjOlbc\" target=\"_blank\">Nothing builds momentum quite like a well-constructed movie montage.</a> Wouldn’t it be nice if that worked in real life?</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Momentum</span><i> is the impetus and driving force gained by the development of a process or course of events.</i></p>";

memoString += "<p>Momentum itself isn't a topic from project management cannon, but we know that projects take teams and that teams respond to momentum. Momentum is a common refrain of post-game commentary for athletes and talking head commentators... When teams gain <i>the momentum</i>, they seem unstoppable.</p>";

memoString += "<p>Long observing that positive momentum can bring about great things, it turns out that negative momentum is more damaging to teams than positive momentum is beneficial – at least to a team's mental state. In 2014, researchers published work on <a href=\"http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0097887\" target=\"_blank\">on How Psychological and Behavioral Team States Change during Positive and Negative Momentum</a>.";

memoString += "<p>In varying states of positive and negative momentum, teams were evaluated in metrics of task effectiveness, interpersonal coordination, team cohesion, and effort exertion. Negative perception of team effectiveness and cohesion are stronger under negative momentum than the other way around, and this accompanied (perhaps caused) by a significant reduction in interpersonal coordination and a rapid decline in individual effort exerted.</p>";

memoString += "<p>Under stress in circumstances of negative momentum, divides form within the team and individual focus turns inward.</p>";

memoString += "<p>Translating this research of team dynamics to the world of projects: capitalize on even small wins and positive outcomes. Positive momentum is important to team performance, but more important for the project manager is vigilantly guarding morale against negative momentum, which can quickly spiral out of control.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
