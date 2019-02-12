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
});