import MyNav from "./components/MyNav"
import "bootstrap/dist/css/bootstrap.min.css"
import MyFooter from "./components/MyFooter"
import MyApi from "./components/MyApi"
import MySecondApi from "./components/mySecondApi"
import MyTreApi from "./components/MyTreApi"
import MyFourApi from "./components/MyFourApi"
import { Container, Row, Col } from "react-bootstrap"
import MyFiveApi from "./components/MyFiveApi"
import MySixtApi from "./components/MySixtApi"
import MySevenApi from "./components/MySevenApi"
import MyHeightApi from "./components/MyHeightApp"
import CityDetails from "./components/CityDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./assets/style.css"

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNav />
        <main className="flex-grow-1 container mt-4 bg">
          <h1 className="text-center">Meteo Città</h1>

          <Routes>
            <Route
              path="/"
              element={
                <Container>
                  <Row className="g-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <Col className="mb-3">
                      <MyApi />
                    </Col>
                    <Col className="mb-3">
                      <MySecondApi />
                    </Col>
                    <Col className="mb-3">
                      <MySixtApi />
                    </Col>
                    <Col className="mb-3">
                      <MyFiveApi />
                    </Col>
                    <Col className="mb-3">
                      <MyTreApi />
                    </Col>
                    <Col className="mb-3">
                      <MySevenApi />
                    </Col>
                    <Col className="mb-3">
                      <MyHeightApi />
                    </Col>
                    <Col className="mb-3">
                      <MyFourApi />
                    </Col>
                  </Row>
                </Container>
              }
            />

            <Route path="/city-details/:cityName" element={<CityDetails />} />
          </Routes>
        </main>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
