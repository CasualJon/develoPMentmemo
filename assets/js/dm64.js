//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Start small. You will have challenges and setbacks. There will be hardships and failures. But, there is also help when you need it. Never give up.</span></p><br />";

memoString += "<p>Before I left on holiday, I planned the content for today's develoPMent memo to start the new year and new challenges with fresh energy. Darn if I didn’t find Guru already beat me to part of it:<br />";
memoString += "You should make your bed every day.</p>";

memoString += "<p>In 2014, Admiral William H. McRaven, 9th Commander of US Special Operations Command, gave the commencement address at the University of Texas.</p>";

memoString += "<p>His whole speech was less than 20 minutes, and it’s <a href=\"https://www.youtube.com/watch?v=yaQZFhrW0fU\" target=\"_blank\">worth the watch</a>. In those 20 minutes, McRaven subtly delivers a Master'’'s course in communication while delivering 10 lessons for life – personal and professional. If you don’t feel you have the 20 minutes to spare, then I doubly encourage you to watch; but you can skim the larger themes courtesy of <a href=\"http://www.businessinsider.com/bill-mcraven-commencement-speech-at-ut-2014-5\" target=\"_blank\">Business Insider's publication of the transcript</a>.</p>";

memoString += "<p>For the speech itself, McRaven'’'s beginning is a self-deprecating personal anecdote. Despite his position and accomplishments, he'’'s instantly relatable and honest.<br />";
memoString += "His immediate follow-up is built to inspire: a \"what if\" challenge triggers an emotional reaction pushing you to build your own vision for a brighter future, and that emotional investment already places value to the message.</p>";

memoString += "<p>Then his credentials, how he came by the knowledge he wants to share. Basically, if you think you’re on the very edge, coping with the stress of insurmountable challenges, he has you beat. <i>Oh, but what if...?</i> No. Seriously. He has you beat. And, he's not arrogant about it, either. There, now, is the component of trust.";

memoString += "<p>It took four minutes and already we relate to him, we've collaborated with him, we value what he has to say, and we trust him.</p>";

memoString += "<p>Once rolling, Admiral McRaven delivers 10 life lessons in under 15 minutes: direct and with supporting examples that don’t belabor the point. The 10 lessons themselves structure of the narrative of the message: the whole speech is designed to embed the single idea of perseverance without every using the word. It's so carefully crafted and charmingly delivered, you don't need to grasp for its essence – primary and recency effect does the work for you: <b><i>start small and never give up</i></b>.</p>";

memoString += "<p>Advice itself is worth a review, but it's also nice to see effective communication styles at work.";
memoString += "<ol><li>If you want to change the world, start off by making your bed.</li>";
memoString += "<li>If you want to change the world, find someone to help you paddle.</li>";
memoString += "<li>If you want to change the world, measure a person by the size of their heart, not the size of their flippers.</li>";
memoString += "<li>If you want to change the world get over being a sugar cookie and keep moving forward.</li>";
memoString += "<li>If you want to change the world, don't be afraid of the circuses.</li>";
memoString += "<li>If you want to change the world, sometimes you have to slide down the obstacle head first.</li>";
memoString += "<li>If you want to change the world, don't back down from the sharks.</li>";
memoString += "<li>If you want to change the world, you must be your very best in the darkest moment.</li>";
memoString += "<li>If you want to change the world, start singing when you're up to your neck in mud.</li>";
memoString += "<li>If you want to change the world, don't ever, ever ring the bell.</li></ol></p>";

memoString += "<p>Happy New Year!</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
