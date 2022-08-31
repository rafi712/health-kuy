const ArticlesSectionTitle = () => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-[18px] font-medium text-[#0C64DC]'>
          Latest Articles
        </p>
        <h2 className='mt-1 text-[32px] font-semibold capitalize'>
          useful article for you to read
        </h2>
      </div>
      <button className='rounded-xl border border-[#0C64DC] py-3 px-8 font-medium text-[#0C64DC]'>
        See More Article
      </button>
    </div>
  )
}
export default ArticlesSectionTitle
