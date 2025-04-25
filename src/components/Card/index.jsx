import React from "react";
import { FiThumbsUp } from 'react-icons/fi';
import Me from "../../images/Me.png";

import { CardContainer, ImageBackground, Content, UserInfo, UserPicture, PostInfo, HasInfo } from "./styles"; 


const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJvbnQlMjBlbmR8ZW58MHx8MHx8fDA%3D"/>
            <Content>
                <UserInfo>
                    <UserPicture src={Me}></UserPicture>
                    <div>
                        <h4>Gabriel Bolonhez</h4>
                        <p>Há 10 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de Desenvolvimento Front-end</h4>
                    <p>Projeto feito para o curso de HTML, CSS e JavaScript no bootcamp da jornada front-end...<strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#html #css #javascript</h4>
                    <p>	
                        <FiThumbsUp/>16
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };