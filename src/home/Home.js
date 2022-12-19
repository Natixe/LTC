import First from './First'
import News from './News'
import Recruitment from './Recruitment'

const Home = ({ colors, fontSizes, externalLinks, isMobile }) => {
  return (
    <>
      <First
        colors={colors}
        fontSizes={fontSizes}
        externalLinks={externalLinks}
        isMobile={isMobile}
      />
      <News colors={colors} fontSizes={fontSizes} />
      <Recruitment colors={colors} fontSizes={fontSizes} isMobile={isMobile} />
    </>
  )
}

export default Home
