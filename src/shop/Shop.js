import {
  Container,
  Title,
  Subtitle,
  Button,
  Inliner,
} from '../components/Components'

const Shop = ({ colors, fontSizes, accessToken, isMobile }) => {
  return (
    <Container center="vertically" isMobile={isMobile}>
      <div>
        <Title
          underlineColors={[colors.$lightPurple, colors.$darkPurple]}
          fontSize={fontSizes.$bigText}
          fontWeight="700"
          color={colors.$text}>
          Boutique
        </Title>
        <Subtitle
          fontSize={fontSizes.$smallText}
          fontWeight="500"
          style={{ marginTop: '30px' }}>
          Choisissez votre catégorie
        </Subtitle>
          {(() => {
            if(accessToken) {
              return (
                <Inliner gap="20px" style={{ marginTop: '50px', flexWrap: isMobile && 'wrap', justifyContent: isMobile && 'center' }}>
                    <Button
                  href="/items"
                  backgroundColors={[colors.$lightPurple, colors.$darkPurple]}>
                  Items
                </Button>
                <Button href="/grades" color={colors.$text}>
                  Grades
                </Button>
                 </Inliner>
              )
            }else {
              return (
                <Inliner gap="20px" style={{ marginTop: '50px', justifyContent: isMobile && 'center' }}>
                  <Button
                    href={ process.env.REACT_APP_API_URL + "login" }
                    backgroundColors={[colors.$lightPurple, colors.$darkPurple]}>
                    Se connecter
                  </Button>
                </Inliner>
              )
            }
          })()}
      </div>
    </Container>
  )
}

export default Shop
