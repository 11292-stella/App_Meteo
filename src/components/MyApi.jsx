import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const MyApi = function () {
  const [weatherData, setWeatherData] = useState()

  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=reggello&units=metric&appid=3f56e756d1e7b514542f2dd2face98a8`
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore chiamata")
        }
      })
      .then((data) => {
        console.log(data)
        setWeatherData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center align-items-center">
          <Col xs={9} md={4} lg={3} className="text-center">
            {weatherData && (
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                />
                <Card.Body>
                  <Card.Title>{weatherData.name}</Card.Title>
                  <Card.Text>
                    <strong>Descrizione:</strong>{" "}
                    {weatherData.weather[0].description} <br />
                    <strong>Temperatura:</strong> {weatherData.main.temp} °F{" "}
                    <br />
                    <strong>Latitudine:</strong> {weatherData.coord.lat} <br />
                    <strong>Longitudine:</strong> {weatherData.coord.lon}
                  </Card.Text>
                  <Button variant="primary">Aggiorna</Button>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default MyApi
