import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";

interface CardProps {
  title: string;
  subtitle: string;
  imgSrc: ImageSourcePropType;
}

const Card = ({ title, subtitle, imgSrc }: CardProps) => {
  return (
    <View>
      <View>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
      <Image source={imgSrc} />
    </View>
  );
};

export default Card;
