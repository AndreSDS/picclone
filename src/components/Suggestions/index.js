import React from "react";
import { Text } from "react-native";

import { Container, Options, Img, Label } from "./styles";

import img1 from "../../images/01.png";
import img2 from "../../images/02.png";
import img3 from "../../images/03.png";
import img4 from "../../images/04.png";
import img5 from "../../images/05.png";
import img6 from "../../images/06.png";
import img7 from "../../images/07.png";

const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: "Doações",
  },
  {
    key: String(Math.random()),
    img: img2,
    label: "Doações",
  },
  {
    key: String(Math.random()),
    img: img3,
    label: "Doações",
  },
  {
    key: String(Math.random()),
    img: img4,
    label: "Doações",
  },
  {
    key: String(Math.random()),
    img: img5,
    label: "Doações",
  },
  {
    key: String(Math.random()),
    img: img6,
    label: "Doações",
  },
  {
    key: String(Math.random()),
    img: img7,
    label: "Doações",
  },
];

const Sugestions = () => {
  return (
    <Container>
      {items.map((item) => (
        <Options key={item.key}>
          <Img source={require(item.img)} />
          <Label>{item.label}</Label>
        </Options>
      ))}
    </Container>
  );
};

export default Sugestions;
