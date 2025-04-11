import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyFiveApi = function () {
  const [weatherData, setWeatherData] = useState()

  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=Milano&units=metric&appid=3f56e756d1e7b514542f2dd2face98a8`
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
        <Row>
          <Col>
            {weatherData && (
              <Card className="bg-info text-light">
                <Card.Img
                  variant="top"
                  src={`https://pisa1940.com/cdn/shop/articles/duomo_milano_pisa.png?v=1709552807`}
                />
                <Card.Body>
                  <Card.Title>{weatherData.name}</Card.Title>
                  <Card.Text>
                    <strong>Descrizione:</strong>{" "}
                    {weatherData.weather[0].description} <br />
                    <strong>Temperatura:</strong> {weatherData.main.temp} °C{" "}
                    <br />
                    <strong>Latitudine:</strong> {weatherData.coord.lat} <br />
                    <strong>Longitudine:</strong> {weatherData.coord.lon}
                  </Card.Text>
                  <Link to={`/city-details/${weatherData.name.toLowerCase()}`}>
                    <Button variant="primary">Dettagli città</Button>
                  </Link>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default MyFiveApi
