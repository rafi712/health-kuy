import ServiceCard from './ServiceCard'
import ServicesTitle from './ServicesTitle'
import GreenIcon from '../../assets/icons/service-green.svg'
import RedIcon from '../../assets/icons/service-red.svg'
import OrangeIcon from '../../assets/icons/service-orange.svg'
import BlueIcon from '../../assets/icons/service-blue.svg'

function Services() {
  const services = [
    { icon: RedIcon, title: 'Get Free Consultation' },
    { icon: GreenIcon, title: 'Medicinal Herb' },
    { icon: OrangeIcon, title: 'Make an Appointment' },
    { icon: BlueIcon, title: 'Find Trusted Doctor' },
  ]

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
