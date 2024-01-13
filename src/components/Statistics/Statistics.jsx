import {
  StatisticsContainer,
  StatisticsList,
  StatisticsListItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <h2 className="title">{title}</h2>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsListItem key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </StatisticsListItem>
          );
        })}
      </StatisticsList>
    </StatisticsContainer>
  );
};
