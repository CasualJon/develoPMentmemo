//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">If <a href=\"./assets/img/memoImages/dm45_EngelhardOdinStatueHannover.jpg\" target=\"_blank\">Odin</a> has only one eye, does this mean that Asgard is the land of the blind?</span></p><br />";

memoString += "<p><i>There was a blind beggar in Central Park one day with a tin cup wearing the conventional sign, \"I am blind.\" A man noticed how few contributions the blind man received, so he went up to the beggar and said, \"Look here, you’re not doing too well. I’m an advertising man and I think I can help you if you’ll just let me change your sign a little bit.\"</i></p>";
memoString += "<p><i>The beggar didn’t have much to lose, and so the advertising man wrote a few words on the sign and left. Later that afternoon he returned. The beggar was doing much better. As he approached, the blind man recognized his footsteps and said, \"My friend, what have you done to help me? I’ve never had a day like this. What did you put on my sign?\"</i></p>";
memoString += "<p><i>The advertising man replied, \"I just wrote three additional words on it, and now it says, \"<b>It’s springtime and</b> – I am blind.\"</i><br />";
memoString += "<small><small><span class=\"article-info\"><a href=\"https://books.google.com/books?id=69U5BAAAQBAJ&pg=PT227&lpg=PT227&dq=it's+springtime+and+i+am+blind&source=bl&ots=xG1KVGdILD&sig=cUyID40i7Qv8rTuVyeVf57rThtY&hl=en&sa=X&ved=0CFUQ6AEwCWoVChMI_JXyie6AxwIVlhmSCh3LPA8K#v=onepage&q=it's%20springtime%20and%20i%20am%20blind&f=false\" target=\"_blank\"><u>Catching Lightening In A Bottle</u>, Winthrop H. Smith, Jr.</a></span></small></small>";

memoString += "<p>Many attribute this story to David Ogilvy, some to Mary Wells Lawrence, and yet others to Jacques Prevert...</p>";

memoString += "<p>Regardless of where it comes from, if even the tiniest bit of empathy didn’t kick in at the last, you’ve probably been accused of heartlessness before. But, to the story, I think the point is clear enough: <i>how you craft a message will determine how it is received, whether it resonates, and how others respond</i>.</p>";

memoString += "<p>Recognizing when and how to craft a message is a skill you should practice – in effect, you should continue to hone your communication strategy with every communication. Knowing your <b>Objective</b> and your <b>Target</b> will help you set the correct <b>Tone</b>, which is aided by a balance among <b>Relevance</b>, <b>Simplicity</b>, and <b>Clarity</b>.</p>";

memoString += "<p>Whether face-to-face or by email, poor message crafting makes it easier for the receiver to miss your point, or worse leaves you coming across like a jerk.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
