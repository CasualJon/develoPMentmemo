//Primary JS file for front page of develoPMent memo
//Used to identify available memos, select randomized memos, and render that
//content to the front page

var memoCount = 3;

//Get random memo from available content
var memoNum = getRandom(memoCount);

var selectedMemo = "./assets/js/dm";
  selectedMemo += memoNum;
  selectedMemo += ".js";

var script = document.createElement('script');
  script.src = selectedMemo;
  script.async = true;
document.head.appendChild(script);

///////////////////////////////////////
// Random Number Generation
///////////////////////////////////////
function getRandom(num) {
  return Math.floor(Math.random() * num);
}
