import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard'

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: 'center' }}>
      No matching cocktails
    </h4>
  }

  const formattedDrink = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
    return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass }
  })

  return (
    <Wrapper>
      {formattedDrink.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

export default CocktailList