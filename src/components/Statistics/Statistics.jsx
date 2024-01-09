import { StatisticsContainer, StatisticsList, StatisticsListItem } from "./Statistics.styled"

export const Statistics = ({title, stats}) => {
  return <StatisticsContainer className="statistics">
    {title && <h2 className="title">{title}</h2>}
  
    <StatisticsList>{
        stats.map(({id, label, percentage}) => {
            return <li key={id}>
                <span>{label}</span>
                <span>{percentage}%</span>
            </li>
        })
    }
  </StatisticsList>
</StatisticsContainer>
}

// // {unreadMessages.length > 0 && (
//         <p>You have {unreadMessages.length} unread messages.</p>
//       // )}