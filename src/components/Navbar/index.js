import AuthButtons from './AuthButtons'
import BrandIcon from './BrandIcon'
import Links from './Links'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-white py-5 px-16'>
      <BrandIcon />
      <Links />
      <AuthButtons />
    </nav>
  )
}
export default Navbar
