$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("terminalOwnership.feature");
formatter.feature({
  "line": 2,
  "name": "ESB microservice to get the correct terminal owner for given IMSI",
  "description": "",
  "id": "esb-microservice-to-get-the-correct-terminal-owner-for-given-imsi",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to get Terminal Owner",
  "description": "",
  "id": "esb-microservice-to-get-the-correct-terminal-owner-for-given-imsi;user-should-be-able-to-get-terminal-owner",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User gets response for terminal id \u0027901112118097036\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "He should get response code \u0027200\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "901112118097036",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.userGetsResponseForTerminalId(String)"
});
formatter.result({
  "duration": 3531646858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "MyStepdefs.heShouldGetResponseCode(int)"
});
formatter.result({
  "duration": 59644077,
  "status": "passed"
});
});