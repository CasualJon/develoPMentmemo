//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">\"Whether you think you can or whether you think you can't, you're right.\"</span><br />";
memoString += "<small><span class=\"article-info\">Henry Ford</span></small></p>";

memoString += "<p><i></i><span id=\"vocab\">Kuyashii</span><i> (悔しい) is a Japanese expression of all-encompassing frustration. It also happens to extend a meaning to use the words of doubters as energy to succeed.</i></p>";

memoString += "<p>We've looked at the Pygmalion (Rosenthal) Effect before – where higher expectations lead to an increase in performance.<br />";
memoString += "Some may remember a counterpoint, Stereotype Threat: one way by which lowered expectations can jeopardize performance.</p>";

memoString += "<p>In most cases where the Pygmalion Effect or Stereotype Threat are in play, these effects act upon are generally unaware to those they affect. I, however, like to believe that there is some measure of control the self has on matters of performance; and regardless of others' expectations, they don't have a say in the matter when you choose to hold yourself to a higher standard.</p>";

memoString += "<p>If someone doesn't believe you can do something, that doesn't mean roll over and abandon hope. Kuyashii is to take that situation and use it as motivation to bring your focus and full efforts to bare and prove such doubters wrong.</p>";

memoString += "<p>...because fuck 'em.</p>"


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
