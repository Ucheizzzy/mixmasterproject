import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'
import { Link, Navigate, useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`)
      return data
    },
  }
}
export const loader =
  (queryClient) =>
  async ({ params }) => {
    // console.log(params)
    const { id } = params
    // const { data } = await axios.get(`${singleCocktailUrl}${id}`)
    // console.log(data)
    await queryClient.ensureQueryData(singleCocktailQuery(id))
    return { id }
  }

const Cocktail = () => {
  const { id } = useLoaderData()
  const { data } = useQuery(singleCocktailQuery(id))

  // {
  //   !data ? <Navigate to='/' /> : ''
  // }
  if (!data) return <Navigate to='/' />
  const singleDrink = data.drinks[0]
  // destructure and change the name
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink
  //get valid ingredients that don't have null
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key])
  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          Back to home
        </Link>
        <h2>{name}</h2>
      </header>

      <div className='drink'>
        <img src={image} className='img' alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name:</span> {name}
          </p>
          <p>
            <span className='drink-data'>Category:</span> {category}
          </p>
          <p>
            <span className='drink-data'>Info:</span> {info}
          </p>
          <p>
            <span className='drink-data'>Glass:</span> {glass}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className='ing' key={item}>
                  {item} {index < validIngredients.length - 1 ? ',' : ''}
                </span>
              )
            })}
          </p>
          <p>
            <span className='drink-data'>Instructions:</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Cocktail
