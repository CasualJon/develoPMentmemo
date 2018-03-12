//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Yes, Spielberg, I know my character is a diligent, hardworking project manager trying to do good and have fun… maybe make a little money. But, why? What’s my motivation here?<br /><br />";
memoString += "We've talked about the team development cycle, and the path teams take to grow from individual strangers to a high-functioning, self-directed, cohesive unit.<br />";
memoString += "So, how do we motivate a team? How do we motivate people?</span></p><br />";

memoString += "<img src=\"./assets/img/memoImages/dm26_dilbertMotivation.jpg\"><br /><br />";

memoString += "<p><i>Project teams are comprised of team members with diverse backgrounds, expectations, and individual objectives. The overall success of the project depends upon the project team’s commitment, which is directly related to their level of motivation.<br />";
memoString += "Motivating in a project setting involves creating an environment to meet project objectives while providing maximum satisfaction related to what people value most. These values may include job satisfaction, challenging work, a sense of accomplishment, achievement and growth, sufficient financial compensation, and other rewards and recognition the individual considers necessary and important.</i></p>";

memoString += "<p>Today, we’ll hit the first three (of six) theories of motivation commonly referenced in Project Management circles (and tests  	&#9786;).</p>";

memoString += "<ul><li><b>Expectancy Theory</b><br />";
memoString += "Expectancy Theory proposes that an individual will decide on a behavior because they are motivated by their belief of what the end result of that behavior will be. Motivation is a product of one’s expectations that their efforts translate to performance, and their performance will obtain a desired result.<br />";
memoString += "<i>...the faster I walk, the closer the carrot will get, and the closer I get to that carrot, the sooner I can eat it</i>.</li><br />";

memoString += "<li><b>(Herzberg’s) Hygiene Theory</b><br />";
memoString += "Also known as Two-Factor Theory, Hygiene Theory states that there are certain factors in the workplace that cause job satisfaction, while a separate set of factors cause dissatisfaction – these factors are separate and act independently. Motivators <small>(challenging work, recognition, responsibility)</small> give satisfaction, and Hygiene factors <small>(such as status, job security, salary, benefits [think hygiene = maintenance])</small> neither give satisfaction or motivate, but cause dissatisfaction if wanting.<br />";
memoString += "<i>...I’d be satisfied with fulfilling, challenging work; but angry if you stopped paying me</i>.</li><br />";

memoString += "<li><b>Achievement Theory</b><br />";
memoString += "Also known as McClelland's Human Motivation Theory (or Need for Achievement), Achievement Theory states that every person has one of three main driving motivators: the need for achievement, affiliation, or power. These motivators are not inherent, but developed through our culture and life experiences. Personalities of individuals driven by different motivators exhibit different traits reflective of the motivator.<br />";
memoString += "<i>...Driven by Achievement I need a challenge, by Affiliation I need belonging, by Power I need control</i>.</li></ul>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
