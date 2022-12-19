import styled from 'styled-components'
import { Paragraph, Inliner } from './Components'
import { useRef } from 'react'

const Filter = ({
  colors,
  maxItemPrice,
  setCurrentMaxPrice,
  currentMaxPrice,
  handleSearch,
  isMobile
}) => {
  const range = useRef()

  const handleRange = () => {
    setCurrentMaxPrice(range.current.value)
    handleSearch()
  }

  return (
    <Box color={colors.$darkPurple} isMobile={isMobile}>
      <Paragraph
        color="white"
        fontWeight="500"
        style={{
          marginBottom: '10px',
          background: colors.$darkPurple,
          padding: '5px 10px',
          borderRadius: '5px',
        }}>
        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(currentMaxPrice)}
      </Paragraph>
      <Inliner style={{ justifyContent: 'space-between', width: '90%' }}>
        <Paragraph color={colors.$text}>0$</Paragraph>
        <Paragraph color={colors.$text}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(maxItemPrice)}</Paragraph>
      </Inliner>
      <Range
        rangeColor={colors.$text}
        thumbColor={colors.$darkPurple}
        type="range"
        step="10"
        min="0"
        max={maxItemPrice}
        value={currentMaxPrice}
        ref={range}
        onChange={handleRange}
      />
    </Box>
  )
}

const Box = styled.div`
  width: 300px;
  height: 150px;
  position: absolute;
  right: ${props => props.isMobile ? '0' : '-40px'};
  left: ${props => props.isMobile && '-300px'};
  margin: ${props => props.isMobile && '0 auto'};
  top: 100%;
  transform: translateX(50%);
  margin-top: 20px;
  border: solid 1px ${props => (props.color ? props.color : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Range = styled.input`
  appearance: none;
  width: 80%;
  height: 3px;
  margin-top: 5px;
  outline: none;
  border-radius: 30px;
  background: ${props => (props.rangeColor ? props.rangeColor : 'white')};

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${props => (props.thumbColor ? props.thumbColor : 'white')};
    border: solid 3px
      ${props => (props.rangeColor ? props.rangeColor : 'white')};
    border-radius: 50%;
    cursor: pointer;
  }
`

export default Filter
