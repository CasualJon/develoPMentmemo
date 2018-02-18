//Global constants for page info & varibales for table String content
const searchSubPage = document.getElementById('searchMemos');
const catSubPage = document.getElementById('allMemos');
const currSubPage = document.getElementById('currentMemo');
const sToggle = document.getElementById('searchToggle');
const cToggle = document.getElementById('categoryToggle');

//NOTE - CSS currently hard codes column width to 50%
const tableCols = 2;

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

buildTables();
populateScreenData();
searchSubPage.innerHTML = searchData;
catSubPage.innerHTML = catData;

function buildTables() {
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

      case "People & Teams":
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
  searchData += "<input id=\"srchBox\" type=\"text\" placeholder=\"Search..\">";
  searchData += "<button class=\"small\" onclick=\"runSearch()\"><img src=\"./assets/img/magnifyingglass_256x256.png\" width=\"32\"></button>";

  //Category selection section
  catData += "<h5>Project Management Basics</h5>";
  populateTable(pmBasicsArr);

  catData += "<h5>Tools & Techniques</h5>";
  populateTable(ttArr);

  catData += "<h5>Communication</h5>";
  populateTable(communicationArr);

  catData += "<h5>Quality</h5>";
  populateTable(qualityArr);

  catData += "<h5>Time & Schedule</h5>";
  populateTable(timeArr);

  catData += "<h5>People & Teams</h5>";
  populateTable(peopleArr);

  catData += "<h5>Environment</h5>";
  populateTable(environmentArr);

  catData += "<h5>Meetings</h5>";
  populateTable(meetingsArr);

  catData += "<h5>Psychology</h5>";
  populateTable(psychologyArr);

  ///////////////////////////////////////////////////
  //More Detail required?
  ///////////////////////////////////////////////////
  catData += "<p>Not finding what you're looking for? Try the search at the top of the page using the most basic key words.<br />For example, if you want to find something related to pipeline management, search \"pipeline\" and you'll note that one of the results is Little's Law which relates to the pipeline throughput.</p>";
}


function populateTable(arr) {
  var arrCounter = 0;
  var tableRows = arr.length / tableCols;
  if (arr.length % tableCols != 0)
    tableRows++;

  catData += "<table>";
  for (var i = 0; i < tableRows; i++) {
    catData += "<tr>";
    for (var j = 0; arrCounter < arr.length && j < tableCols; j++) {
      catData += "<td><button onclick=\"setMemo(" + arr[arrCounter].num + ")\">" + arr[arrCounter].title + "</button></td>";
      arrCounter ++;
    }
    catData += "</tr>";
  }
  catData += "</table><br />";
}


function runSearch() {
  var boxElement = document.getElementById('srchBox');
  var term = boxElement.value;
  //console.log("Search term: " + term);

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
        //Search the results array for an existing entry
        for (var k = 0; k < results.length; k++) {
          //If found, increase rank becasue we found it again
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
            path: dmIndx[j].path,
            rank: 1,
          };
          results.push(tmp);
        }
      }
    }
  }

  //Debug code dump results array to console
  // console.log(results);

  //TODO - need to sort the array by the value field
}


function setMemo(id) {
  //console.log("Selected memo: " + id + " - " + dmIndx[id].title);
  var selectedMemo = dmIndx[id].path;
  var script = document.createElement('script');
    script.src = selectedMemo;
    //script.async = true;
  document.head.appendChild(script);

  sToggle.checked = false;
  cToggle.checked = false;
  window.scrollTo(0, 0);
}
