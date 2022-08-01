import ReasonIconPeople from '../assets/icons/reason-icon-people.svg'
import ReasonIconFast from '../assets/icons/reason-icon-fast.svg'
import ReasonIconMoney from '../assets/icons/reason-icon-money.svg'

import GreenIcon from '../assets/icons/service-green.svg'
import RedIcon from '../assets/icons/service-red.svg'
import OrangeIcon from '../assets/icons/service-orange.svg'
import BlueIcon from '../assets/icons/service-blue.svg'

import Article1Image from '../assets/images/article1.png'
import Article2Image from '../assets/images/article2.png'
import Article3Image from '../assets/images/article3.png'
import Article4Image from '../assets/images/article4.png'

import Doctor1Image from '../assets/images/doctor1.png'
import Doctor2Image from '../assets/images/doctor2.png'
import Doctor3Image from '../assets/images/doctor3.png'
import Doctor4Image from '../assets/images/doctor4.png'

import Testimonial1Image from '../assets/images/testimonial1.png'
import Testimonial2Image from '../assets/images/testimonial2.png'

const services = [
  { icon: RedIcon, title: 'Get Free Consultation' },
  { icon: GreenIcon, title: 'Medicinal Herb' },
  { icon: OrangeIcon, title: 'Make an Appointment' },
  { icon: BlueIcon, title: 'Find Trusted Doctor' },
]

const doctors = [
  { image: Doctor1Image },
  { image: Doctor2Image },
  { image: Doctor3Image },
  { image: Doctor4Image },
]

const reasons = [
  { icon: ReasonIconPeople, title: 'no need to queue' },
  { icon: ReasonIconFast, title: 'fast and easy process' },
  { icon: ReasonIconMoney, title: 'price is very Affordable' },
]

const articles = [
  {
    title: 'how to reduce dizziness in the back of the head',
    category: 'Healthy Living',
    image: Article1Image,
    readTime: 2,
    doctor: { name: 'Dr. Bambang', image: Doctor1Image },
  },
  {
    title: 'how to take good care of your scalp hair & strengthen',
    category: 'Healthy Living',
    image: Article2Image,
    readTime: 3,
    doctor: { name: 'Dr. Annie', image: Doctor2Image },
  },
  {
    title: "how to keep your baby's womb healthy",
    category: 'Healthy Living',
    image: Article3Image,
    readTime: 6,
    doctor: { name: 'Dr. Annie', image: Doctor2Image },
  },
  {
    title: 'how to refresh and brighten your face for 7 days',
    category: 'Healthy Living',
    image: Article4Image,
    readTime: 2,
    doctor: { name: 'Dr. Sage Skye', image: Doctor3Image },
  },
]

const specialistAmount = [
  { amount: '320+', type: 'Pediatrician' },
  { amount: '210+', type: 'Obstetricians' },
  { amount: '190+', type: 'Experienced Nurse' },
  { amount: '2.5K+', type: 'Trusted Doctors' },
]

const testimonials = [
  { name: 'Reyna Botfrag', image: Testimonial1Image },
  { name: 'Chamber Diff', image: Testimonial2Image },
]

const ourProduct = [
  'Appointment Doctor',
  'Free Consultation',
  'Medicinal Herb',
  'Find Trusted Doctor',
  'Test Covid 19',
  'Booster Vaccine',
]

const usefulLinks = ['Contact Us', 'About Us', 'Articles', 'Pharmacy']

const tipsAndTricks = ['Tiktok', 'Blog', 'Twitter', 'Instagram']

export {
  services,
  reasons,
  articles,
  doctors,
  specialistAmount,
  testimonials,
  ourProduct,
  usefulLinks,
  tipsAndTricks,
}
