package pandemic

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import cucumber.api.java8.En
import org.hamcrest.CoreMatchers.equalTo
import org.hamcrest.MatcherAssert.assertThat

class InfectionSteps : En {

    private lateinit var paris: City
    private lateinit var game: Game
    private lateinit var outbreakCounter: OutbreakCounter
    @Given("^(.*) is healthy$")
    fun paris_is_healthy(cityName: CityName) {
        paris = City(cityName)
        outbreakCounter = OutbreakCounter(0)
        game = Game(hashMapOf(cityName to paris), outbreakCounter)
    }

    @When("Paris gets infected")
    fun paris_gets_infected() {
        game.infect(paris)

    }

    @Then("^(.*) infection level should (?:be|remain at) (\\d+)$")
    fun paris_infection_level_should_be(cityName: CityName, infectionLevel: Int) {
        assertThat(paris.infectionLevel, equalTo(infectionLevel))
    }

    @Given("^(.*) infection level is (\\d+)$")
    fun paris_infection_level_is(cityName: CityName, infectionLevel: Int) {
        paris = City(cityName)
        game = Game(hashMapOf(cityName to paris), OutbreakCounter(0))
        for (i in 1..infectionLevel)
            game.infect(paris)
    }

    @And("^outbreak counter is (\\d+)$")
    fun outbreak_counter_is(counter: Int) {
        for (i in 1..counter)
            game.increaseOutbreakCounter()
    }


    @Then("^outbreak counter should be (\\d+)$")
    fun outbreak_counter_should_be(counter: Int) {
        outbreakCounter = OutbreakCounter(counter)
        assertThat(outbreakCounter.counter, equalTo(counter))
    }


    @Then("^the game should be lost$")
    fun the_game_should_be_lost() {
        assertThat("Game should be lost",
                game.isLost(), equalTo(true))
    }

}
