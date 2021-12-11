import React from "react";

function Weather() {
    const [temperature, setTemperature] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [icon, setIcon] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=1c503b9d5f7a258a35b97d4c4e24c002&units=metric')

            .then(response => response.json())

            .then(data => {
                setTemperature(data.main.temp);
                setDescription(data.weather[0].description);
                setIcon(data.weather[0].icon);
                setLoading(true);
            })

            .catch(err => console.error(err));
    }, []);

    if (!isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>Temperature: {temperature}</p>
            <p>Weather: {description}</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        </div>
    );

}

export default Weather;