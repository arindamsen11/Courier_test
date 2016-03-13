$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature1.feature");
formatter.feature({
  "line": 1,
  "name": "Test",
  "description": "",
  "id": "test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Test web apps",
  "description": "",
  "id": "test;test-web-apps",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Check the Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Check Track Shipment",
  "keyword": "Then "
});
formatter.match({
  "location": "Test1.navigate_to_the_url()"
});
formatter.result({
  "duration": 11008705523,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});