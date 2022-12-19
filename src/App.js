import Navbar from './partials/Navbar'
import Home from './home/Home'
import Shop from './shop/Shop'
import Items from './items/Items'
import Grades from './grades/Grades'
import Login from './login/Login'
import SuccessfulOrder from './order/SuccessfulOrder'
import PageNotFound from './404/PageNotFound'
import Maintenance from './maintenance/Maintenance'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SwitchTheme from './components/SwitchTheme'
import useLocalStorage from './hooks/useLocalStorage'
import Footer from './components/Footer'
import Profile from './profile/Profile'
import NotificationsWidget from './components/NotificationsWidget'

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')
  const [access_token, setAccessToken] = useLocalStorage('access_token', undefined)
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768 ? true : false
  )
  const isMaintenance = false

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) setIsMobile(true)
    else setIsMobile(false)
  })

  const token = useState(
    new URLSearchParams(window.location.search).get('data') !== undefined ? atob(new URLSearchParams(window.location.search).get('data')) : undefined
  )


  const colors = {
    $text: theme === 'dark' ? '#ffffff' : '#04090E',
    $background: theme === 'dark' ? '#04090E' : '#ffffff',
    $lightPurple: '#C548FF',
    $darkPurple: '#7848FF',
    $darkOrange: '#FF7070',
    $green: '#54d98c',
    $blue: '#3498db'
  }

  const fontSizes = {
    $bigText: isMobile ? '50px' : '80px',
    $smallText: isMobile ? '1em' : '1.5em',
  }

  const externalLinks = {
    discord: 'https://discord.gg/Ay4yNknzrb',
    instagram: 'https://www.instagram.com/fantashop_v4/',
    twitter: 'https://twitter.com/FantashopP',
  }

  useEffect(() => {
    document.body.style.background = colors.$background
  }, [colors.$background])

  return (
    <>
      <SwitchTheme colors={colors} setTheme={setTheme} theme={theme} />
      <Navbar colors={colors} externalLinks={externalLinks} accessToken={access_token} />
      <Router base={process.env.PUBLIC_URL}>
        <Switch>
          {isMaintenance && (
            <Route>
              <Maintenance
                colors={colors}
                fontSizes={fontSizes}
                externalLinks={externalLinks}
              />
            </Route>
          )}
          <Route path="/" exact>
            <Home
              colors={colors}
              fontSizes={fontSizes}
              externalLinks={externalLinks}
              isMobile={isMobile}
            />
          </Route>
          <Route path="/shop" exact>
            <Shop colors={colors} fontSizes={fontSizes} accessToken={access_token} isMobile={isMobile} />
          </Route>
          <Route path="/items" exact>
            <Items colors={colors} fontSizes={fontSizes} accessToken={access_token} isMobile={isMobile} />
          </Route>
          <Route path="/grades" exact>
            <Grades colors={colors} fontSizes={fontSizes} accessToken={access_token} isMobile={isMobile} />
          </Route>
          <Route path="/success" exact>
            <SuccessfulOrder colors={colors} fontSizes={fontSizes} isMobile={isMobile} />
          </Route>
          <Route path="/login" exact>
            <Login colors={colors} fontSizes={fontSizes} setAccessToken={setAccessToken} token={token} isMobile={isMobile}/>
          </Route>
          <Route path="/profile" exact>
            <Profile colors={colors} fontSizes={fontSizes} accessToken={access_token} isMobile={isMobile} />
          </Route>
          <Route>
            <PageNotFound colors={colors} fontSizes={fontSizes} isMobile={isMobile} />
          </Route>
        </Switch>
      </Router>
      <NotificationsWidget accessToken={access_token}></NotificationsWidget>
      <Footer colors={colors} fontSizes={fontSizes} />
    </>
  )
}

export default App
