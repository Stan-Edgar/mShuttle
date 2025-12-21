import Nav from "./nav"
import Hero from './Hero'
import Polaroid from "./polaroid"
import Airport from "./assets/Airport.png"

function Container({ children }) {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }} className="flex flex-col items-center w-full mt-4 gap-40">
      {children}
    </div>
  )
}

function App() {
  return (
    <>
      <Container>
        <Nav />
        <Hero />
        <Polaroid pic={Airport} caption="Airport" />
      </Container>
    </>
  )
}

export default App
