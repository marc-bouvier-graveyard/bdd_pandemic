package pandemic

class LinkedCities(val city1: City, val city2: City) {
    override fun equals(other: Any?): Boolean {

        return other is LinkedCities &&
                (this.city1 == other.city1 && this.city2 == other.city2 ||
                        this.city1 == other.city2 && this.city2 == other.city1)
    }

}
