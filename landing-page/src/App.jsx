import Nav from "./nav"
import Hero from './Hero'
import ValueProp from "./valueProp"
import Footer from "./Footer"

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

      <ValueProp />
      <Footer />
    </>
  )
}

export default App
