import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";

interface CardProps {
  title: string;
  subtitle: string;
  date: string;
  imgSrc: ImageSourcePropType;
}

const Card = ({ title, subtitle, imgSrc, date }: CardProps) => {
  return (
    <View>
      <View>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
        <Text>{date}</Text>
      </View>
      <Image source={imgSrc} />
    </View>
  );
};

export default Card;
