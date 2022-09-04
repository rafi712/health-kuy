import HeroImage from './HeroImage'
import HeroText from './HeroText'

const Hero = () => {
  return (
    <div className='mt-[70px] flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-0 '>
      <HeroText />
      <HeroImage />
    </div>
  )
}
export default Hero
