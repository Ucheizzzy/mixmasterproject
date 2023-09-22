import { Link, Outlet, useNavigation } from 'react-router-dom'
import About from './About'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  //there is loading and idle properties here
  // console.log(navigation)
  const isPageLoading = navigation.state === 'loading'
  //we can pass data to all the children using contect prop in the outlet and use useOutletContext to get it
  const value = 'some value here'
  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  )
}
export default HomeLayout
