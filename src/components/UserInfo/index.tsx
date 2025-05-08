import React from "react";
import { Container, UserPicture, NameText, Progress } from "./styles";
import { IUserInfo } from "./types";

const UserInfo = ({image, name, percentual}: IUserInfo) => {
    return (
        <Container>
            <UserPicture src={image}/>
            <div>
                <NameText>{name}</NameText>
                <Progress percentual={percentual}/>
            </div>
        </Container>
    )
}

export { UserInfo };