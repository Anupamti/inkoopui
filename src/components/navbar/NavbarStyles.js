import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarPage = styled.div`
flex:0.2;
  height:100%;


  @media only screen and (max-width: 1023px) {
    flex:none;
    height:70px;
    width:100%;
}
`;

export const NavContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100%;

      @media only screen and (max-width: 1023px) {
  display:flex;
  flex-direction:row;
  justify-content:space-between
}
    
`;

export const NavTitle = styled.div`
    flex:0.2;
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
    width:fit-content;
    flex-wrap:wrap;
    width:60px;

`;

export const NavLinks = styled.div`
    flex:0.8;
    display:flex;
    justify-content:space-evenly;
    align-items:flex-start;
    flex-direction:column;
    @media screen and ( max-width:1023px){
         display:flex;
         flex-direction:column;
         width:100%;
         height:90vh;
         position:fixed;
         top:80px;
         left:${({ click }) => (click ? 0 : '-100%')};
         transition:all 0.8s ease;
         background: linear-gradient(217deg,rgb(111,111,111 , 0.8), rgba(224, 224, 224, 1 ) 70.71%);
         overflow-x:hidden;
         align-items:center;
         color:black;
     }
  
`;

export const LogoResponsive = styled.h1`
    display:none;

      @media only screen and (max-width: 1023px) {
 display:flex;


}
`;



export const LinkContainer = styled.div`

`;

export const CartButton = styled.button`
    height:40px;
    width:110px;
    background-color:#ff6363;
    border-radius:30px;
    outline:none;
    border:none;
    font-weight:500;
    color:white;
    cursor: pointer;

         @media only screen and (max-width: 1023px) {
        display:none;

}

`;

export const Logo = styled.h1`
    flex-wrap:wrap;
      @media only screen and (max-width: 1023px) {
        display:none;

}

`;

export const LinkTitle = styled(Link)`
  color:gray;
  cursor: pointer;
   transition: all 0.5s ease;
    :hover{
        color:black
    }
    text-decoration:none;


`;

export const LinkTitleSelected = styled.del`
  color:red;
  cursor: pointer;
`;

export const HamburgerIcon = styled.div`
  display:none;
    @media only screen and (max-width: 1023px) {
  display:flex;
}
`;

export const ResponsiveCart = styled.div`
display:none;
  @media only screen and (max-width: 1023px) {
  display:flex;
}

`;