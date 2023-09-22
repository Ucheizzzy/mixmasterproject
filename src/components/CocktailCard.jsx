import { Link, useOutletContext } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailCard'

const CocktailCard = ({ id, name, image, info, glass }) => {
  // const data = useOutletContext()
  // console.log(data)
  return (
    <Wrapper>
      <Link to={`/cocktail/${id}`}>
        <div className='img-container'>
          <img src={image} alt={name} className='img' />
        </div>

        <footer className='footer'>
          <h4>{name}</h4>
          <h5>{glass}</h5>
          <p>{info}</p>

          <Link to={`/cocktail/${id}`} className='btn'>
            Details
          </Link>
        </footer>
      </Link>
    </Wrapper>
  )
}
export default CocktailCard
