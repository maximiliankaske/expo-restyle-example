import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import { Typography, Colors, Spacings } from "../../styles";

interface CardProps {
  title: string;
  subtitle: string;
  date: string;
  imgSrc: ImageSourcePropType;
}

const Card = ({ title, subtitle, imgSrc, date }: CardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={imgSrc} style={styles.image} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: Spacings.m,
    margin: Spacings.m,
    backgroundColor: Colors.cardBackground,
    borderRadius: Spacings.l,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: Spacings.m,
  },
  title: {
    ...Typography.title,
    textAlign: "center",
  },
  subtitle: {
    ...Typography.subtitle,
    textAlign: "center",
    paddingBottom: Spacings.l,
  },
  date: { ...Typography.body, textAlign: "center" },
  image: { width: 150, height: 150, borderRadius: 75 },
});
