const ArticlesSectionTitle = () => {
  return (
    <div className='flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-0'>
      <div>
        <p className='blue-section-title'>Latest Articles</p>
        <h2 className='black-section-title mt-1 capitalize'>
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
