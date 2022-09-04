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

const App = () => {
  return (
    <div className='bg-[#FAFAFA]'>
      <Navbar />
      <div className='px-8 lg:px-16 lg:pt-20'>
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

export default App
