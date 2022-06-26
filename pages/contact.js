import FormContact from '../components/Contact/FormContact'
import Header from '../components/Contact/Header'
import MiddleContact from '../components/Contact/MiddleContact'

const Contact = () => {
  return (
    <div className='relative'>
      <Header/>
      <MiddleContact/>
      <FormContact/>
    </div>
  )
}

export default Contact