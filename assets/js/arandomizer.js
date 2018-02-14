//Primary JS file for front page of develoPMent memo
//Used to identify available memos, select randomized memos, and render that
//content to the front page

//Get random memo from available content
var memoNum = getRandom(dmIndx.length);

var selectedMemo = dmIndx[memoNum].path;

var script = document.createElement('script');
  script.src = selectedMemo;
  //script.async = true;
document.head.appendChild(script);

///////////////////////////////////////
// Random Number Generation
///////////////////////////////////////
function getRandom(num) {
  return Math.floor(Math.random() * num);
}
