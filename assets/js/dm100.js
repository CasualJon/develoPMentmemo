//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">A cubic centimeter of water has the mass of one gram. <a href=\"https://www.youtube.com/watch?v=09UlB17cgKw&t=1m36s\" target=\"_blank\">This is roughly equal to the mass of a paper clip, which – through creative problem solving – can deactivate a missile.</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Creative Problem Solving</span><i> is approaching a problem or a challenge in an imaginative and innovative way.</i></p>";

memoString += "<p>I leave that definition purposfully brief.<br />";
memoString += "Some peddle creative problem solving as a process, and to some extent they have built a method that one could follow to achieve novel approaches to solving a problem. And, yes, some find that following specialized steps or small rituals help with creativity, but new ideas do not require a formal process.</p>";

memoString += "<p>First: all approaches to problem solving (even Creative Problem Solving as a process) begin by defining the problem.</p>";

memoString += "<p>In its simplest interpretation, a <u>problem</u> is a discrepancy between the current state and the desired future state.</p>";

memoString += "<p>In a rudimentary sense, creative problem solving differs from traditional problem solving because traditional problem solving has failed, and none of the standard solutions or approaches produced through traditional problem solving techniques are satisfactory - - or at the least, they are not <i>good enough</i> - - thus an original, creative approach idea is required. When the solutions you have don't solve the puzzle, innovate: find new uses of existing tools or altogether new solutions.</p>";

memoString += "<p>Creativity is not the sole domain of artists, engineers, or that rare breed of both: Epic culinary. No.<br />";
memoString += "</p>Creativity is merely the use of imagination to generate original ideas... Think you’re not creative? Bullshit.</p>";

memoString += "<ul>Here are a couple of tips to help spark creativity:";
memoString += "<li>Try combining some of the non-satisfactory solutions to compound their benefits</li>";
memoString += "<li>Reduce stress: workout, stretch, breathe deeply... problem solving under stress is rarely creative</li>";
memoString += "<li>Redefine the problem: state the problem as you see it, then try to see it from others' understanding (\"the other way around\"), and use odd analogies for the problem to remove your attachment to traditional thinking</li>";
memoString += "<li>Produce as many possible solutions without regard for practicality</li>";
memoString += "<li>Take a break if you can... Let the creativity of your subconscious chew on the problem for a while</li>";
memoString += "<li>Go somewhere outside of your routine... If you're in a rut, so is your thinking</li>";
memoString += "<li>Most importantly: Positive Affect</li></ul>";

memoString += "<p>Positive Affect is the extent to which an individual subjectively experiences positive moods such as joy, interest, and alertness, and we discussed it previously for the role it plays in motivation. There is great evidence from research on the benefit of good vibes in creative problem solving (see this <a href=\"https://scholar.google.com/scholar?q=positive+affect+and+creative+problem+solving&hl=en&as_sdt=0&as_vis=1&oi=scholart&sa=X&ved=0ahUKEwjXqoSS5a7QAhUpxoMKHTOnAZ8QgQMIGTAA\" target=\"_blank\">Scholar.Google search</a>).</p>";

memoString += "<p>So, take a stroll to see the nice views across campus, wear some headphones and blast the volume, and have some candy while you're at it. Or, focus on something you enjoy to change your frame of mind altogether. Do something that makes you happy. Or, combine this approach with some of the above.</p>";

memoString += "<p>Creativity strikes when you're not forcing it.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
