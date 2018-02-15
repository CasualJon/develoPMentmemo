//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><small><b><font color=\"black\">With the outcome of a project being the production of a unique product, service, or result - - change is inescapable.<br />";
memoString += "Change itself is intensely personal, and once confronted by change, the individual process to internalize its meaning can result in a variety of reactions: sabotage, adaptation, assimilation…. These personal reactions start as ripples, but when set across an entire company, they can build into waves.</font></b></small></p>";

memoString += "<p><b><font color=\"purple\">Change Management</font></b><i> is an approach to transitioning individuals, teams, and organizations to a desired future state.</i></p>";

memoString += "<p>The PMBOK Guide (5th ed.) exhausts its guidance on Change Management with several references to the need for a Change Management Plan. In spectacular fashion, this plan is then described as defining the process for managing change.</p>";

memoString += "<p>Um... Thanks. I think?</p>";

memoString += "<p>In project management, \"Change Management\" is often used loosely. In plenty of cases, Change Management is a legitimate analog to Change Control as a process for stating, evaluating, and authorizing modifications to products, assumptions, processes, etc. ";
memoString += "In the larger world, Change Management is more often the specialized toolkit of strategies employed to proactively address reaction to change to gain the most favorable response.</p>";

memoString += "<p>There are resources aplenty out there outlining every opinion of how to manage change like a pro, but most distill down to understanding perceptions, and then communicating in a way to address the personal aspects of change so that people feel empowered rather than abandoned. ";
memoString += "Feelings and logic, hearts and minds.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
