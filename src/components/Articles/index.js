import ArticleCard from './ArticleCard'
import ArticlesSectionTitle from './ArticlesSectionTitle'
import { articles } from '../../utils/data'

const Articles = () => {
  return (
    <section id='articles' className='mt-32'>
      <ArticlesSectionTitle />
      <div className='mt-8 flex gap-9'>
        {articles.map((article) => (
          <ArticleCard
            title={article.title}
            category={article.category}
            articleImage={article.image}
            readTime={article.readTime}
            doctorName={article.doctor.name}
            doctorImage={article.doctor.image}
          />
        ))}
      </div>
    </section>
  )
}
export default Articles
