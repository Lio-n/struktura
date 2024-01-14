type TextColor = {
  white: string;
  black: string;
};

type TextWeight = {
  thin: string; // font-thin
  normal: string; // font-normal
  bold: string; // font-bold
};

interface Typography {
  textColor: keyof TextColor;
  textWeight: keyof TextWeight;
}

export default Typography;
