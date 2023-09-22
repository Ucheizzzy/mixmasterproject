import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'
export const action = async ({ request }) => {
  const formData = await request.formData()
  if (formData.get('name') === '' || formData.get('lastName') === '') {
    toast.error('Please fill in the fields')
  }

  console.log(formData.get('name'))
  const objectData = Object.fromEntries(formData)
  try {
    const { data } = await axios.post(newsletterUrl, objectData)
    // console.log(data)
    toast.success(data.msg)
    return redirect('/')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form className='form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input type='text' className='form-input' name='name' id='name' />
      </div>
      {/* last name */}
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input
          type='text'
          className='form-input'
          name='lastName'
          id='lastName'
        />
      </div>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='email'
          className='form-input'
          name='email'
          id='email'
          required
          defaultValue='test@test.com'
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
      >
        {isSubmitting ? 'submitting..' : 'submit'}
      </button>
    </Form>
  )
}
export default Newsletter
