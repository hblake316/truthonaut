import Hero from './components/Hero'
import Quiz from './components/Quiz'
import Media from './components/Media'
import Merch from './components/Merch'
import Footer from './components/Footer'

function App() {
  return (
    <div
      className='min-h-screen flex flex-col'
      style={{
        background:
          'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
      }}
    >
      <Hero />
      <Quiz />
      <Media />
      <Merch />
      <Footer />
    </div>
  )
}

export default App
