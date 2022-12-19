import { Container, Title } from '../components/Components'
import Info from './Info'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const News = ({ colors, fontSizes }) => {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + `shop/news`)
      .then(res => res.json())
      .then(news => {
        setNews(news)
      })
  }, [])

  return (
    <Container
      direction="column"
      center="horizontally"
      id="news"
      style={{ overflowX: 'hidden' }}>
      <Title
        fontSize={fontSizes.$bigText}
        fontWeight="700"
        color={colors.$text}
        underlineColors={[colors.$lightPurple, colors.$darkPurple]}>
          Nouveautés
      </Title>
      <Cards>
        {news.map(info => {
          return (
            <Info
              key={info.title + Math.random()}
              title={info.title}
              text={info.text}
              background={`${process.env.PUBLIC_URL}${info.background}`}
              color={colors[info.color]}
            />
          )
        })}
      </Cards>
    </Container>
  )
}

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  grid-gap: 100px;
  flex-wrap: wrap;
`

const Skin = styled.img`
  width: 40%;
  position: absolute;
  bottom: 0;
  right: -20%;
`

export default News
