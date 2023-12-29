import AboutAwardInfo from "./about.interface";

interface AccoladeAwardInfo {
  text: string;
}

interface AchivementMetricInfo extends AboutAwardInfo {}

export type { AchivementMetricInfo };
export default AccoladeAwardInfo;
