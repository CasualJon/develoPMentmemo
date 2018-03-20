//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">This is my son, mine own <a href=\"https://en.wikipedia.org/wiki/Mentorship\" target=\"_blank\">Telemachus</a>, To whom I leave the scepter and the isle- ... <a href=\"https://genius.com/Alfred-lord-tennyson-ulysses-annotated\" target=\"_blank\">He works his work, I mine</a>.</span></p><br />";

memoString += "<p><span id=\"vocab\">Coaching</span><i> is a means of developing the project team to higher levels of competency and performance. Coaching is about helping people recognize their potential through empowerment and development.</i></p>";

memoString += "<p>\"Empowerment and development\" doesn’t look like <a href=\"./assets/img/memoImages/dm46_bobbyknight.gif\" target=\"_blank\">this</a>.</p>";

memoString += "<p>Mentoring/Coaching is used to aid team members in developing or enhancing skills to better enable their success. Coaching can take many forms and approaches, ranging from the formal to the informal. Coaching is also used to address poor performance and help team members overcome deficiencies in their skill sets.</p>";

memoString += "<p>If a team member is not meeting expectations for want of skill, knowledge, or experience, Mentoring/Coaching can help them develop the necessary to satisfy those expectations. And, what's more, Coaching can be a powerful motivator... With greater skills, abilities, and confidence, a team member's willingness to take on challenging or demanding tasks is increased. This can lead to more effective and productive teams.</p>";

memoString += "<p>Different from Mentoring or Coaching, <i>Counseling</i> focuses on addressing situations where team members <i>won’t</i> do something rather than <i>can’t</i> do something.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
