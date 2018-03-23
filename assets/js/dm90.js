//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">I often hide a link in these random, tangentially related thoughts... I wanted to hide one that combines decomposition and explosions, but Leigh wouldn't let me because: \"gross.\" She’s right, of course, but I'm still disappointed<a href=\"https://www.youtube.com/watch?v=U37lyRoECn4\" target=\"_blank\">...</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Decomposition</span><i> is a technique used for dividing and subdividing the project scope and project deliverables into smaller, more manageable parts.</i></p>";

memoString += "<p>The Olympics!<br />";
memoString += "With the cardiovascular endurance of a koala myself, I've only heard; but I'm told the only way to complete a marathon is one step at a time.</p>";

memoString += "<p>The same is true for projects. The only way to bring live a multi-million dollar, enterprise-wide software package touching near every aspect of operational life, affecting the majority of all employees? One step at a time.</p>";

memoString += "<p>Decomposition is a <i>tool and technique</i> generally employed in creating a Work Breakdown Structure - - decomposing a massive whole into bite-size increments easily assessed, evaluated, and accomplished.</p>";

memoString += "<p>Decomposition, though, is also an important tool in solving problems.<br />";
memoString += "Your customer calls, maybe the project director or CIO. It's 10pm, and they’re not happy...<br />";
memoString += "That interface you knew about but never really paid attention to is inexplicably deleting segments from each message. You get the feeling in the pit of your stomach generally associated with seeing blue lights in the rear view mirror.</p>";

memoString += "<p>Take a deep breath, and start to break things down.<br />";
memoString += "You know the steps of problem solving, and you know experts better at diagnosing this issue. Start by making a list of measurable, achievable tasks that let you get to the next step... and then the next.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
