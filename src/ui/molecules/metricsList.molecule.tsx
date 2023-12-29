import { FC } from "react";
import Phrase from "../atoms/typographies/phrase.atom";

interface MetricInfo {
  text: string;
  content: string;
}

type MetricsListProps = { metrics: MetricInfo[]; className?: string };

const MetricsList: FC<MetricsListProps> = ({ metrics, className }) => {
  return (
    <div className={className}>
      {metrics.map((info, index) => (
        <div key={index} className="grid gap-2">
          <Phrase textWeight="bold" className="text-2xl md:text-3xl">
            {info.text}
          </Phrase>
          <Phrase>{info.content}</Phrase>
        </div>
      ))}
    </div>
  );
};

export default MetricsList;
