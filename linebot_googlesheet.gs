const channelToken = 'line messaging api channel token';
const app = SpreadsheetApp.openById("sheet id")
const sheet = app.getSheetByName("sheet name")

function doPost(e) {
  Logger = BetterLog.useSpreadsheet("sheet id"); 
  var requestJSON = e.postData.contents;
  Logger.log(requestJSON);
  
  var requestObj = JSON.parse(requestJSON).events[0];
  var team = requestObj.message.text;
  var userId = requestObj.source.userId;
  Logger.log(team);
  Logger.log(userId);
  addData(userId, team);
}

function addData(userId, team) {
  switch(team) {
  case 'A':
    setValueToCell(B13, userId);
    break;
  case 'B':
    setValueToCell(B12, userId);
    break;
  default:
    // code block
} 


function setValueToCell(range, value) {
  sheet.getRange(range).setValue(value);
}
}