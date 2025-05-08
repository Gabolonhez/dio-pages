import React from 'react';
import { Header } from "../../components/Header";
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Container, Title, TitleHighlight, Column} from './styles';

import Me from "../../images/Me.png";

 
const Feed = () => {
    return ( <>   
        <Header authenticated={true}/>
            <Container>
                <Column flex={3}>
                <Title>Feed</Title>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                </Column>
                <Column flex={1}>
                    <TitleHighlight> RANKING TOP 5 DA SEMANA </TitleHighlight>
                    <UserInfo percentual={40} name="Gabriel Bolonhez" image={Me}></UserInfo>
                    <UserInfo percentual={50} name="Gabriel Bolonhez" image={Me}></UserInfo>
                    <UserInfo percentual={60} name="Gabriel Bolonhez" image={Me}></UserInfo>
                    <UserInfo percentual={70} name="Gabriel Bolonhez" image={Me}></UserInfo>
                    <UserInfo percentual={80} name="Gabriel Bolonhez" image={Me}></UserInfo>
                </Column>
            </Container>
        </>
    )
}

export { Feed };