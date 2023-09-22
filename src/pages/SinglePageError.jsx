import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {
  const error = useRouteError()
  // error catching
  // console.log(error.message)
  return <div>There was an Error</div>
}
export default SinglePageError
