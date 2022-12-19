import { useEffect, useState } from 'react'
import styled from  'styled-components'
import { Button } from './Components'

const Footer = ({colors, fontSizes}) => {
    
    return (
        <FooterParent>
            <FooterContainer>
                <FooterContent>
                    <FooterTitle color={colors.$text}>FantaShop</FooterTitle>
                    <FooterRow>
                        <FooterCol textAlign="left">
                            <FooterSubtitle>pages</FooterSubtitle>
                            <FooterElements>
                                <FooterElement><FooterLink href="/" color={colors.$text} colorHover={colors.$darkOrange}>Home</FooterLink></FooterElement>
                                <FooterElement><FooterLink href="/shop" color={colors.$text} colorHover={colors.$darkOrange}>Shop</FooterLink></FooterElement>
                                <FooterElement><FooterLink href="/items" color={colors.$text} colorHover={colors.$darkOrange}>Items</FooterLink></FooterElement>
                                <FooterElement><FooterLink href="/grades" color={colors.$text} colorHover={colors.$darkOrange}>Grades</FooterLink></FooterElement>
                            </FooterElements>
                        </FooterCol>
                        <FooterCol textAlign="center">
                            <FooterSubtitle>credits</FooterSubtitle>
                            <FooterElements>
                                <FooterElement><FooterLink target="_blank" href="https://twitter.com/baptistedph" color={colors.$text} colorHover={colors.$darkOrange}>Baptiste</FooterLink></FooterElement>
                                <FooterElement><FooterLink target="_blank" href="https://twitter.com/SaipatateYT" color={colors.$text} colorHover={colors.$darkOrange}>Saipatate</FooterLink></FooterElement>
                                <FooterElement><FooterLink target="_blank" href="https://twitter.com/Zeldown" color={colors.$text} colorHover={colors.$darkOrange}>Zeldown</FooterLink></FooterElement>
                            </FooterElements>
                        </FooterCol>
                        <FooterCol textAlign="right">
                            <FooterSubtitle>reseaux</FooterSubtitle>
                            <FooterElements>
                                <FooterElement><FooterLink target="_blank" href="https://discord.gg/Ay4yNknzrb" color={colors.$text} colorHover={colors.$darkOrange}>Discord</FooterLink></FooterElement>
                                <FooterElement><FooterLink target="_blank" href="https://www.instagram.com/fantashop_v4/" color={colors.$text} colorHover={colors.$darkOrange}>Instagram</FooterLink></FooterElement>
                                <FooterElement><FooterLink target="_blank" href="https://twitter.com/FantashopP" color={colors.$text} colorHover={colors.$darkOrange}>Twitter</FooterLink></FooterElement>
                            </FooterElements>
                        </FooterCol>
                    </FooterRow>
                </FooterContent>
            </FooterContainer>
            <Dots src={`${process.env.PUBLIC_URL}/images/dots.png`} />
            <Triangles src={`${process.env.PUBLIC_URL}/images/triangles.png`} />
        </FooterParent>
    )

}

const FooterParent = styled.footer`{
    position: relative;
    padding: 70px;
}`

const FooterContainer = styled.div`{
    display: flex;
    justify-content: center;
}`

const FooterContent = styled.div`{
    
}`

const FooterTitle = styled.h1`{
    padding: 0 150px;
    color: ${props => props.color};
    margin-bottom: 50px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 150px;
        bottom: -1px;
        background: linear-gradient(to left,#C548FF,#7848FF);
        height: 2px;
        box-sizing: border-box;
        width: 65px;
    }

    @media (max-width: 900px){
        display: block;
        width: fit-content;
        margin: 0 auto;
    }
}`

const FooterRow = styled.div`{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 900px){
        flex-direction: row;
        justify-content: center;
        margin-top: 40px;
    }
}`

const FooterCol = styled.div`{
    padding: 0 150px;
    text-align: ${props => props.textAlign};
}`

const FooterSubtitle = styled.h4`{
    font-size: 18px;
    color: #C3BDBE;
    text-transform: uppercase;
    margin-bottom: 35px;
    font-weight: bold;
    position: relative;
}`

const FooterElements = styled.ul`{
    list-style: none;

    @media (max-width: 900px){
        margin: 25px 0;
        text-align: center;
    }
}`

const FooterElement = styled.li`{
    margin-bottom: 10px;
}`

const FooterLink = styled.a`{
    font-size: 16px;
    text-transform: capitalize;
    color: ${props => props.color};
    text-decoration: none;
    font-weight: bold;
    transition: color .4s;

    &:hover {
        color: ${props => props.colorHover}
    }
}`

const Dots = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 15%;
`

const Triangles = styled.img`
  position: absolute;
  right: 30px;
  bottom: 0;
  width: 10%;
`


export default Footer