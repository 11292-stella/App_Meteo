import MyNav from "./components/MyNav"
import "bootstrap/dist/css/bootstrap.min.css"
import MyFooter from "./components/MyFooter"
import MyApi from "./components/MyApi"

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <MyNav />
        <main className="flex-grow-1 container mt-4">
          <MyApi />
        </main>
        <MyFooter />
      </div>
    </>
  )
}

export default App
