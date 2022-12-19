import {
  Container,
  Title,
  Button,
  Inliner,
  Subtitle,
} from '../components/Components'
import styled from 'styled-components'

const SuccessfulOrder = ({ colors, fontSizes, isMobile }) => {
  return (
    <Container center="vertically" isMobile={isMobile}>
      <div>
        <Inliner style={{ alignItems: 'center' }}>
          <Icon
            src={`${process.env.PUBLIC_URL}/images/success.svg`}
            alt="successful order"
          />
          <Title
            color={colors.$text}
            fontSize={fontSizes.$bigText}
            fontWeight="700"
            style={{ marginLeft: '20px' }}>
            Merci,
          </Title>
        </Inliner>
        <Subtitle
          fontSize={fontSizes.$smallText}
          fontWeight="500"
          style={{ marginTop: '10px' }}>
          Votre commande a bien été prise en compte. Le suivis se passera sur discord.
        </Subtitle>
        <Subtitle
          fontSize={fontSizes.$smallText}
          fontWeight="500"
          style={{ marginTop: '10px' }}>
        </Subtitle>
        <Inliner gap="20px" style={{ marginTop: '50px' }}>
          <Button
            href="/"
            backgroundColors={[colors.$lightPurple, colors.$darkPurple]}>
            Retourner à l'accueil
          </Button>
          <Button
            href="/shop"
            color={colors.$text}>
            Retourner à la boutique
          </Button>
        </Inliner>
      </div>
    </Container>
  )
}

const Icon = styled.img`
  width: 70px;
  height: 70px;
`

export default SuccessfulOrder
