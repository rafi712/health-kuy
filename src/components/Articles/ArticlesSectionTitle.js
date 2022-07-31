const ArticlesSectionTitle = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <p className='font-medium text-[18px] text-[#0C64DC]'>
          Latest Articles
        </p>
        <h2 className='font-semibold text-[32px] capitalize mt-1'>
          useful article for you to read
        </h2>
      </div>
      <button className='border py-3 px-8 rounded-xl border-[#0C64DC] text-[#0C64DC] font-medium'>
        See More Article
      </button>
    </div>
  )
}
export default ArticlesSectionTitle
