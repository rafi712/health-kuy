const HeroText = () => {
  return (
    <div className='mt-16'>
      <h4 className='font-medium text-[#0C64DC] lg:text-[18px]'>
        Trusted Doctors❤️
      </h4>
      <h1 className='text-3xl font-bold capitalize leading-relaxed lg:text-[56px]'>
        easy way to make <br /> your life healthier
      </h1>
      <p className='mt-5 text-base font-light leading-7 text-[#8A8A8A] lg:text-[18px]'>
        Lorem Ipsum is simply dummy text of the printing and{' '}
        <br className='hidden lg:block' /> typesetting industry. Lorem Ipsum has
        been the <br className='hidden lg:block' /> industry's standard dummy
        text ever.
      </p>
      <button className='mt-10 h-[48px] w-[156px] rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 py-3 px-8 text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 lg:mt-14'>
        Get Started
      </button>
    </div>
  )
}
export default HeroText
