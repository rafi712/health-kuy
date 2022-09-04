const HamburgerButton = ({ setIsHidden, isHidden }) => {
  if (isHidden) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        id='menu-button'
        onClick={() => setIsHidden(!isHidden)}
        className='block h-6 w-6 cursor-pointer lg:hidden'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>
    )
  } else {
    return (
      <svg
        fill='#000000'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24px'
        height='24px'
        onClick={() => setIsHidden(!isHidden)}
        className='block h-6 w-6 cursor-pointer lg:hidden'
      >
        <path d='M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z' />
      </svg>
    )
  }
}
export default HamburgerButton
