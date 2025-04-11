import { useParams } from "react-router-dom"
import dettagli from "./dettagli.json"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const CityDetails = function () {
  const { cityName } = useParams()

  const city = dettagli[cityName.toLowerCase()]

  return (
    <Container className="mt-5 mb-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          {city ? (
            <Card className="bg-info text-light">
              <Card.Img
                variant="top"
                src={city.image}
                alt={city.name}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>
                  <strong>{city.description}</strong>
                  <br />
                  <strong>Popolazione:</strong> {city.note} abitanti
                </Card.Text>
                <Link to="/">
                  <Button variant="info">Torna alla Home</Button>
                </Link>
              </Card.Body>
            </Card>
          ) : (
            <div>
              Città non trovata. Verifica il nome della città o riprova più
              tardi.
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default CityDetails
