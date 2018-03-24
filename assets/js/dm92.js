//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">If you <a href=\"https://www.youtube.com/watch?v=zNbF006Y5x4\" target=\"_blank\">assume</a> that I want a private jet so that I can easily get away from winter, you are correct. If you assume that I don't have said private jet because they're well more than I can afford, you are again correct...</span></p><br />";

memoString += "<p><i>An </i><span id=\"vocab\">Assumption</span><i> is a factor in the planning process that is considered to be true, real, or certain, without proof or demonstration.</i></p>";

memoString += "<p><i>A </i><span id=\"vocab\">Constraint</span><i> is a limiting factor that affects the execution of a project, program, portfolio, or process.</i></p>";

memoString += "<p>The project charter is a document issued by a project's sponsor (usually an executive) that formally authorizes the existence of that project and provides the project manager(s) with authority to apply organizational resources to project activities.</p>";

memoString += "<p>The charter can, and typically does, document several details to define the who, what, when, where, and why of the project. These details can include things like business need driving the undertaking, a milestone schedule and summary budget, and expected benefits of the project itself as well as the operational benefits of the new product, service, or result it produces.</p>";

memoString += "<p>Also, you'll find that a project's assumptions and constraints are commonly included within a project charter. This is because any significant decision is predicated on the assumptions and constraints present within the environment of that decision and attendant choices. Therefore, assumptions and constraints should be clearly expressed and understood rather than left implicit and nebulous.</p>";

memoString += "<p>Without the assumption of continued growth, there is no need to undertake a project that delivers a new office building. If there were no available land, that constraint would limit how a project approaches the objective of new office space.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
