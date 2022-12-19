import styled, { keyframes } from 'styled-components'
import { useInView } from 'react-intersection-observer'

/**
 * Components
 *
 * - Title
 * - Subtitle
 * - Paragraph
 * - Button
 * - Button2
 * - Container
 * - Inliner
 * - Grid
 */

 const Title = ({
   color,
   fontSize,
   fontWeight,
   underlineColors,
   children,
 }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  return (
    <TitleElement underlineWidth={inView ? '100%' : '0'} ref={ref} color={color} fontSize={fontSize} fontWeight={fontWeight} underlineColors={underlineColors}>{children}</TitleElement>
  )
}

const fadeInAnimate = keyframes`
  from {
    opacity: 0;
    margin-top: 20px;
  }

  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const FadeIn = styled.div`
  animation: ${fadeInAnimate} 0.4s ease-in-out forwards;
`

const TitleElement = styled.h2`
  color: ${props => (props.color ? props.color : 'white')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1em')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  display: inline-block;
  position: relative;
  z-index: 1;
  transition: color 0.4s;
  ${props =>
    props.underlineColors &&
    `
    &::after {
      content: '';
      position: absolute;
      width: ${props.underlineWidth};
      height: 8px;
      left: 0;
      bottom: 4px;
      z-index: -1;
      background: linear-gradient(to left, ${props.underlineColors[0]}, ${props.underlineColors[1]});
      transition: width 0.4s;
  `};
`

const Subtitle = styled.h3`
  color: ${props => (props.color ? props.color : 'gray')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1em')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
`

const Paragraph = styled.p`
  color: ${props => (props.color ? props.color : 'white')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1em')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  line-height: 1.4em;
`

const Button = styled.a`
  border: ${props => !props.backgroundColors && `solid 1px ${props.color}`};
  color: ${props => (props.color ? props.color : 'white')};
  border-radius: ${props => (props.fill ? '0 10px' : '10px 0')};
  background: ${props =>
    props.backgroundColors &&
    `linear-gradient(to left, ${props.backgroundColors[0]}, ${props.backgroundColors[1]})`};
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 500;
  padding: 7px 15px;
  transition: border 0.4s, color 0.4s, border-radius 0.4s, background 0.4s;

  &:hover {
    background: ${props =>
      !props.fill && props.hoverColor ? props.hoverColor : props.color};
    color: ${props =>
      !props.fill && props.color !== '#ffffff' ? 'white' : 'black'};
    border-radius: ${props => (props.fill ? '10px 0' : '0 10px')};
  }
`

const Button2 = styled.button`
  background: ${props => (props.color ? props.color : 'white')};
  background: ${props => (props.background ? props.background : 'white')};
  color: ${props => (props.color ? props.color : 'white')};
  border: ${props => (!props.background ? `solid 1px ${props.color}` : 'none')};
  cursor: pointer;
  padding: 7px 15px;
  font-size: 1.1em;
  font-weight: 500;
  border-radius: 10px;
`

const BuyButton = styled.button`
  position: relative;
  background: ${props => (props.color ? props.color : 'white')};
  background: ${props => (props.background ? props.background : 'white')};
  color: ${props => (props.color ? props.color : 'white')};
  border: ${props => (!props.background ? `solid 1px ${props.color}` : 'none')};
  cursor: pointer;
  padding: 7px 15px;
  font-size: 1.1em;
  font-weight: 500;
  border-radius: 10px;
  transition: all 0.4s;
`

const Container = styled.div`
  min-height: ${props => (props.minHeight ? props.minHeight : '100vh')};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};
  grid-gap: ${props => props.gap};
  flex-direction: ${props => props.direction};
  display: flex;
  align-items: ${props => {
    if (props.center === 'vertically') {
      if (props.direction !== 'column') {
        return 'center'
      }
    }
    if (props.center === 'horizontally') {
      if (props.direction === 'column') {
        return 'center'
      }
    }
  }};
  justify-content: ${props => {
    if (props.center === 'vertically') {
      if (props.direction === 'column') {
        return 'center'
      }
    }
    if (props.center === 'horizontally') {
      if (props.direction !== 'column') {
        return 'center'
      }
    }
  }};
  padding: 100px 5%;
  position: relative;
  width:fit-content;
  margin: 0 ${props => props.isMobile && 'auto'};
  text-align: ${props => props.isMobile && 'center'}
`

const Grid = styled.div`
  grid-template-columns: ${props =>
    `repeat(auto-fill, minmax(calc(${1200 / props.columns}px), 1fr))`};
  grid-gap: ${props => props.gap};
  display: grid;
  padding: 100px 5%;
`

const Inliner = styled.div`
  grid-gap: ${props => props.gap};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};
  display: flex;
  position: relative;
`
export { FadeIn, Button, Button2, BuyButton, Title, Container, Subtitle, Inliner, Paragraph, Grid }
