import HeroImage from './HeroImage'
import HeroText from './HeroText'

const Hero = () => {
  return (
    <div className='mt-[70px] flex justify-between '>
      <HeroText />
      <HeroImage />
    </div>
  )
}
export default Hero
