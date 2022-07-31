import AuthButtons from './AuthButtons'
import BrandIcon from './BrandIcon'
import Links from './Links'

const Navbar = () => {
  return (
    <nav className='flex bg-white justify-between items-center py-5 px-16'>
      <BrandIcon />
      <Links />
      <AuthButtons />
    </nav>
  )
}
export default Navbar
