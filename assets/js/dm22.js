//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"vocab\">Parkinson’s Law of Triviality</span><i> asserts that a group spends time on trivial tasks because individuals are better able to participate. The more complicated a topic or issue, the more difficult it becomes to understand, plan, discuss, and critique. This difficulty results in less input from the group, and thus less swirl.</i></p>";

memoString += "<p>In 1957, C. N. Parkinson (the same guy from the other Parkinson's Law!) argued that organizations will give disproportionate weight to trivial issues because of challenges presented by complexity.</p>";

memoString += "<p>Parkinson depicted a committee intending to approve plans for a nuclear power plant spending a majority of its time in pointless discussion over trivial but simple issues, such as what materials to use for the bike shed. This meant that more important issues like the design of the power plant itself were neglected. Though of greater significance and impact, more complex tasks are correspondingly more difficult to fathom and thereby criticize constructively.</p>";

memoString += "<p>As Parkinson put it: <i>\"The time spent on any item of the agenda will be in inverse proportion to the sum [of money] involved.\"</i> ...everyone can visualize a cheap, simple bicycle shed, so planning one can result in endless discussions because everyone involved wants to add a touch and show personal contribution.<br />";
memoString += "Thus <a href=\"http://en.wikipedia.org/wiki/Parkinson's_law_of_triviality\" target=\"_blank\">\"bikeshedding\" involves discussions about relatively unimportant issues which result in extensive debate</a>. Although discussion can meander in any topic, the probability of meandering goes up as the technical difficulty of the topic goes down.</p>";

memoString += "<p>The art to project management is balancing needs. One such example is balancing the need to keep moving and reach a decision now against the allowing those involved to feel a deeper sense of ownership (in an effort to increase adoption down the line).</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
