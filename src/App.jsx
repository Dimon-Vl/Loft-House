import './App.scss'
import 'leaflet/dist/leaflet.css';

import Apartments from './components/apartments/Apartments'
import Features from './components/features/Features'
import Header from './components/header/Header'
import QuestionForm from './components/questionForm/QuestionForm'
import SectionCta from './components/sectionCta/SectionCta'
import VideoSection from './components/videoSection/VideoSection'
import Footer from './components/footer/Footer'
import Map from './components/map/Map';

function App() {

  return (
    <>
      <Header />
      <Features />
      <Apartments />
      <SectionCta />
      <VideoSection />
      <Map/>
      <QuestionForm />
      <Footer />
    </>
  )
}

export default App
