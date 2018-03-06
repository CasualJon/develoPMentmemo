//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Leadership... imparting vision and rallying people around it to move beyond what exists today.<br />";
memoString += "Last week touched on three Leadership styles, and today covers three more. Frankly, though, they’re pretty similar inasmuch that each identifies a range of Leadership styles spanning dictatorial power consolidation to broad delegation, as well as blunt and direct interaction to soft Socratic guidance.</span></p><br />";

memoString += "<p><b>(Tannenbaum and Schmidt) Continuum Management Theory</b>: A leadership theory describing seven levels of delegated decision-making freedom between a manager and their team ranging from the manager unilaterally making all decisions to the manager allowing the team to identify problems, evaluate alternatives, and make final recommendations regarding actions needed to solve problems. The level of freedom employed depends on the maturity and experience of both the team and the manager. As teams progress, their decision making matures and greater freedom can be delegated</p>";

memoString += "<p><b>Situational Leadership Theory</b>: This theory’s main premise is that the leadership style you use depends on the situation… A new employee fresh out of school and learning a new task will need greater guidance and direction than a tenured employee who has tackled that same task many times over. There are brancing models of Situational Leadership, but the most common (known as Situational Leadership II) and describes four styles of Leadership addressing different circumstances: <a href=\"http://sites.psu.edu/leadership/wp-content/uploads/sites/8069/2014/06/Situationalleadership.jpg\" target=\"_blank\">directing, coaching, supporting, and delegating.</a></p>";

memoString += "<p><b>Transactional and Transformational Theory</b>: TTT describes transactional leaders as autocratic, activity focused, and autonomous; they use contingent reward systems and manage by exception. Transformational leaders tend to focus on relationships rather than activities; they are collaborative, influential, and inspire teams to perform. Transformational leaders can be described as empowering and concerned with social justice, equality, and fairness.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
