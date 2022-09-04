import ServiceCard from './ServiceCard'
import ServicesTitle from './ServicesTitle'
import { services } from '../../utils/data'

function Services() {
  return (
    <section id='services' className='pt-32'>
      <ServicesTitle />
      <div className='mt-9 flex flex-col gap-9 lg:mt-8 lg:flex-row'>
        {services.map((service) => (
          <ServiceCard icon={service.icon} title={service.title} />
        ))}
      </div>
    </section>
  )
}
export default Services
