$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:pandemic/infection.feature");
formatter.feature({
  "name": "Infection",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "first infection",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Paris is healthy",
  "keyword": "Given "
});
formatter.match({
  "location": "InfectionSteps.paris_is_healthy(CityName)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paris gets infected",
  "keyword": "When "
});
formatter.match({
  "location": "InfectionSteps.paris_gets_infected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paris infection level should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_should_be(CityName,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "second infection",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Paris infection level is 1",
  "keyword": "Given "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_is(CityName,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paris gets infected",
  "keyword": "When "
});
formatter.match({
  "location": "InfectionSteps.paris_gets_infected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paris infection level should be 2",
  "keyword": "Then "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_should_be(CityName,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "third infection",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Paris infection level is 2",
  "keyword": "Given "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_is(CityName,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paris gets infected",
  "keyword": "When "
});
formatter.match({
  "location": "InfectionSteps.paris_gets_infected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paris infection level should be 3",
  "keyword": "Then "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_should_be(CityName,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "fourth infection",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Paris infection level is 3",
  "keyword": "Given "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_is(CityName,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paris gets infected",
  "keyword": "When "
});
formatter.match({
  "location": "InfectionSteps.paris_gets_infected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paris infection level should remain at 3",
  "keyword": "Then "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_should_be(CityName,int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:pandemic/outbreak_counter.feature");
formatter.feature({
  "name": "outbreak counter",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "single outbreak",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Paris infection level is 3",
  "keyword": "Given "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_is(CityName,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "outbreak counter is 0",
  "keyword": "And "
});
formatter.match({
  "location": "InfectionSteps.outbreak_counter_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paris gets infected",
  "keyword": "When "
});
formatter.match({
  "location": "InfectionSteps.paris_gets_infected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "outbreak counter should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "InfectionSteps.outbreak_counter_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "final outbreak",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Paris infection level is 3",
  "keyword": "Given "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_is(CityName,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "outbreak counter is 7",
  "keyword": "And "
});
formatter.match({
  "location": "InfectionSteps.outbreak_counter_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paris gets infected",
  "keyword": "When "
});
formatter.match({
  "location": "InfectionSteps.paris_gets_infected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "outbreak counter should be 8",
  "keyword": "Then "
});
formatter.match({
  "location": "InfectionSteps.outbreak_counter_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the game should be lost",
  "keyword": "And "
});
formatter.match({
  "location": "InfectionSteps.the_game_should_be_lost()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:pandemic/standard_definition.feature");
formatter.feature({
  "name": "standard definition",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "occidental sub-network",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the occidental sub-network",
  "keyword": "Given "
});
formatter.match({
  "location": "InfectionSteps.the_occidental_sub_network()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "NewYork should be linked to London, Madrid",
  "keyword": "Then "
});
formatter.match({
  "location": "InfectionSteps.should_be_linked_to(String,String)"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat pandemic.InfectionSteps.should_be_linked_to(InfectionSteps.kt:87)\n\tat ✽.NewYork should be linked to London, Madrid(classpath:pandemic/standard_definition.feature:8)\n",
  "status": "pending"
});
formatter.step({
  "name": "Paris should be linked to Algiers, Milan, Essen, London, Madrid",
  "keyword": "And "
});
formatter.match({
  "location": "InfectionSteps.should_be_linked_to(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Paris infection level should be 0",
  "keyword": "And "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_should_be(CityName,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "NewYork infection level should be 0",
  "keyword": "And "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_should_be(CityName,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "London infection level should be 0",
  "keyword": "And "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_should_be(CityName,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Algiers infection level should be 0",
  "keyword": "And "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_should_be(CityName,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Milan infection level should be 0",
  "keyword": "And "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_should_be(CityName,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Essen infection level should be 0",
  "keyword": "And "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_should_be(CityName,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Madrid infection level should be 0",
  "keyword": "And "
});
formatter.match({
  "location": "InfectionSteps.paris_infection_level_should_be(CityName,int)"
});
formatter.result({
  "status": "skipped"
});
});