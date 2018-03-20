//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"https://www.youtube.com/watch?v=praFGD51ih8\" target=\"_blank\">Hey, guys. Whoa, Big Gulps, huh? All right! ...Well, see you later.</a></span></p><br />";

memoString += "<p><span id=\"vocab\">Close Project</span><i> is the process of finalizing all activities across all of the Project Management Process Groups to formally complete the project. The key benefit of this process is that it provides lessons learned, the formal ending of project work, and the release of organization resources to pursue new endeavors.</i></p>";

memoString += "<p>The probability of completing the project is highest during the project closure phase – so close! – while stakeholder influence over the project is at its lowest compared to any other time. During a successful project’s closing, documentation of lessons learned, archival of project artifacts (including stakeholder acknowledgment of the project meeting acceptance criteria), and celebrations are all areas of focus before releasing project team members.</p>";

memoString += "<p>However, glorious success isn’t always the way a project ends... There are five (PMI defines only four - guess which :) formal types of project endings that you might need to know about someday.</p>";

memoString += "<ul><li><b>Fall of Humanity</b>: Whether Skynet becomes self-aware, Global Thermonuclear War is initiated, or the Independence Day scenario is realized; your project is no longer needed. Perhaps your best efforts are better directed at figuring out ways to overthrow our hybrid Alien-Robot War Victor Overlords.</li><br />";
memoString += "<li><b>Addition</b>: Projects that evolve into ongoing operations end by Addition; they become their own ongoing business unit. Similar to our successful projects, the installation of an enterprise system leads our IT project counterparts to transition efforts to ongoing maintenance and monitoring of the software in a full-time capacity. When the work transitions an ongoing operation, it’s no longer a project.</li><br />";
memoString += "<li><b>Starvation</b>: When a project’s resources (people, equipment, or money) are cut off and no longer provided, it starves before all requirements are satisfied and the project is left unfinished. In these cases, document everything to prevent any future finger-pointing. Projects can starve for several reasons including higher priority projects pulling resources away, the order is stopped, the project budget is reduced, and/or a key individual departs.</li><br />";
memoString += "<li><b>Integration</b>: Integration occurs when the resources are distributed to other areas in the organization (including other projects). Integration differs from Starvation in that starvation is the result of cuts while integration results from redeployment or reassignment.</li><br />";
memoString += "<li><b>Extinction</b>: Success! A project that ends by Extinction is one that was completed and accepted by the stakeholders, an dos it ends because the goals were achieved and the project was closed.</li></ul>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
