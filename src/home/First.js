import {
  Container,
  FadeIn,
  Title,
  Subtitle,
  Button,
  Inliner,
} from '../components/Components'

import styled, {keyframes} from 'styled-components'

const First = ({ colors, fontSizes, externalLinks, isMobile }) => {
  return (
    <Container center="vertically" isMobile={isMobile}>
      <div>
        <Title
          color={colors.$text}
          underlineColors={[colors.$lightPurple, colors.$darkPurple]}
          fontSize={fontSizes.$bigText}
          fontWeight="700">FantaShop
        </Title>
        <FadeIn>
        <Subtitle
          fontSize={fontSizes.$smallText}
          fontWeight="500"
          style={{ marginTop: '30px' }}>
          Le shop le plus innovant de Paladium
        </Subtitle>
        <Inliner gap="20px" style={{ marginTop: '50px' }} wrap="true">
          <Button
            href="/shop"
            backgroundColors={[colors.$lightPurple, colors.$darkPurple]}>
            Boutique
          </Button>
          <Button color={colors.$text} href={externalLinks.discord} target="_blank">
            Nous rejoindre
          </Button>
        </Inliner>
        </FadeIn>
      </div>
      <Picture src="/images/first.png"></Picture>
    </Container>
  )
}

const Picture = styled.img`
  position: relative;
  width: 70%;
`

export default First
