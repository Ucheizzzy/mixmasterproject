import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard'

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h4>No matching drinks found</h4>
      </div>
    )
  }

  const formatDrinksData = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })
  return (
    <Wrapper>
      {formatDrinksData.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </Wrapper>
  )
}
export default CocktailList
