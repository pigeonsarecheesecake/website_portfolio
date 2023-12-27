'use client'
import ProjectPage from "../components/ProjectPage"

const page = () => {
    // Props
    const props = {
        title: "Weather Forecast",
        description: `Displays the current weather conditions and forecasts for the next five days`,
        intro:
        `This was a smaller project, yet no less significant than its larger counterparts. After learning React, I became curious about how to interact with an API. Although there are many weather app videos and tutorials out there, I didn't follow a tutorial to create this project.

I started from scratch and researched each step I wasn't familiar with. This web application allows users to search for a city and display its current weather conditions, as well as the weather forecast for the next five days using the OpenWeatherMap API.`,
        mainImage: "/weather-home.png",
        gif1:"/weather-gif.gif",
        role:"Full-stack Developer",
        link:"https://wills-weather-app.netlify.app/",
        website:"Weather App",
        technologies:"HTML, JavaScript, React, CSS, OpenWeatherMap API",
        feature1:"Login System & User Type",
        feature1Description:
        ` By entering the city name, the program makes a call to the API to retrieve results for cities with the same name; this is the first API call.
Once the cities are displayed on the screen, the user chooses a city. The city object gets destructured so we can retrieve the latitude and longitude of the city.

In the second API call, we use the coordinates of the city to obtain its current weather conditions. The response is converted into JSON and stored in the currentWeather state as an object.

The third API call fetches the forecast in a similar fashion, but this time I used a loop to obtain the same weather forecast information for the same time over the next five days.`
      }
      
  return (
    <ProjectPage {...props}/>
  )
}

export default page