//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"https://twitter.com/CasualJon/status/531571844730871809\" target=\"_blank\">Imagine a chap whose spouse only lets him keep one candy jar's worth of leftover Halloween candy...</a> He is sad, but he knows proper prioritization is key. Goodbye York Peppermint Patties, peace out Nestle Crunch, double up on the KitKats and Snickers, please.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Prioritization</span><i> is the process of evaluating a group of items and ranking them in order of their importance or urgency.</i></p>";

memoString += "<p>It is true that \"priority\" didn't get pluralized until the mid-20th century (check out this <a href=\"https://books.google.com/ngrams/graph?content=priority%2Cpriorities&year_start=1800&year_end=2000&corpus=15&smoothing=5&share=&direct_url=t1%3B%2Cpriority%3B%2Cc0%3B.t1%3B%2Cpriorities%3B%2Cc0\" target=\"_blank\">Google nGram</a>). Indeed, it wasn't until after WWII that \"priorities\" became commonplace in our collective vocabulary.</p>";

memoString += "<p>Some people get upset by this progression... for example:";
memoString += "<blockquote>The word priority came into the English language in the 1400s. It was singular. It meant the very first or prior thing. It stayed singular for the next five hundred years. Only in the 1900s did we pluralize the term and start talking about priorities. Illogically, we reasoned that by changing the word we could bend reality.</blockquote>";
memoString += "<small><small><span class=\"article-info\">Greg McKeown, <a href=\"https://books.google.com/books?id=XaGNAQAAQBAJ&pg=PA16&lpg=PA16&dq=The+word+priority+came+into+the+English+language+in+the+1400s.+It+was+singular&source=bl&ots=HJlNqtD0vy&sig=OJgG7jSWSSG8WVZChSsmZF-AFvY&hl=en&sa=X&ved=0ahUKEwj8tsuWsYXaAhUJxlQKHf_iDeoQ6AEIXDAJ#v=onepage&q=The%20word%20priority%20came%20into%20the%20English%20language%20in%20the%201400s.%20It%20was%20singular&f=false\" target=\"_blank\">Essentialism</a></span></small></small></p>";

memoString += "<p>But, notice from the nGram that \"priorities\" developed attendant to the introduction of computers and the evolution of project management.</p>";

memoString += "<p>Computers are a technology that makes it easier for us to both perform and manage tasks.<br />";
memoString += "And, project management is a discipline where we focus not solely on what to do now, but on effecting a detailed plan of what to do now (priority), next (the priority after that), and thereafter (the priorities beyond those) to achieve a larger goal than a singular priority allows. Not to mention that projects are generally undertaken in team-based environments where multiple people can address multiple priorities.</p>";

memoString += "<p>So, really, prioritization is a modern technique: a necessary skill for project managers enabled by planning in team environments with computerized communications tools. Beyond that, however, prioritization is a necessary skill. Though, fortunately, it's not a difficult skill to practice... it just takes effort to bring an objective eye into decision making, and a force of will to do what's needed instead of what's easy.</p>";

memoString += "<p>The 21st century is coming back around to the idea that multi-tasking is a myth where an individual is concerned. However, while working the priority is important, to be effective you need to know to the subsequent priorities in working toward your goal.</p>";

memoString += "<p><br /><br /><small><small><small>Personally, I find McKeown's statement a specious rant that doesn't actually build an argument to a justification, but rather structures its final statement - his argument – upon several explicit and implicit logical fallacies (burden of proof, ambiguity, no true Scotsman, false dilemma) in an effort to persuade the reader that it contains a valid, defensible point. I don't disagree with the theme that multi-tasking is a myth where the individual is concerned; however, it is his under-supported attack on \"priorities\" as an idea that inclines me to critique his argument.</small></small></small></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
