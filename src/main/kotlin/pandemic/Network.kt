package pandemic

class Network(private val cityLinks: Set<LinkedCities>) {
    fun city(cityName: CityName?): City? {

        var allCities1 = cityLinks.map { linkedCities -> linkedCities.city1 }
        var allCities2 = cityLinks.map { linkedCities -> linkedCities.city2 }
        val allCities: Set<City> = setOf(allCities1, allCities2).flatMap { list: List<City> -> list }.toSet()
        return allCities.find { city -> city.cityName == cityName }
    }

}
