import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
    Container,
    Title,
    Subtitle,
    Button,
    Inliner,
} from '../components/Components'
import Notification from '../components/Notification'
  
const Profile = ({ colors, fontSizes, accessToken, isMobile }) => {


  const [user, setUser] = useState(undefined)

  const [orders, setOrders] = useState(undefined)

  const [maxMoney, setMaxMoney] = useState(0)

  const handleLogOut = () => {
    localStorage.setItem('access_token', undefined)
    window.location = "/"
  }

  window.addEventListener('load', () => {
    fetch(process.env.REACT_APP_API_URL + `users/getdata/${accessToken}`)
      .then(res => res.json())
      .then(u => {
        u.notifications = u.notifications.reverse()
        setUser(u)
        fetch(process.env.REACT_APP_API_URL + `orders/getorders/${accessToken}`).then(res => res.json()).then(o => {
          setOrders(o)
          setMaxMoney(0)
          for(let order of o) {
            fetch(process.env.REACT_APP_API_URL + `shop/item/${order.item}`).then(res => res.json()).then(item => {
              setMaxMoney(Number(maxMoney) + Number(item.price))
            })
          }
        })
      })
  })

  return (
    <Container center="vertically" isMobile={isMobile}>
      <div>
        <Inliner gap="95px" style={{ marginTop: '138px' }}>
          <div>
            <Title
              underlineColors={[colors.$lightPurple, colors.$darkPurple]}
              fontSize={fontSizes.$bigText}
              fontWeight="700"
              color={colors.$text}>
              Profil
            </Title>
            <Subtitle
              fontSize={fontSizes.$smallText}
              fontWeight="500"
              style={{ marginTop: '30px' }}>
              Informations à propos de vous
            </Subtitle>
            <Inliner gap="20px" style={{ marginTop: '50px', flexWrap: isMobile && 'wrap', justifyContent: isMobile && 'center' }}>
              <Button
                  href="/"
                  backgroundColors={[colors.$lightPurple, colors.$darkPurple]}>
                  Retourner à l'accueil
              </Button>
            </Inliner>
          </div>
          <div style={{marginTop: '-80px'}}>
            <Row>
              <div style={{display: 'flex'}}>
                <ProfileData>
                <ProfileImage>
                  <Picture src={user && "https://cdn.discordapp.com/avatars/" + user.discord.id + "/" + user.discord.avatar + ".png"}></Picture>
                </ProfileImage>
                <ProfileText color={colors.$text}>
                  <ProfileName>{user && user.discord.username}<ProfileId>#{user && user.discord.discriminator}</ProfileId></ProfileName>
                  <ProfileOnline>Actif depuis 6 mois</ProfileOnline>
                </ProfileText>
                </ProfileData>
                <ProfileBadges>
                  
                </ProfileBadges>
              </div>
              <div>
                <LogoutButton onClick={handleLogOut}><LogoutPicture src="/images/logout.svg"></LogoutPicture>Se déconnecter</LogoutButton>
              </div>
            </Row>
            <Row style={{marginTop: '50px'}}>
              <h3 style={{color: colors.$text, marginLeft: '17px'}}>Notifications</h3>
              <Notifications>
                {user && user.notifications.map((notification, i) => {                  
                  return (
                    <Notification type={notification.type} title={notification.title} date={notification.date}></Notification>
                  ) 
                })}
              </Notifications>
            </Row>
          </div>
          <div style={{marginTop: '-80px'}}>
            <Statistics>
              <StatisticRow>
                <Statistic>
                  <StatisticTitle fromColor="#C548FF" toColor="#7848FF">{user && user.orders.length}</StatisticTitle>
                  <StatisticSubtitle>Commandes</StatisticSubtitle>
                </Statistic>
                <Statistic>
                  <StatisticTitle fromColor="#7848FF" toColor="#FF7070">N/A</StatisticTitle>
                  <StatisticSubtitle>Heures passées sur la plateforme</StatisticSubtitle>
                </Statistic>
              </StatisticRow>
              <StatisticRow>
                <Statistic type="large">
                  <StatisticTitle fromColor="#FF7070" toColor="#C548FF">{maxMoney}$</StatisticTitle>
                  <StatisticSubtitle>D'argent dépensé au total sur le FantaShop</StatisticSubtitle>
                </Statistic>
              </StatisticRow>
              <StatisticRow>
                <Statistic type="large">
                  <StatisticTitle fromColor="#CE4FEA" toColor="#FF7070">Indéfini</StatisticTitle>
                  <StatisticSubtitle>D'argent dépensé chaque jour sur le FantaShop</StatisticSubtitle>
                </Statistic>
              </StatisticRow>
            </Statistics>
          </div>
        </Inliner>
      </div>
    </Container>
  )
}
  
const Row = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
  
const ProfileData = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
  
const ProfileImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 50%;
  width: fit-content;
  margin: 0 15px;
  padding: 2px;
`
  
const Picture = styled.img`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`
  
const ProfileText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${props => props.color}
`
  
const ProfileName = styled.h1`
  color: ${props => props.color};
  font-size: 20px;
`
  
const ProfileId = styled.span`
  color: #FF7070;
`
  
const ProfileOnline = styled.span`
  color: grey;
`
  
const ProfileBadges = styled.div`
  position: relative;
  display: flex;
  margin-left: 15px;
  align-items: center;
`

const Badge = styled.img `
  position: relative;
  width: 35px;
  height: 35px;
  margin: 0 3px;
`

const LogoutButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  background: #ffffff11;
  color: white;
  padding: 6px 10px;
  padding-right: 20px;
  font-size: 20px;
  border-radius: 999px;
  margin-left: 17px;
  margin-top: 30px;
  font-weight: 500;
  cursor: pointer;
`
  
const LogoutPicture = styled.img`
  position: relative;
  width: 50px;
  margin-right: 10px;
`
  
const Notifications = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  margin-left: 17px;
  grid-gap: 10px;
`

const Statistics = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
`

const StatisticRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Statistic = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 180px;
  width: ${props => props.type == "large" ? '400px' : '180px'};
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: -10px;
`

const StatisticTitle = styled.h1`
  position: relative;
  text-align: center;
  font-weight: 600;
  font-size: 70px;
  margin-top: -30px;
  background: -webkit-linear-gradient(left, ${props => props.fromColor}, ${props => props.toColor});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StatisticSubtitle = styled.p`
  position: absolute;
  text-align: center;
  bottom: 10px;
  color: #C3BDBE;
  font-weight: 200;
`

export default Profile