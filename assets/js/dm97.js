//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Remember that time <a href=\"https://www.youtube.com/watch?v=NHWjlCaIrQo\" target=\"_blank\">Joshua was forced to play tic-tac-toe against itself in order to learn the meaning of futility to avert Global Thermonuclear War</a> after Ferris Bueller social-engineered a hack of NORAD's super computer? Good times.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Working Memory</span><i> (also known as short-term or recent memory) is a cognitive memory buffer with limited capacity that is responsible for transient holding, processing, and manipulation of information. Working memory is important in the guidance of decision making and behavior, and is essential for navigating complex cognitive tasks such as comprehension, learning, and reasoning.</i></p>";

memoString += "<p>TL;DR - make lists or be a loser.</p>";

memoString += "<p>Computers have shot-term memory, long-term memory, a bus, a processing unit, a power supply... Essentially, we have the same things, just in different forms. So, your brain is like a computer.</p>";

memoString += "<p>Working memory (in your laptop, it's RAM) as noted above has a finite capacity of information it can temporarily store and manage. One test to judge how much <b>Working Memory Capacity</b> a person has is <i>memory span – then number of words or numbers that a person can hold onto and recall in order</i>. <a href=\"http://www.human-memory.net/types_short.html\" target=\"_blank\">The average memory span for normal adults is around 7 items.</a>";

memoString += "<p><b>Working Memory Load</b> (also known as cognitive load) refers to the total amount of mental effort being used in the working memory.</p>";

memoString += "<p>Now for some watered down science that sounds like common sense (because it is):<br />";
memoString += "In <a href=\"http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0043101\" target=\"_blank\">Focusing on Attention: The Effects of Working Memory Capacity and Load on Selective Attention</a>, researchers Lubna Ahmed and Jan W. de Fockert found that one's ability to focus their attention to a specific task (think: ignore distractions), is influenced by your Memory Capacity and current Memory Load.";

memoString += "<p>Say I'm only good at remembering 5 concurrent things to your 8: a low capacity means I might have less room to work with. It's not a problem or deficiency, but it's good to know your baseline. And, any load reduces what's available from capacity, so the higher the load the closer you are to <i>overload</i>.</p>";

memoString += "<p>What happens to your laptop when it's low on memory?<br />";
memoString += "If you've ever seen the below, you know that it has difficulty managing everything it needs to remember, and as a result tasks get pretty slow.</p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/dm97_lowmem.png\" /></p>";

memoString += "<p>Your ability to focus (and ignore distractions) is directly impacted by how much you're trying to balance at any one time. Without enough overhead to direct significant resources toward one task, productivity is low because distraction increases.</p>";

memoString += "<p>From my experience, the simplest remedy is a list.<br />";
memoString += "To get something out of short-term memory so you don't have to keep juggling it with everything else, while still ensuring you're tracking that item: get it onto physical storage. With reduced memory load you're less stressed and anxious, better able to focus and ignore distractions, and ultimately less irritable and more productive. Plus, it feels great to cross things off a list :)";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
