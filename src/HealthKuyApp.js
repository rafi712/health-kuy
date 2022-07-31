import {
  Articles,
  Footer,
  Hero,
  Navbar,
  Reason,
  Services,
  Specialist,
  Testimonials,
} from './components'

function HealthKuyApp() {
  return (
    <div className='App bg-[#FAFAFA]'>
      <Navbar />
      <div className='px-16'>
        <Hero />
        <Services />
        <Specialist />
        <Reason />
        <Articles />
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}

export default HealthKuyApp
