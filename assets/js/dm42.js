//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">People aren’t resources, they’re people.<br />However, your time is a resource... a valuable one.</span></p><br />";

memoString += "<p><i>From Encyclopedia Britannica, the </i><span id=\"vocab\">Law of Diminishing Marginal Returns</span><i> is an economic law stating that if one input in the production of a commodity is increased while all other inputs are held fixed, a point will eventually be reached at which additions of the input yield progressively smaller, or diminishing, increases in output.</i></p>";

memoString += "<p>In plain terms, the resources we pour into creating something are not all equal.<br />";
memoString += "Is that third hour of working on your PowerPoint or Progress Report as substantively productive or valuable as the first two hours? Perhaps, but eventually pouring additional resources into a task is not worth the investment.</p>";

memoString += "<p>This is what people hint at when they channel Voltaire and say \"Perfect is the enemy of Good.\"</p>";

memoString += "<p><u>Firstly, note that promises are different.</u> Commitments must be kept; your reputation preserved, and thus - by extension - Epic’s reputation. This is why you should be careful about overpromising.</p>";

memoString += "<p>But, if you are up late into the night stressing over continuing preparation for tomorrow’s meeting, presentation, or demo; then at some point your time is better invested in gaining enough quality sleep.<br />";
memoString += "Your presentation will go better, and so will life. The key is being able to identify that point.</p>";

memoString += "<p>In the larger picture, I sometimes overhear conversations between ACs about how many hours each has worked, as though in competition. Some call it \"Brag-plaining\"...<br />";
memoString += "Yes, there will be peaks where you hit more than 80 or 90 hours, especially around go-live. But for these peaks, there should also be valleys; weeks were you need only work 45 hours – and you should take advantage of these and not feel guilty for it. If you’re always hitting 80 to 90 hours, then you’re doing it wrong.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
