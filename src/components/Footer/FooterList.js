const FooterList = ({ title, items }) => {
  return (
    <div className='justify-self-center'>
      <h4 className='font-medium text-white'>{title}</h4>
      <div className='flex flex-col gap-4 mt-4'>
        {items.map((item) => (
          <p className='text-[#6B738E]'>{item}</p>
        ))}
      </div>
    </div>
  )
}
export default FooterList
