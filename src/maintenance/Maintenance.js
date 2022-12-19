import {
  Container,
  Title,
  Button,
  Inliner,
  Subtitle,
} from '../components/Components'

const PageNotFound = ({ colors, fontSizes, externalLinks }) => {
  return (
    <Container center="vertically">
      <div>
        <Inliner style={{ alignItems: 'center' }}>
          <Title
            color={colors.$text}
            fontSize={fontSizes.$bigText}
            fontWeight="700">
            :/
          </Title>
        </Inliner>
        <Subtitle
          fontSize={fontSizes.$smallText}
          fontWeight="500"
          style={{ marginTop: '10px' }}>
          Nous sommes en maintenance, veuillez revenir plus tard.
        </Subtitle>
        <Subtitle fontWeight="500" style={{ marginTop: '50px' }}>
          Si vous souhaitez en savoir plus, rejoignez nos réseaux sociaux :
        </Subtitle>
        <Inliner gap="20px" style={{ marginTop: '20px' }} wrap="true">
          <Button
            color="#5865f2"
            href={externalLinks.discord}
            target="_blank"
            style={{ borderColor: '#5865f2' }}>
            Discord
          </Button>
          <Button
            color="#f00094"
            href={externalLinks.instagram}
            target="_blank"
            style={{ borderColor: '#f00094' }}>
            Instagram
          </Button>
          <Button
            color="#1ea1f1"
            href={externalLinks.twitter}
            target="_blank"
            style={{
              borderColor: '#1ea1f1',
            }}>
            Twitter
          </Button>
        </Inliner>
      </div>
    </Container>
  )
}

export default PageNotFound
