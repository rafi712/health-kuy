const ReasonTile = ({ icon, title }) => {
  return (
    <div className='mb-6 flex items-start gap-5 rounded-xl bg-white py-6 px-8'>
      <img src={icon} alt='' width={52} height={52} />
      <div>
        <h4 className='font-semibold capitalize'>{title}</h4>
        <p className='mt-1 text-[#8A8A8A]'>
          Lorem Ipsum is simply dummy text <br /> of the printing typesetting
          industry.
        </p>
      </div>
    </div>
  )
}
export default ReasonTile
