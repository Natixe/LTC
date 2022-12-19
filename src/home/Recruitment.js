import { Container, Title, Subtitle } from '../components/Components'
import Role from './Role'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Recruitment = ({ colors, fontSizes, isMobile }) => {
  const [roles, setRoles] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + `shop/recruitments`)
      .then(res => res.json())
      .then(roles => {
        setRoles(roles)
      })
  }, [])

  return (
    <Container
      direction="column"
      center="horizontally"
      id="recruitment"
      style={{ overflowX: 'hidden' }}>
      <Title
        fontSize={fontSizes.$bigText}
        fontWeight="700"
        color={colors.$text}
        underlineColors={[colors.$lightPurple, colors.$darkPurple]}>
          Recrutement
      </Title>
      <Subtitle
        fontSize={fontSizes.$smallText}
        fontWeight="500"
        style={{ marginTop: '30px' }}>
        L'âge requis pour être recruté est de 15 ans
      </Subtitle>
      <Roles isMobile={isMobile}>
        {roles.map(role => {
          return (
            <Role
              key={role.name}
              link={role.link}
              background={`${process.env.PUBLIC_URL}${role.background}`}
              color={colors[role.color]}
              skin={`${process.env.PUBLIC_URL}${role.skin}`}
              skinAlign={role.skinAlign}
              name={role.name}
              isMobile={isMobile}
            />
          )
        })}
      </Roles>
    </Container>
  )
}

const Roles = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
  flex-wrap: wrap;
  grid-gap: ${props => props.isMobile ? '10px' : '120px'};
`

export default Recruitment
