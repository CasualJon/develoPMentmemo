//Primary JS file for front page of develoPMent memo
//Used to identify available memos, select randomized memos, and render that
//content to the front page

alert("HERE!");
var memoCount = 1;

//Get random memo from available content
var memoNum = getRandom(memoCount);

var selectedMemo = "./assets/js/dm";
  selectedMemo += memoNum;
  selectedMemo += ".js";

//var script = document.createElement('script');
//  script.src = selectedMemo;

var script = document.getElementsByName('todo');
var att = document.createAttribute("src");
  att.value = selectedMemo;
script.setAttributeNode(att);

//Update front page element with content from memo
// subPage.innerHTML = getMemo();

///////////////////////////////////////
// Random Number Generation
///////////////////////////////////////
function getRandom(num) {
  return Math.floor(Math.random() * num);
}
