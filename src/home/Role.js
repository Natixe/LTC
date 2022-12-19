import styled from 'styled-components'

const Role = ({ background, color, skin, skinAlign, name, isMobile, link }) => {
  return (
    <Card>
      {!isMobile && 
        <CardContent background={background} color={color}>
          <Skin src={skin} align={skinAlign} />
        </CardContent>
      }
      <CardName href={link} target="_blank" color={color}>{name}</CardName>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardName = styled.a`
  background: ${({ color }) => (color ? color : 'white')};
  display: inline-block;
  margin-top: 30px;
  color: white;
  font-size: 1.3em;
  font-weight: 600;
  padding: 10px 40px;
  border-radius: 30px;
  cursor: pointer;
`

const CardContent = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  background: ${({ background }) =>
    background ? `url(${background})` : 'white'};
  background-size: cover;
  border-radius: 30px;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: ${({ color }) => color};
    opacity: 0.3;
  }
`

const Skin = styled.img`
  position: absolute;
  height: 90%;
  object-fit: cover;
  z-index: 1;
  bottom: 0;
  ${({ align }) => (align === 'center' ? 'left: -35%' : align === 'left' ? 'left: 0' : 'right: 0')}
`

export default Role
