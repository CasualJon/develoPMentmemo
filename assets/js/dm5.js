//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><small><b><font color=\"black\">Organizational and planning skills are closely related.<br />";
memoString += "It’s unsurprising, then, that the documentation codifying a discipline focused on planning organizes its own building blocks within a crossmatrix. In fact, it’s so expected that Excel is probably launching itself on your laptop right now, completely unbidden, because… well... project management.<br />";
memoString += "The PMBOK Guide (5th ed.) organizes the 47 processes of project management into 5 Process Groups, then stratifies the grouped processes across 10 Knowledge Areas.</font></b></small></p>";

memoString += "<p>A <b><font color=\"purple\">Knowledge Area</font></b><i> represents a complete set of concepts, terms, and activities that make up a professional field, project management field, or area of specialization.</i></p>";

memoString += "<p>It’s not difficult to remember the 10 Knowledge Areas. They all start with “Project” and they all end with “Management” so you can just insert your own mnemonic device:</p>";
memoString += "<p>Integration, Scope, Time, Cost, Quality, Human Resource, Communications, Risk, Procurement, Stakeholder</p>";

memoString += "<p>It might lack pizzazz, but the repetitive naming (Project Integration Management, Project Scope Management, Project Time Management...) does slyly illustrate simplicity and iteration by establishing a convention and building upon it – a lesson that can be applied across many facets of our role</p>";
memoString += "<img src=\"./assets/img/memoImages/knowledgeAreasPMBOK.png\">";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
