window.onload = function() { ResultFeedback() };

var testString = "Hellow Word";

function saveStateDataToFile()
{
    var blob = new Blob(["data.org"], {type: "text/plain;charset=utf-8"});
}
function ResultFeedback()
{
    alert(testString);
}
function StoreItem()
{
    testString = "You got it!";
}
