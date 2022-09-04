import { useState, useEffect } from 'react'
import AuthButtons from './AuthButtons'
import Links from './Links'
import BrandIcon from './BrandIcon'
import HamburgerButton from './HamburgerButton'

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true)
  const [atTopOfPage, setAtTopOfPage] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setAtTopOfPage(false)
    } else {
      setAtTopOfPage(true)
    }
  }

  return (
    <header>
      <nav
        className={`${
          !atTopOfPage ? 'scrolled ' : ''
        }flex fixed top-0 z-50 w-full flex-wrap items-center justify-between bg-white px-5 py-5 md:px-8 lg:px-14`}
      >
        <div className='flex w-full items-center justify-between lg:w-auto'>
          <BrandIcon />
          <HamburgerButton setIsHidden={setIsHidden} isHidden={isHidden} />
        </div>

        <div
          className={`${
            isHidden ? 'hidden ' : ''
          }w-full lg:flex lg:w-auto  lg:items-center lg:justify-around`}
        >
          <Links />
        </div>

        <div
          className={`${
            isHidden ? 'hidden ' : ''
          }w-full lg:flex lg:w-auto lg:items-center`}
        >
          <AuthButtons />
        </div>
      </nav>
    </header>
  )
}
export default Navbar
