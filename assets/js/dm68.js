//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"https://www.youtube.com/watch?v=hTWKbfoikeg\" target=\"_blank\">I found it hard, it was hard to find<br />Oh well, whatever, nevermind</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\"><a href=\"https://en.wikipedia.org/wiki/Nirvana_fallacy#Perfect_solution_fallacy\" target=\"_blank\">Nirvana Fallacy</a></span><i> is the informal fallacy of comparing actual things with unrealistic, idealized alternatives. It can also refer to the tendency to assume that there is a perfect solution to a particular problem.</i></p>";

memoString += "<p>Analysis paralysis... even if you don’t know the term, as a project manager you’ve very likely had the experience.</p>";

memoString += "<p>Nobody <i>wants</i> to get the important things wrong, and because of this we sometimes examine available options to detrimental extremes. Over-thinking the situation by attempting to catalogue and account for every detail and possible variation can result in no action at all. While analysis can build insight, over-analysis will squander time, ultimately costing more than the value of that time alone.</p>";

memoString += "<p>In 1999, Dr. Gary Klein published <u>Sources of Power: How People Make Decisions</u> to discuss his research into naturalistic decision making. Specifically, he examined how people such as firefighters and fighter pilots, critical care nurses, and chess masters make high stakes decisions under real-world pressures of time, accountability, and uncertainty.</p>";

memoString += "<p>Experience teaches us. Each new situation provides exposure to the outcome of decisions and skills applied. Knowledge gained from experience builds and refines mental models for how the world works: our compiled results of inputs and variables employed before under similar conditions.</p>";

memoString += "<p>When swift action is required, <a href=\"https://www.edge.org/conversation/gary_klein-insight\" target=\"_blank\">naturalistic decision making frameworks</a> run mental simulations of these models against our immediate situation. If no problems are discovered in that brief examination of a model, the decision is made to apply it.</p>";

memoString += "<p>This is why Expert Judgment is listed as a Tool and Technique in 28 of the 47 project management processes identified within A Guide to the Project Management Body of Knowledge: to combat paralysis by analysis.</p>";

memoString += "<p>You will not have perfect information, you do not have infinite time. You cannot know the future, progress gains the finish line. Rarely is there a perfect solution, so draw from experience and apply common sense to keep the project moving. If the decision was wrong, then you can make changes with time; but when time is gone and there are fifty more decisions.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
