import { Title, Paragraph } from '../components/Components'
import styled from 'styled-components'

const Info = ({ title, text, background, color }) => {
  return (
    <Card background={background}>
      <CardHeader background={`${color}aa`}>
        <Title fontSize="40px" fontWeight="600">
          {title}
        </Title>
      </CardHeader>
      <CardContent>
        <Paragraph>{text}</Paragraph>
      </CardContent>
    </Card>
  )
}

const Card = styled.div`
  background: ${props => props.background && `url(${props.background})`};
  width: 350px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
`

const CardHeader = styled.header`
  background: ${props => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`

const CardContent = styled.div`
  padding: 30px;
  height: 100%;
  background: #00000088;
`

export default Info
