# Notes

- Ajax request with redux
    - Ajax requests in redux are kind of complicated to setup at first (like most things)
- Middlewares
    - Middlewares can modify actions prior to the actions hitting the reducers
- Arrays in react
    - Need to use keys when using arrays
- Props
    - Props can be passed into components by passing them as attributes on the dom <chart color="red" />
    - used like props.color
- React Sparklines
    - 3rd party component

# App Components
- SeachBar
    - Search bar needs to be a container due to it talking to redux
    - Controlled field is a valued input that is set by the component
- WeatherList
    - List of weather information
    - Mapped to the weather prop and any time that changes it will rerender
- App
    - Chart
    - ForcastList

# Containers
- Chart
    - Chart doesn't need to be aware of any state so it can be a functional react component