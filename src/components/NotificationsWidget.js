import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Notification from './Notification'

const NotificationsWidget = ({accessToken}) => {

  const [notifications, setNotifications] = useState(undefined)

  window.addEventListener('load', () => {
    fetch(process.env.REACT_APP_API_URL + `users/getdata/${accessToken}`).then(res => res.json()).then(data => {
      setNotifications(data.notifications)

      if(data.notifications && data.notifications.length > 0) {
        fetch(process.env.REACT_APP_API_URL + `users/removenotification/${accessToken}/${data.notifications[0].id}`, {method: 'POST'}).then(r => r.json()).then(d => {
            
        })
      }
    })
  })

  return (
    <Widget style={notifications && {animationPlayState: 'running'}}>
      {notifications && 
        notifications.length > 0 && 
        <Notification type={notifications[0].type} title={notifications[0].title} date={notifications[0].date}></Notification> 
      }
    </Widget>
  )
}

const WidgetShow = keyframes`
  0% {
    opacity: 0;
    right: -100%;
  }

  30% {
    opacity: 1;
    right: 20px;
  }

  70% {
    opacity: 1;
    right: 20px;
  }

  100% {
    opacity: 0;
    right: -100%;
  }
`;

const WidgetOut = keyframes`
  from {
    opacity: 1;
    right: 20px;
  }

  to {
    opacity: 0;
    right: -100%;
  }
`;

const Widget = styled.div`

  position: fixed;
  opacity: 0;
  bottom: 20px;
  right: -150%;
  z-index: 999;

  animation: ${WidgetShow} 5s ease-in-out forwards paused;

`

export default NotificationsWidget
