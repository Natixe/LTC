import {
  Container,
  Title,
  Subtitle,
  Inliner,
  Grid,
} from '../components/Components'
import styled from 'styled-components'
import Item from '../components/Item'
import Popup from '../components/Popup'
import { useState, useEffect, useRef } from 'react'

const Grades = ({ colors, fontSizes, accessToken, isMobile }) => {
  const [items, setItems] = useState([])
  const [user, setUser] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [isBlured, setIsBlured] = useState(false)
  const [activeItem, setActiveItem] = useState()
  const [maxItemPrice, setMaxItemPrice] = useState(0)

  const filter = useRef()
  const blur = 10

  const handleSearch = () => {
    if(!isBlured) {
      setFilteredItems(
        items.filter(
          item =>
            item.aliases
              .toLowerCase()
              .includes(filter.current.value.toLowerCase()) ||
            item.title.toLowerCase().includes(filter.current.value.toLowerCase())
        )
      )
    }
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + `shop/ranks`)
      .then(res => res.json())
      .then(items => {
        setItems(items)
        setFilteredItems(items)
      })

      

    fetch(process.env.REACT_APP_API_URL + `user/getuser/` + accessToken)
    .then(res => res.json())
    .then(user => {
      setUser(user)
    })
  }, [])

  const focusPage = (e) => {
    if(e.target.tagName.toLowerCase() !== 'button') {
      setIsBlured(false)
    }
  }

  
  window.addEventListener('load', () => {
    if(!accessToken) {
      window.location = "/shop"
    }
  })

  window.addEventListener('keydown', function(event){
    if(event == null || event.key == null || event == undefined || event.key == undefined) {
      return
    }
    
		if(event.key.toLowerCase() == 'escape') {
      setIsBlured(false)
    }
  })

  return (
    <>
      {isBlured && (
        <Popup
          activeItem={activeItem}
          setIsBlured={setIsBlured}
          colors={colors}
          quantity="false"
          type="ranks"
          user={user}
        />
      )}

      <Container
        center="vertically"
        style={{
          filter: isBlured && `blur(${blur}px)`,
          opacity: isBlured ? 0.3 : 1,
          transition: 'filter 0.4s',
        }} onClick={focusPage} isMobile={isMobile}>
        <div>
          <Title
            underlineColors={[colors.$lightPurple, colors.$darkPurple]}
            fontSize={fontSizes.$bigText}
            fontWeight="700"
            color={colors.$text}>
            Grades
          </Title>
          <Subtitle
            fontSize={fontSizes.$smallText}
            fontWeight="500"
            style={{ marginTop: '30px' }}>
            Acheter des grades pour le market
          </Subtitle>
          <Inliner gap="20px" style={{ marginTop: '50px', flexWrap: isMobile && 'wrap', justifyContent: isMobile && 'center' }} wrap="true">
            <Search color={colors.$darkPurple} textColor={colors.$text}>
              <input
                ref={filter}
                type="text"
                placeholder="Rechercher un grade"
                onInput={handleSearch}
              />
            </Search>
          </Inliner>
        </div>
      </Container>
      <Grid
        columns="4"
        gap="40px"
        style={{
          filter: isBlured && `blur(${blur}px)`,
          opacity: isBlured ? 0.3 : 1,
          transition: 'filter 0.4s',
        }} onClick={focusPage}>
        {filteredItems.length === 0 && (
          <Subtitle fontSize={fontSizes.$smallText} fontWeight="500">
            Désolé, rien n'a été trouvé
          </Subtitle>
        )}
        {filteredItems.map(item => {
          parseFloat(item.price) * 1000 > maxItemPrice &&
            setMaxItemPrice(parseFloat(item.price) * 1000)
          return (
            <Item
              key={item.title + Math.random()}
              id={item.id}
              title={item.title}
              picture={`${process.env.PUBLIC_URL}${item.picture}`}
              price={item.price}
              setIsBlured={setIsBlured}
              colors={colors}
              enchantments={item.enchantments}
              maxQuantity={item.maxQuantity}
              setActiveItem={setActiveItem}
              page="grades"
            />
          )
        })}
      </Grid>
    </>
  )
}

const Search = styled.div`
  min-width: 250px;
  width: 80%;
  & input {
    border: solid 1px ${props => (props.color ? props.color : 'white')};
    color: ${props => (props.textColor ? props.textColor : 'white')};
    background: transparent;
    width: 100%;
    padding: 11px 15px;
    outline: none;
    border-radius: 10px;
    transition: color 0.4s;
  }
`

export default Grades
