import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Typography, Colors, Spacings } from "../../styles";

interface CardProps {
  title: string;
  subtitle: string;
  date: string;
  imgSrc: ImageSourcePropType;
}

const Card = ({ title, subtitle, imgSrc, date }: CardProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: Spacings.m,
        margin: Spacings.m,
        backgroundColor: Colors.cardBackground,
        borderRadius: Spacings.l,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingRight: Spacings.m,
        }}
      >
        <Text style={{ ...Typography.title, textAlign: "center" }}>
          {title}
        </Text>
        <Text
          style={{
            ...Typography.subtitle,
            textAlign: "center",
            paddingBottom: Spacings.l,
          }}
        >
          {subtitle}
        </Text>
        <Text style={{ ...Typography.body, textAlign: "center" }}>{date}</Text>
      </View>
      <Image
        source={imgSrc}
        style={{ width: 150, height: 150, borderRadius: 75 }}
      />
    </View>
  );
};

export default Card;
