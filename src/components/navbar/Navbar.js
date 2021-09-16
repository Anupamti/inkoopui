import React, { useEffect, useState } from 'react'
import { NavbarData } from '../../Data/Data'
import { CartButton, HamburgerIcon, LinkContainer, LinkTitle, LinkTitleSelected, Logo, LogoResponsive, NavbarPage, NavContainer, NavLinks, NavTitle, ResponsiveCart } from './NavbarStyles'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Navbar() {

    const [clicked, setclicked] = useState(true)
    const { pathname } = useLocation();
    return (
        <NavbarPage>
            <NavContainer>
                <HamburgerIcon onClick={() => setclicked(!clicked)} >{clicked ? (<CloseIcon style={{ color: "red" }} />) : (<MenuIcon style={{ color: "red" }} />)}</HamburgerIcon>
                <NavTitle>
                    <Logo> LOGO Name</Logo>
                    <LogoResponsive> LOGO</LogoResponsive>
                </NavTitle>

                <ResponsiveCart> <ShoppingCartIcon style={{ color: "red" }} /></ResponsiveCart>
                <NavLinks click={clicked}>
                    {
                        NavbarData.map((data) => (
                            <LinkContainer key={data.id} onClick={() => setclicked(!clicked)}>
                                {pathname === data.path ? (<LinkTitleSelected>{data.title}</LinkTitleSelected>) : (<LinkTitle to={data.path}>  {data.title} </LinkTitle>)}
                            </LinkContainer>
                        ))
                    }
                    <CartButton>
                        Cart
                    </CartButton>
                </NavLinks>
            </NavContainer>
        </NavbarPage>
    )
}

export default Navbar

