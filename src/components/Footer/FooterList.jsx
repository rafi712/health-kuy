const FooterList = ({ title, items }) => {
  return (
    <div className='justify-self-center'>
      <h4 className='font-medium text-white'>{title}</h4>
      <div className='mt-4 flex flex-col gap-4'>
        {items.map((item) => (
          <a href='/' className='text-[#6B738E]'>
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}
export default FooterList
