const AuthButtons = () => {
  return (
    <div className='flex justify-center lg:justify-start'>
      <button className='w-[130px] py-3 px-8 font-medium'>Sign In</button>
      <button className='w-[130px] rounded-xl bg-sky-100 py-3 px-8 font-medium text-sky-600 hover:bg-sky-200 hover:text-sky-700 focus:ring-2 focus:ring-inset active:bg-sky-300 active:text-white'>
        Register
      </button>
    </div>
  )
}
export default AuthButtons
