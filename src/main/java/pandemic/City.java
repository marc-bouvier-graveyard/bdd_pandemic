package pandemic;

import org.jetbrains.annotations.NotNull;

public class City {
    private final CityName cityName;
    private int infectionLevel = 0;

    public City(@NotNull CityName cityName) {
        this.cityName = cityName;
    }

    public CityName getCityName() {
        return cityName;
    }

    public void infect() {
        if (infectionLevel < 3)
            infectionLevel++;
    }

    public int getInfectionLevel() {
        return infectionLevel;
    }
}
