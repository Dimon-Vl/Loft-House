import './App.scss'

import Apartments from './components/apartments/Apartments'
import Features from './components/features/Features'
import Header from './components/header/Header'
import QuestionForm from './components/questionForm/QuestionForm'
import SectionCta from './components/sectionCta/SectionCta'
import VideoSection from './components/videoSection/VideoSection'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Features />
      <Apartments />
      <SectionCta />
      <VideoSection />
      <QuestionForm />
      <Footer />
    </>
  )
}

export default App
