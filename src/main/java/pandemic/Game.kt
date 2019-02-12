package pandemic

class Game(var network: Network, var outbreakCounter: OutbreakCounter) {
    fun infect(paris: City) {
        val city = this.network.city(paris.cityName)
        if (city?.infectionLevel == 3) {
            increaseOutbreakCounter()
        }
        city?.infect()

    }

    fun increaseOutbreakCounter() {
        if (outbreakCounter.counter < 9)
            outbreakCounter = OutbreakCounter(outbreakCounter.counter + 1)
    }

    fun isLost() = outbreakCounter.isLost()

}