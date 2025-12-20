import Nav from "./nav"
import Hero from './Hero'

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
      </Container>
    </>
  )
}

export default App
