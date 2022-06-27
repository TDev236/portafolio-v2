import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import * as Yup from 'yup'
import { useFormik, Form } from 'formik'

const FormContact = () => {
  const [buttonState, setButtonState] = useState('Send Message!');
  const [suceso, setSuceso] = useState(false);
  const [error, setError] = useState(false);

  const formik = useFormik({
      initialValues: {
        from_name : '',
        reply_to: '',
        message: '',
      },
      validationSchema: Yup.object({
        from_name: Yup.string()
          .required('Required'),
        reply_to: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        message: Yup.string()
          .min(10, 'Must be at least 10 characters long')
          .required('El mensaje no puede estar vacio'),
      }),
      onSubmit: (values) => {
          emailjs.sendForm('service_9k0c7xh', 'template_vctotlz', values, 'pIBD5W5s47Rne__j5')
          .then(() => console.log('Mensaje enviado con suceso'))
        }
      
    })
  


  return (
    <div className='flex justify-center mt-4'>
      {suceso && <div className='bg-green-500 text-white font-bold p-2'>Email Enviado</div>}
      {error && <div className='bg-red-500 text-white font-bold p-2'>Error</div>}

      <form >
        <div>
          <p className='formTitle'>Name</p>
          <input  
            id="from_name"
            name="from_name"
            className="formInput" 
            type="text" 
            onChange={formik.handleChange}
            value={formik.values.from_name}
          />
          <div className={` ${formik.touched.from_name && formik.errors.from_name ? 'block' : 'hidden'}`}>
                    {formik.errors.from_name}
          </div>
        </div>
        <div>
          <p className='formTitle'>Email</p>
          <input 
            name="reply_to"
            className="formInput" 
            id="reply_to"
            type="email" 
            onChange={formik.handleChange}
            value={formik.values.reply_to}  
          />
          <div className={`expandable ${formik.touched.reply_to && formik.errors.reply_to ? 'block text-3xl' : 'hidden'}`}>
                    {formik.errors.reply_to}
          </div>
        </div>
        <div className='mt-4'>
          <p className='formTitle'>Message</p>
          <textarea name="message"  className='resize-none shadow-xl border-2 rounded-xl mt-2 p-4 outline-none'  id="message" cols="30" rows="8"></textarea>
        </div> 
        <div className='flex justify-end my-4'> 
          <button onSubmit={formik.handleSubmit} type="submit">Send</button>
        </div>
        
      </form>
    </div>
  )
}

export default FormContact