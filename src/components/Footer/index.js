import BrandIcon from '../../assets/icons/brand-icon.svg'
import FooterImage from '../../assets/images/footer-image.png'
import FooterList from './FooterList'
import { ourProduct, usefulLinks, tipsAndTricks } from '../../utils/data'

const Footer = () => {
  return (
    <footer className='mt-32 bg-[#232631] p-16 flex relative overflow-hidden gap-28'>
      <div>
        <div className='flex'>
          <img src={BrandIcon} alt='' width={35} height={35} />
          <h3 className='text-2xl text-white font-bold ml-3'>HealthKuy</h3>
        </div>
        <p className='text-[#6B738E] mt-8'>
          Copyright © 2022. All <br /> Rights Reserved.
        </p>
      </div>

      <div className='flex gap-24'>
        <FooterList title='Our Products' items={ourProduct} />
        <FooterList title='Useful Links' items={usefulLinks} />
        <FooterList title='Tips & Tricks' items={tipsAndTricks} />
      </div>
      <img
        src={FooterImage}
        alt=''
        className='absolute -bottom-5 right-0'
        width={429}
        height={429}
      />
    </footer>
  )
}
export default Footer
