const toCersius = (f) => parseInt((f - 32) / 1.8, 10);

const fetchForecast = (cityName, countryCode) => {
  const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${cityName}%2C%20${countryCode}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
  return fetch(url)
    .then(resp => {
      return resp.json()
        .then(json => {
          const {
            query: {
              results: {
                channel: {
                  item: {
                    forecast
                  }
                }
              }
            }
          } = json;

          return forecast.reduce(
            (p, c, i) => ({
              ...p,
              [i]: {
                date: c.date,
                text: c.text,
                high: toCersius(c.high),
                low: toCersius(c.low),
              }
            }),
            {}
          );
        });
    });
};

export const astanaForecast = fetchForecast('astana', 'kz');
export const almatyForecast = fetchForecast('almaty', 'kz');
export const shymkentForecast = fetchForecast('shymkent', 'kz');
