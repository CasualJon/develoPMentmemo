//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">We’ve talked through motivational theories, the bases of power, and how to project power through vocal mannerisms... all to arrive at the point of discussing leadership.</span></p><br />";

memoString += "<p><span id=\"vocab\">Leadership</span><i> involves focusing the efforts of a group of people toward a common goal and enabling them to work as a team. In general terms, leadership is the ability to get things done through others (to PMI).</i></p>";

memoString += "<p>Yes, Leaders motivate and inspire, but I think the more important aspect is that Leaders are also concerned with strategic vision.<br />";
memoString += "Leadership is about imparting vision and rallying people around it to move beyond what exists today.</p>";

memoString += "<p>Managers are generally task-oriented and concerned with issues, plans, budgets, procedures, etc. Managers are generalists with a broad base of skills directed toward the goal of satisfying stakeholders.</p>";

memoString += "<p>The role and goal of Manager is important, thus managers are imbued with power by organizations. But, Leaders are critical for growth – to move from survive to thrive. Leaders take their power and direct it toward the achievement of specific goals to enable a transformation... from what has become to what should be. Good Leaders have committed teams who believe in their vision.</p>";

memoString += "<p>There is a wealth of material dedicated to Leadership and various Leadership styles; you don’t need an memo to explain that. For today, and because I tire of being <i>wordy</i>, we’ll cover three of the basic five leadership styles to be aware of <small><small>(should you one day find interest in project management credentials)</small></small>.</p>";

memoString += "<p><b>Autocratic:</b> Autocratic leaders are essentially dictators. All decisions are made by the leader with little to no input from the team.</p>";

memoString += "<p><b>Laissez-faire:</b> Laissez-faire leaders are the opposite of autocratic leaders. The leader allows the team to drive decisions and recommended actions, and has little involvement in the process.</p>";

memoString += "<p><b>Democratic:</b> Democratic (aka participative) leaders gather all their facts and ask for input from the team before committing to a decision. In this style, all team members participate in the decision-making process.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
