import styled from "styled-components";

export const Homepage_Page = styled.div`
    flex:0.8;
    display:flex;
      height:80vh;
      justify-content:center;
      align-items:center;
      flex-direction:column;

           @media only screen and (max-width: 1024px) {
      height:100vh;
}

`;

export const HeaderContainer = styled.div`
display:flex;
padding:0px 60px;
align-items:center;
`;

export const HeaderRight = styled.div`
padding:0px 30px;
  flex:0.8;
       @media only screen and (max-width: 1023px) {
        flex:1;
}
`;

export const SubheaderLeft = styled.div`
     
      display:flex;
      height:100%;
      align-items:flex-start;
      flex-direction:column;
      padding-top:20px;
     @media only screen and (max-width: 1023px) {
        flex:none;
      width:90%;
}
  
`;

export const ScrollContainer = styled.div`
  width:fit-content;
  display:flex;
  height:fit-content;
  padding:30px 0px;
  justify-content:space-evenly;
  align-items:center;

    @media only screen and (max-width: 1023px) {
flex-wrap:wrap;
}

`;

export const Header = styled.h1`
font-size:60px;
`;

export const Divider = styled.div`
  border-top:2px solid red;
  width:55px;
`;

export const Subheader = styled.p`
font-size:13px;
color:gray;
`;

export const CardContainer = styled.div`
height:200px;
width:160px;
display:flex;
flex-direction:column;
border-radius:30px;
background-color:#fffcfc;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
margin:20px;

`;

export const ImageContainer = styled.div`
flex:0.7;
    display:flex;
      justify-content:center;
      align-items:center;
`;

export const TitleContainer = styled.div`
flex:0.3;
   display:flex;
      justify-content:center;
      align-items:center;
      font-weight:700;
`;

export const ImageS = styled.img`
height:70%;
width:70%;
border-radius:50%;
`;

export const MobileResponsive = styled.div`
  display:none;
     @media only screen and (max-width: 1023px) {
      display:flex;
      justify-content:center;
      align-items:center;
      padding:0px 30px;
      padding-bottom:100px;
      width:70%;
      height:30vh;
}
`;

export const DesktopResponsive = styled.div`
  display:block;
   flex:0.2;
     @media only screen and (max-width: 1023px) {
      display:none;
}`;
