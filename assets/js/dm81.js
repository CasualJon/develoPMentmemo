//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">While we grow our skills, self-doubt can be an insidious companion. Be honest when you don't know something – you can always learn – but not knowing everything doesn't mean you’re an imposter.</span></p><br />";

memoString += "<p>In 2012, I came across an article about <a href=\"https://www.wired.com/2012/05/st-cuddy/\" target=\"_blank\">body language and it's subconscious influence on our behavior and perception</a> (how body language can affect hormone levels). Several months later, the researcher interviewed for the article – Amy Cuddy – gave a TED Talk on the subject and the ideas behind it began a viral rise... It's now the second most viewed TED Talk of all time.</p>";

memoString += "<p>If you've not seen this video, find the time to watch it.<br />";
memoString += "<a href=\"https://www.ted.com/talks/amy_cuddy_your_body_language_shapes_who_you_are?language=en\" target=\"_blank\">Your body language shapes who you are. TEDGlobal 2012.</a></p>";

memoString += "<p>I won't bore you with a synopsis that few will actually read. But, if you're familiar, consider the different facets of personal and professional life this subject can influence.</p>";

memoString += "<p>Not all enjoy presenting in front of a group.<br />";
memoString += "No one enjoys communicating bad news.<br />";
memoString += "Meeting new people is stressful for some.<br />";
memoString += "Now and again bad days will visit us all.</p>";

memoString += "<p>If you don't believe in yourself, how will you get others to believe in you?</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
