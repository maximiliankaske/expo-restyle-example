import React, { ReactNode } from "react";
import {
  createBox,
  createText,
  createTheme,
  ThemeProvider as ReThemeProvider,
  useTheme as useReTheme,
} from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#2292A4",
    secondary: "#BDBF09",
    tertiary: "#D96C06",
    mainForeground: "#0F0A0A",
    mainBackground: "white",
    cardBackground: "#F5EFED",
  },
  spacing: {
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
  },
  textVariants: {
    title: {
      // fontFamily
      fontSize: 24,
      lineHeight: 28,
      color: "primary",
    },
    subtitle: {
      // fontFamily
      fontSize: 20,
      lineHeight: 24,
      color: "secondary",
    },
    body: {
      // fontFamily
      fontSize: 18,
      lineHeight: 20,
      color: "mainForeground",
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ReThemeProvider theme={theme}>{children}</ReThemeProvider>;
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

Text.defaultProps = {
  variant: "body",
};
