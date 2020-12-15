import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { Box, Text, useTheme } from "../../Theme";

interface CardProps {
  title: string;
  subtitle: string;
  date: string;
  imgSrc: ImageSourcePropType;
}

const Card = ({ title, subtitle, imgSrc, date }: CardProps) => {
  const theme = useTheme();
  return (
    <Box
      flexDirection="row"
      padding="m"
      margin="m"
      backgroundColor="cardBackground"
      borderRadius={theme.spacing.l}
    >
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        paddingRight="m"
      >
        <Text variant="title" textAlign="center">
          {title}
        </Text>
        <Text variant="subtitle" textAlign="center">
          {subtitle}
        </Text>
        <Text textAlign="center">{date}</Text>
      </Box>
      <Image
        source={imgSrc}
        style={{ width: 150, height: 150, borderRadius: 75 }}
      />
    </Box>
  );
};

export default Card;
