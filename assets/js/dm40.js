//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"http://apps.who.int/classifications/icd10/browse/2015/en#/Z73.0\" target=\"_blank\">Z73.0</a></span></p><br />";

memoString += "<p><span id=\"vocab\">Burnout</span><i> is exhaustion of physical or emotional strength or motivation usually as a result of prolonged stress or frustration.</i></p>";

memoString += "<p>If excessive stress is like drowning in responsibilities, burnout is being all dried up. While you’re usually aware of being under a lot of stress, you don’t always notice burnout when it happens.<br />";
memoString += "<b>HelpGuide.org</b>: <a href=\"https://www.helpguide.org/articles/stress/burnout-prevention-and-recovery.htm\" target=\"_blank\"><i>Preventing Burnout: Signs, Symptoms, Causes, and Coping Strategies</i></a></p>";

memoString += "<p>Burnout is not a topic for the PMP exam, but it exists in the world we inhabit.<br />";
memoString += "Across more than a decade of Implementation work, I’ve experienced a wide range of projects... While it’s unrealistic to expect that every day - or even every project - will be Sunshine and Fluffy Bunnies (as my wife likes to say), neither should every day be The Worst.</p>";

memoString += "<p>If I am honest with you and myself, then yes, I’ve been in that place where I just wanted the project to be over so that I could move on. Tired for many reasons, I struggled to muster the will to maintain any sense of importance toward what I needed to do. I pushed hard enough, long enough, and without any demonstrable progress that I felt like a pretender whose contributions held no value.<br />";
memoString += "Eventually, there just never seemed to be any good days.</p>";

memoString += "<p>I’ve not been the first close to burning out, but I was lucky to work with a team that could see what was happening. It is not an inevitability, but if it happens neither is it permanent. There are physical, emotional, and behavioral warning signs as people fade beneath continuing stress. If your impression is that it’s only the TL’s job to watch for and/or prevent burnout, then we should correct that impression.</p>";

memoString += "<p>When you see a problem on the install and you’re curious who owns it, it’s you… If someone on your team is slipping and can’t seem to get back on track, it becomes the wider team’s responsibility.<br />";
memoString += "AC-to-AC or AC-to-ID, it doesn’t matter in a collaborative environment where the wellbeing of the whole is entrusted to each.</p>";

memoString += "<ul><li><b>MayoClinic.org</b>: <a href=\"https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/burnout/art-20046642\" target=\"_blank\">Job Burnout: How To Spot It And Take Action</a></li>";
memoString += "<li><b>Harvard Business Review</b>: <a href=\"https://hbr.org/1996/07/when-executives-burn-out\" target=\"_blank\">When Exectuives Burn Out</a></li>";
memoString += "<li><b>Forbes.com</b>: <a href=\"https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/vickyvalet/2015/06/23/overcoming-burnout-five-ways-to-get-back-on-track-at-work/&refURL=&referrer=\" target=\"_blank\">Overcoming Burnout: Five Ways To Get Back On Track At Work</a></li></ul>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
