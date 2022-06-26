import Link from 'next/link'
import FormContact from '../components/Contact/FormContact'
import HeaderContact from '../components/Contact/HeaderContact'
import MiddleContact from '../components/Contact/MiddleContact'

const Contact = () => {
  return (
    <div>
      <HeaderContact/>
      <MiddleContact/>
      <FormContact/>
    </div>
  )
}

export default Contact