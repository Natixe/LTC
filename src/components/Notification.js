import styled from 'styled-components'

const Notification = ({
  type,
  title,
  date
}) => {

    const dt = new Date(date)

    const dateStr =
  ("00" + (dt.getMonth() + 1)).slice(-2) + "/" +
  ("00" + dt.getDate()).slice(-2) + "/" +
  dt.getFullYear() + " " +
  ("00" + dt.getHours()).slice(-2) + ":" +
  ("00" + dt.getMinutes()).slice(-2) + ":" +
  ("00" + dt.getSeconds()).slice(-2);

  return (
    <NotificationContent>
        <NotificationImage src={"/images/notifications/" + type + ".svg"}></NotificationImage>
        <NotificationTitle>{title}</NotificationTitle>
        <NotificationDate>{dateStr}</NotificationDate>
    </NotificationContent>
  )
}

const NotificationContent = styled.div`{
    position: relative;
    background: white;
    border-radius: 999px;
    display: flex;
    align-items: center;
    padding: 10px 5px;
    width: 400px;
}`

const NotificationImage = styled.img`{
    position: relalive;
    width: 50px;
    margin-right: 5px;
}`

const NotificationTitle = styled.p`{
    position: relalive;
    font-size: 18px;
    font-weight: 600;
}`


const NotificationDate = styled.span`{
    position: absolute;
    bottom: 3.5px;
    right: 30px;
    text-align: right;
    color: grey;
    font-size: 10px;
}`

export default Notification
