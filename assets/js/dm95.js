//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">\"Don't worry. I'm not supposed to be here, either.\"</span><br />";
memoString += "<small><span class=\"article-info\">James Bond<br />";
memoString += "<small>Dr. No</small></span></small></p>";

memoString += "<p><i></i><span id=\"vocab\">Imposter Syndrome</span><i> (also known as imposter phenomenon or fraud syndrome) can be defined as a collection of feelings of inadequacy that persist even in the face of information that the opposite is true. It is experienced internally as chronic self-doubt, and feelings of intellectual fraudulence.</i></p>";

memoString += "<p>I have a hypothesis about inferences people make through observation that I've termed <i>The James Bond Effect</i>.</p>";

memoString += "<p>Do you know why no one stops Mr. Bond as he strolls through invitation-only parties and villainous strongholds?<br />";
memoString += "Because he acts like he's supposed to be there. Movement and speech are both confident and direct, there is no hesitancy, uncertainty, obsequity, or evasion. Because he sells it well, people assume truth.</p>";

memoString += "The odd thing is that, professionally, we are the experts... even when we don't feel like one. And when we don't feel it, that comes through quite loudly in how we present ourselves. In smart, high-achieving people there is frequently a sense that their expertise, abilities, or fitness are shaky at best, that we are merely pretending. Even the Nobel Laureate Maya Angelou once remarked:";

memoString += "<blockquote>I have written eleven books, but each time I think, \"uh oh, they're going to find out now. I've run a game on everybody, and they're going to find me out.\"</blockquote>";

memoString += "<p>James Bond is an imposter, legitimately pretending to pass as something he's not.<br />";
memoString += "You are qualified to be here, even when you don't feel it, so sell it better than Bond does.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
