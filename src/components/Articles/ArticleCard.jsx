const ArticleCard = ({
  title,
  articleImage,
  category,
  doctorName,
  doctorImage,
  readTime,
}) => {
  return (
    <figure className='rounded-3xl bg-white'>
      <img src={articleImage} alt='article' />
      <figcaption className='mt-4 px-4 pb-4'>
        <div className='flex items-center'>
          <p className='mr-[2px] text-sm font-medium text-[#0C64DC]'>
            {category}
          </p>
          <p className='text-sm font-medium text-[#8A8A8A]'>
            • {readTime} min read
          </p>
        </div>
        <p className='mt-1.5 text-base font-semibold capitalize'>{title}</p>
        <div className='mt-2 flex gap-2'>
          <img
            src={doctorImage}
            className='rounded-full'
            alt='doctor'
            width={24}
            height={24}
          />
          <p className='text-lg text-[#8A8A8A]'>{doctorName}</p>
        </div>
        <button className='mt-7 h-12 w-full rounded-xl bg-sky-100 font-medium text-[#2C95DB]'>
          Read Now
        </button>
      </figcaption>
    </figure>
  )
}
export default ArticleCard
