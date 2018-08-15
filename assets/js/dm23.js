//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Ever have a bad email day? One where it won't stop arriving, and the more you try to get through the further behind you fall. Intuitively, you know the reason behind why it feels this way, but it’s comforting to see that there is formal math behind it :)</span></p><br />";

memoString += "<p><span id=\"vocab\">Little's Law</span><i> states that the average number of customers in a stable system (over some interval) [L] is equal to their average arrival rate [λ] multiplied by their average time in the system [W].</i><br />";
memoString += "&nbsp;&nbsp;&nbsp;L = λW</p>";

memoString += "<p>Let’s try more relevant terms:<br />";
memoString += "The amount of <i><b>work in progress</b></i> is equal to your <i><b>throughput</b></i> multiplied by the <i><b>time in the pipeline</b></i>.</p>";

memoString += "<p>This also means that <i><b>average time in the pipeline</b></i> (how long something takes to get done once it’s in your system) is the <i><b>average amount of work in progress</b></i> divided by your <i><b>average throughput</b></i>. Algebra!<br />";
memoString += "&nbsp;&nbsp;&nbsp;(L/λ = W)</p>";

memoString += "<p>More simply: the more you shove into the queue, the longer things take to get through.</p>";

memoString += "<p>Let’s say you have a normal backlog of <i><b>50 issues</b></i> [L]<br />";
memoString += "Assume your two analysts can generally resolve <i><b>10 issues a day</b></i> (5 apiece) [λ]<br />";
memoString += "This means that the average time an issue is in the pipeline is <i><b>5 days</b></i> [W]<br />";
memoString += "<i><b>50 issues/10 issues per day = 5 days</b></i></p>";

memoString += "<p>Now add a sudden influx of 75 issues (like maybe a hospital rollout), and you abruptly have 125 issues in the queue. The throughput of your two analysts is still 10 issues a day, so this means that the average time an issue is in the pipeline is now 12.5 days. Ouch :/</p>";

memoString += "<p>What if we add an additional analyst? Alright.<br />";
memoString += "<i>125 issues/15 issues per day = 8.3 average days in-system</i></p>";

memoString += "<p>Well, how about two additional analysts? Ok.<br />";
memoString += "<i>125 issues/20 issues per day = 6.25 average days in-system</i></p>";

memoString += "<p>Wait. Did you see that?<br />";
memoString += "Adding one analyst knocked off ~4 days of the average time in the pipeline. Shouldn’t two analysts knock off 8 days?<br />";
memoString += "Nope. That’s not how math works... You have diminishing marginal returns for each additional analyst added.<br ?>";
memoString += "And, this doesn’t even account for the fact that it would likely take time to get a recently added analyst up to speed, or that the new analyst(s) might process fewer than the 5 issues per day average if those issues are not within their area of expertise.</p>";

memoString += "<p>This little guy applies to any system where you have queued input and a capacity limit in throughput - - just like when you take the beltline at 4:30am to catch the 6am flight. With no one else out there, you can zip along at the speed limit and arrive on time, no problem. But, try taking that same beltline at 8:30am for your 10am flight and you’ll need rebooking.</p>";

memoString += "<p>Implications for Little’s Law include emails, issues lists, testing scripts, delivery of projects and project tasks, census and length of stay, manufacturing, checkout lines... It’s all over the place in everyday life.<br />";
memoString += "So, when there are concerns over how long things are taking to get addressed or resolved, take a look at your pipeline and 1) how things should qualify to enter the pipeline as well as 2) the throughput capacity and 3) proper prioritization. Manage the pipeline.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
