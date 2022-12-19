import {
    Container,
    Title,
    Subtitle,
    Button,
    Inliner,
  } from '../components/Components'
  
  const Login = ({ colors, fontSizes, setAccessToken, token, isMobile }) => {

    window.addEventListener('load', () => {
        setAccessToken(JSON.parse(token[0]).access_token)
    })
   

    return (
      <Container center="vertically" isMobile={isMobile}>
        <div>
          <Title
            underlineColors={[colors.$lightPurple, colors.$darkPurple]}
            fontSize={fontSizes.$bigText}
            fontWeight="700"
            color={colors.$text}>
            Connexion
          </Title>
          <Subtitle
            fontSize={fontSizes.$smallText}
            fontWeight="500"
            style={{ marginTop: '30px' }}>
            Vous êtes désormais connecté
          </Subtitle>
          <Inliner gap="20px" style={{ marginTop: '50px', flexWrap: isMobile && 'wrap', justifyContent: isMobile && 'center' }}>
            <Button
                href="/"
                backgroundColors={[colors.$lightPurple, colors.$darkPurple]}>
                Retourner à l'accueil
            </Button>
                <Button href="/shop" color={colors.$text}>
                  Boutique
                </Button>
          </Inliner>
        </div>
      </Container>
    )
  }
  
export default Login