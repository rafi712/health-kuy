import ServiceCard from './ServiceCard'
import ServicesTitle from './ServicesTitle'
import { services } from '../../utils/data'

function Services() {
  return (
    <section id='services' className='mt-32'>
      <ServicesTitle />
      <div className='flex gap-9 mt-8'>
        {services.map((service) => (
          <ServiceCard icon={service.icon} title={service.title} />
        ))}
      </div>
    </section>
  )
}
export default Services
