import React from "react";
import {
  Container,
  Title,
  Header,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
} from "./styles";

import avatar from "../../images/avatar.png";

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Activities</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@andreSDS</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>AndreSDS</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value></Value>
          </Details>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
