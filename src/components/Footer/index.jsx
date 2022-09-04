import BrandIcon from '../../assets/icons/brand-icon.svg'
import FooterImage from '../../assets/images/footer-image.png'
import FooterList from './FooterList'
import { ourProduct, usefulLinks, tipsAndTricks } from '../../utils/data'

const Footer = () => {
  return (
    <footer className='relative mt-32 flex flex-col gap-28 overflow-hidden bg-[#232631] p-16 lg:flex-row'>
      <div className='z-10'>
        <div className='flex'>
          <img src={BrandIcon} alt='' width={35} height={35} />
          <h3 className='ml-3 text-2xl font-bold text-white'>HealthKuy</h3>
        </div>
        <p className='mt-8 text-[#6B738E]'>
          Copyright © 2022. All <br /> Rights Reserved.
        </p>
      </div>

      <div className='z-10 flex flex-col gap-14 lg:flex-row lg:gap-24'>
        <FooterList title='Our Products' items={ourProduct} />
        <FooterList title='Useful Links' items={usefulLinks} />
        <FooterList title='Tips & Tricks' items={tipsAndTricks} />
      </div>
      <img
        src={FooterImage}
        alt=''
        className='absolute -bottom-5 right-0 z-0'
        width={429}
        height={429}
      />
    </footer>
  )
}
export default Footer
