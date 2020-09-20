import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Wrapper,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  GiftDiscount,
} from "./styles";

import Suggestions from "../../components/Suggestions";

const HomeScreen = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <GiftDiscount>
            <AntDesign name="gift" size={30} color="#10c86e" />
            <MaterialCommunityIcons
              name="ticket-percent"
              style={{ transform: [{ rotate: "90deg" }] }}
              size={30}
              color="#10c86e"
            />
          </GiftDiscount>
        </Header>

        <Suggestions></Suggestions>
      </Container>
    </Wrapper>
  );
};

export default HomeScreen;
