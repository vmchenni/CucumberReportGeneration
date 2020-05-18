$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/GetUsers.feature");
formatter.feature({
  "name": "Get Users",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get User From Page 2",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User calls get user API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.myStepDef.UsercallsgetuserAPI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that status code is 200 and FirstName is \"Janet\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.myStepDef.verify_that_status_code_is_and_FirstName_is(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Last name as \"Weaver\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.myStepDef.verify_last_name_as_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});