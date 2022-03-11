import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { RiComputerLine} from 'react-icons/ri';

export const FooterContainter = styled.div `
background-color: #101522;
padding: 4rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FooterSubHeading = styled.p `
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
margin-bottom: 24px;
font-size: 24px;
color: #fff;
`
export const FooterSubText = styled.p ` 
margin-bottom: 24px;
font-size: 20px;
color: teal;
`

export const FooterLinksContainer = styled.div`
width: 100%;
max-width: 1000px;
display: flex;
justify-content: center;
@media screen and (max-width: 820px){

}
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div `
display: flex;
flex-direction: column;
align-items:flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing:border-box;
color: #fff;
@media screen and (max-width: 420px){
    margin:0;
    padding:10px;
    width:100%;
}
`

export const FooterLinkTitle = styled.h2 `
margin-bottom: 16px;

`
export const FooterA = styled.a`
color: teal;
text-decoration: none;
margin-bottom: 0.5rem;
&:hover{
    color: #fff;
    transition: 0.2s ease-out;
}
`

export const FooterLink = styled(Link)`
color: teal;
text-decoration: none;
margin-bottom: 0.5rem;
&:hover{
    color: #fff;
    transition: 0.2s ease-out;
}
`
export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`
export const SocialMediaWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:90%;
max-width: 1000px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}

`
export const SocialLogo = styled(Link)`
color:teal;
justify-self: start;
cursor:pointer;
text-decoration: none;
font-size: 2rem;
display:flex;
align-items: center;
margin-bottom:16px;

`
export const SocialIcon = styled(RiComputerLine)`
margin-right: 10px;
`
export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
width: 240px;
`
export const SocialIconLink = styled.a`
color:teal;
font-size:small;

`
export const WebsiteRights = styled.small`
color: teal;
margin-bottom: 16px;
`