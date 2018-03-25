//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">In 1453, the Ottoman Empire was able to sack Constantinople because someone forgot to lock a gate.<br />";
memoString += "In 1998, Pixar accidentally deleted Toy Story 2 from its storage drives by a typo. (It was only then they realized that their regular backups had failed.)<br />";
memoString += "In 1999, NASA lost the Mars Climate Orbiter because Lockheed engineers designed its jet thrusters in imperial units, but NASA made their calculations in metric units.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">110</span>:<i> Though most of us in our youth have heard the poem that states \"for want of a nail the race was lost,\" few of us realize that most space failures have a similar origin. It is the commonplace items that tend to be overlooked and thus do us in. The tough and difficult tasks are normally done well. The simple and easy tasks seem to be the ones done sloppily.</i></p>";

memoString += "<p>I'm certainly guilty of not paying close enough attention to things I consider easy or commonplace. When performing something seemingly easy, we don’t always commit our full critical faculties to the task.</p>";

memoString += "<p>Yet small problems can add up to have a large net effect. Some small mistakes are merely annoying and time consuming, like building all of your templates in the wrong department; but small problems can also trigger a butterfly effect, like publishing and committing to the wrong go-live date (which subsequently drives training schedules, build timelines, testing timelines, vacation approvals, etc.).</p>";

memoString += "<p>We put an emphasis on the checks and reviews to catch not just show stopping issues, but to course correct the small mistakes – everything from progress report reviews, to independent audits, to phase gate readiness assessments.  You can spend a little effort now to ensure high quality up front, or you can spend a lot of effort later to correct the results of poor quality.</p>";

memoString += "<blockquote>For want of a nail the shoe was lost.<br />";
memoString += "For want of a shoe the horse was lost.<br />";
memoString += "For want of a horse the rider was lost.<br />";
memoString += "For want of a rider the message was lost.<br />";
memoString += "For want of a message the battle was lost.<br />";
memoString += "For want of a battle the kingdom was lost.<br />";
memoString += "And all for the want of a horseshoe nail.</blockquote>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
