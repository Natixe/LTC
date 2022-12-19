import {
  Container,
  Title,
  Button,
  Inliner,
  Subtitle,
} from '../components/Components'

const PageNotFound = ({ colors, fontSizes }) => {
  return (
    <Container center="vertically">
      <div>
        <Inliner style={{ alignItems: 'center' }}>
          <Title
            color={colors.$text}
            fontSize={fontSizes.$bigText}
            fontWeight="700">
            404
          </Title>
        </Inliner>
        <Subtitle
          fontSize={fontSizes.$smallText}
          fontWeight="500"
          style={{ marginTop: '10px' }}>
          La page que vous essayez d'atteindre n'existe pas.
        </Subtitle>
        <Inliner gap="20px" style={{ marginTop: '50px' }}>
          <Button
            href="/"
            backgroundColors={[colors.$lightPurple, colors.$darkPurple]}>
            Retourner à l'accueil
          </Button>
        </Inliner>
      </div>
    </Container>
  )
}

export default PageNotFound
