const AuthButtons = () => {
  return (
    <div className='flex'>
      <button className='w-[130px] font-medium py-3 px-8'>Sign In</button>
      <button className='w-[130px] bg-sky-100 focus:ring-2 focus:ring-inset py-3 px-8 hover:bg-sky-200 hover:text-sky-700 text-sky-600 active:bg-sky-300 active:text-white rounded-xl font-medium'>
        Register
      </button>
    </div>
  )
}
export default AuthButtons
