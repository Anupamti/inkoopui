import React from 'react'
import { CardData } from '../../Data/Data'
import { CardContainer, DesktopResponsive, Divider, Header, HeaderContainer, HeaderRight, Homepage_Page, ImageContainer, ImageS, MobileResponsive, ScrollContainer, Subheader, SubheaderLeft, TitleContainer } from './HomepageStyles'

function Homepage() {
    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <Homepage_Page>
            <HeaderContainer>
                <HeaderRight>
                    <Header>  What are you having for Lunch ? </Header>
                </HeaderRight>
                <DesktopResponsive>
                    <SubheaderLeft>
                        <Subheader> It is a long established fact that a reader will be distracted by the readable content of a  layout. </Subheader>
                        <Divider />
                    </SubheaderLeft>
                </DesktopResponsive>
            </HeaderContainer>
            <ScrollContainer>
                {
                    CardData.map((data) => (
                        <CardContainer>
                            <ImageContainer><ImageS src={data.image} /></ImageContainer>
                            <TitleContainer>{data.title}</TitleContainer>
                        </CardContainer>
                    ))
                }
            </ScrollContainer>
            <MobileResponsive>
                <SubheaderLeft>
                    <Subheader> It is a long established fact that a reader will be distracted by the readable content of a  layout. </Subheader>
                    <Divider />
                </SubheaderLeft>
            </MobileResponsive>
        </Homepage_Page>
    )
}

export default Homepage
