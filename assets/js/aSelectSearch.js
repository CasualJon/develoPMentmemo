//Fetching screen width (to adjust for mobile)
//If on mobile device, just use one column for readability
//If larger laptop/desktop, use 3 columns for space saving
var width;
var tableCols;

//Global constants for page info & varibales for table String content
const searchSubPage = document.getElementById('searchMemos');
const catSubPage = document.getElementById('allMemos');
const currSubPage = document.getElementById('currentMemo');
const sToggle = document.getElementById('searchToggle');
const cToggle = document.getElementById('categoryToggle');
const srchWindow = document.getElementById('searchExpand');
const catWindow = document.getElementById('categoryExpand');
var input = "";
const searchBaseA = "<input id=\"srchBox\" type=\"text\" value=\"";
const searchBaseB = "\" placeholder=\"Won't work right...\"><button id=\"srchBtn\" class=\"small\" onclick=\"runSearch(sb.value)\"><img src=\"./assets/img/magnifyingglass_256x256.png\" width=\"32\"></button><br />";

//Columns checked after identifying elements
checkCols();
function checkCols() {
  width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  if (width <= 768) {
    tableCols = 1;
  }
  else if (width > 768 && width < 1201) {
    tableCols = 2;
  }
  else {
    tableCols = 3;
  }
};
//console.log("width = " + width);

//String vars to hold the screen
var searchData = "";
var catData = "";

//Strings to hold what gets loaded to the page
var psychologyArr = [];
var pmBasicsArr = [];
var environmentArr = [];
var qualityArr = [];
var communicationArr = [];
var ttArr = [];
var meetingsArr = [];
var timeArr = [];
var peopleArr = [];

buildCatTables();
populateScreenData();
searchSubPage.innerHTML = searchData;
catSubPage.innerHTML = catData;

//Search box configuration - here becasue it needs to run build tables first
var sb = document.getElementById('srchBox');
//Execute a function whenever a key is pressed
sb.addEventListener("keyup", function(event) {
  event.preventDefault();
  //Listening for "Enter" key
  if (event.keyCode === 13) {
    document.getElementById('srchBtn').click();
  }
});


function buildCatTables() {
  for (var i = 0; i < dmIndx.length; i++) {
    //Debug code to dump array info to console
    //console.log ("Loop: i=" + i + " dmIndx[i].num=" + dmIndx[i].num + " dmIndx[i].category=" + dmIndx[i].category);
    switch (dmIndx[i].category) {
      case "Psychology":
        psychologyArr.push(dmIndx[i]);
        break;

      case "Project Management Basics":
        pmBasicsArr.push(dmIndx[i]);
        break;

      case "Environment":
        environmentArr.push(dmIndx[i]);
        break;

      case "Quality":
        qualityArr.push(dmIndx[i]);
        break;

      case "Communication":
        communicationArr.push(dmIndx[i]);
        break;

      case "Tools & Techniques":
        ttArr.push(dmIndx[i]);
        break;

      case "Meetings":
        meetingsArr.push(dmIndx[i]);
        break;

      case "Time & Schedule":
        timeArr.push(dmIndx[i]);
        break;

      case "Managing People & Teams":
        peopleArr.push(dmIndx[i]);
        break;

      default:
        console.log("Hit default case: i=" + i + " dmIndx[i].num=" + dmIndx[i].num + " dmIndx[i].category=" + dmIndx[i].category);
        break;
    }
  }
}


function populateScreenData() {
  //Search section
  searchData = searchBaseA + input + searchBaseB;

  //Category selection section
  catData += "<h5>Project Management Basics</h5>";
  populateCatTable(pmBasicsArr);

  catData += "<h5>Tools & Techniques</h5>";
  populateCatTable(ttArr);

  catData += "<h5>Communication</h5>";
  populateCatTable(communicationArr);

  catData += "<h5>Quality</h5>";
  populateCatTable(qualityArr);

  catData += "<h5>Time & Schedule</h5>";
  populateCatTable(timeArr);

  catData += "<h5>Managing People & Teams</h5>";
  populateCatTable(peopleArr);

  catData += "<h5>Environment</h5>";
  populateCatTable(environmentArr);

  catData += "<h5>Meetings</h5>";
  populateCatTable(meetingsArr);

  catData += "<h5>Psychology</h5>";
  populateCatTable(psychologyArr);

  ///////////////////////////////////////////////////
  //More detail required?
  ///////////////////////////////////////////////////
  catData += "<p>Not finding what you're looking for? Try the search at the top of the page using the most basic key words.<br />For example, if you want to find something related to pipeline management, search \"pipeline\" and you'll note that one of the results is Little's Law which relates to the pipeline throughput.</p>";
}

///////////////////////////////////////////////////
//Populate Search By Category
///////////////////////////////////////////////////
function populateCatTable(arr) {
  var arrCounter = 0;
  var tableRows = Math.floor(arr.length / tableCols);
  var modLenCols = arr.length % tableCols;
  if (modLenCols != 0)
    tableRows++;

  catData += "<table>";
  for (var i = 0; i < tableRows; i++) {
    catData += "<tr>";
    for (var j = 0; arrCounter < arr.length && j < tableCols; j++) {
      catData += "<td><button onclick=\"setMemo(" + arr[arrCounter].num + ")\">" + arr[arrCounter].title + "</button></td>";
      arrCounter ++;
    }

    //Add fillers cols if final row has fewer than tableCols
    if (i == (tableRows - 1) && modLenCols != 0) {
      for (var k = 0; k < (tableCols - modLenCols); k++) {
        catData += "<td></td>";
      }
    }

    catData += "</tr>";
  }

  catData += "</table><br />";
}

///////////////////////////////////////////////////
//Run Search and Populate Results
///////////////////////////////////////////////////
function runSearch(theEntry) {
  // input = sb.value;
  var term = theEntry;
  console.log("Search term: " + term);
  // console.log("input = sb.value: " + input);

  //Reset page info to replace tables from prior searches (not add to)
  searchData = searchBaseA + term + searchBaseB;
  searchSubPage.innerHTML = searchData;


  if (term == null || term == undefined || term == "") {
    //console.log("No search term given, quitting.");
    return;
  }

  //Var to contain the individual elements of the total search term set
  var pieces = [];
  //Var to contain memo content found by search
  var results = [];

  //Trim off leading and ending white space if present, set to upperCase
  term.trim();
  term = term.toUpperCase();

  //Check to see if multiple words in search term
  if (term.includes(' ')) {
    var i = 0;
    while (term.includes(' ')) {
      pieces[i] = term.substring(0, term.indexOf(' '));
      i++;
      term = term.substring(term.indexOf(' ') + 1, term.length);
    }
    //Add the last one
    if (term != "") {
      pieces[i] = term;
    }
  }
  else {
    pieces[0] = term;
  }
  //Debug loop for evaluating contents of pieces[]
  // for (var i = 0; i < pieces.length; i++) {
  //   console.log("pieces[" + i + "] = " + pieces[i]);
  // }

  //Search through the keywords of the index array
  for (var i = 0; i < pieces.length; i++) {
    for (var j = 0; j < dmIndx.length; j++) {
      //If the entry's keywords include the term
      if (dmIndx[j].keywords.includes(pieces[i])) {
        var foundEntry = false;
        //Search the results array for an existing entry from dmIndx
        for (var k = 0; k < results.length; k++) {
          //If found, increase results entry rank becasue we found it again with another term
          if (results[k].title == dmIndx[j].title) {
            results[k].rank++;
            foundEntry = true;
            break;
          }
        }

        //If not found, then add new entry to the results array
        if (!foundEntry) {
          var tmp = {
            title: dmIndx[j].title,
            num: dmIndx[j].num,
            path: dmIndx[j].path,
            rank: 1,
          };
          results.push(tmp);
        }
      }
    }
  }

  results.sort(function(a, b) {
    return b.rank - a.rank;
  });
  //Debug code dump results array to console
  console.log(results);

  var arrCounter = 0;
  var tableRows = Math.floor(results.length / tableCols);
  if (results.length % tableCols != 0)
    tableRows++;

  var sNewHeight = 39 * tableRows + 60;

  searchData += "<table>";
  for (var i = 0; i < tableRows; i++) {
    searchData += "<tr>";
    for (var j = 0; arrCounter < results.length && j < tableCols; j++) {
      searchData += "<td><button onclick=\"setMemo(" + results[arrCounter].num + ", " + sNewHeight + ")\">" + results[arrCounter].title + "</button></td>";
      arrCounter ++;
    }

    searchData += "</tr>";
  }
  searchData += "</table>";

  //Populate window, expand search section to accommodate all returned results
  searchSubPage.innerHTML = searchData;
  addCSSRule(document.styleSheets[0], "#searchToggle:checked ~ #searchExpand", "height: " + sNewHeight + "px;");

  //console.log("Exiting runSearch();")
}


function setMemo(id, height) {
  //console.log("Selected memo: " + id + " - " + dmIndx[id].title);
  var selectedMemo = dmIndx[id].path;
  var script = document.createElement('script');
    script.src = selectedMemo;
    //script.async = true;
  document.head.appendChild(script);

  sToggle.checked = false;
  cToggle.checked = false;

  //Only scroll to very top if a larger monitor, mobile places menu at top
  if (width <= 768)
    window.scrollTo(0, 375);
  else
    window.scrollTo(0, 0);
}

//Can't direct set element.style.height or the collapse function no longer works... this is the work around
function addCSSRule(sheet, selector, rules) {
  var index = 0;
  var rulesList = sheet.cssRules;
  for (var i = 0; i < rulesList.length; i++) {
    // console.log(rulesList[i]);
    if (rulesList[i].selectorText == selector) {
      index = i;
      sheet.deleteRule(index);
      break;
    }
  }

	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, rules, index);
	}
}


//Body resizing configuration
document.getElementsByTagName('body')[0].onresize = function() {
  checkCols();

  catData = "";
  populateScreenData();
  catSubPage.innerHTML = catData;
};
