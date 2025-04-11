import { useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Modal from "react-bootstrap/Modal"
import { Link } from "react-router-dom"

const MyNav = function () {
  const [searchInput, setSearchInput] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [selectedCity, setSelectedCity] = useState("")

  const cityList = ["reggello", "catania", "bolzano"] // puoi espandere questo

  const handleSearch = (e) => {
    e.preventDefault()
    const cityMatch = cityList.find(
      (city) => city.toLowerCase() === searchInput.toLowerCase()
    )
    if (cityMatch) {
      setSelectedCity(cityMatch)
      setShowModal(true)
    } else {
      alert("Città non trovata") // o puoi mostrare una modale diversa
    }
  }

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">Meteo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-link" to={"/"}>
                menu
              </Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Cerca città"
                className="me-2"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button variant="outline-success" type="submit">
                Cerca
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title>Città trovata</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-info">
          Hai cercato <strong>{selectedCity}</strong>. Puoi vedere i dettagli
          cliccando il bottone qui sotto.
        </Modal.Body>
        <Modal.Footer className="bg-info">
          <Link to={`/city-details/${selectedCity.toLowerCase()}`}>
            <Button variant="success" onClick={() => setShowModal(false)}>
              Vai alla pagina
            </Button>
          </Link>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MyNav
