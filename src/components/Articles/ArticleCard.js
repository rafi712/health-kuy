const ArticleCard = ({
  title,
  articleImage,
  category,
  doctorName,
  doctorImage,
  readTime,
}) => {
  return (
    <figure className='bg-white rounded-3xl'>
      <img src={articleImage} alt='article' />
      <figcaption className='mt-4 px-4 pb-4'>
        <div className='flex items-center'>
          <p className='text-sm font-medium text-[#0C64DC] mr-[2px]'>
            {category}
          </p>
          <p className='text-sm font-medium text-[#8A8A8A]'>
            • {readTime} min read
          </p>
        </div>
        <p className='capitalize font-semibold text-base mt-1.5'>{title}</p>
        <div className='flex mt-2 gap-2'>
          <img
            src={doctorImage}
            className='rounded-full'
            alt='doctor'
            width={24}
            height={24}
          />
          <p className='text-lg text-[#8A8A8A]'>{doctorName}</p>
        </div>
        <button className='mt-7 rounded-xl bg-sky-100 h-12 w-full text-[#2C95DB] font-medium'>
          Read Now
        </button>
      </figcaption>
    </figure>
  )
}
export default ArticleCard
