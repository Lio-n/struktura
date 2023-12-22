type TextColor = {
  white: string;
  black: string;
};

type TextWeight = {
  normal: string; // font-normal
  bold: string; // font-bold
};

interface Typography {
  textColor: keyof TextColor;
  textWeight: keyof TextWeight;
}

export default Typography;
