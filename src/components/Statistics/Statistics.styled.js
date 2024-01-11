import styled from 'styled-components';

export const StatisticsContainer = styled.section`
    width: 400px;
h2 {
    text-align: center;
    text-transform: uppercase;
    color: gray;
}
`

export const StatisticsList = styled.ul`
    display: flex;
    width: 100%;

span {
    display: flex;
    margin: 15px;
}
`
export const StatisticsListItem = styled.li`
    width: 400px;
    background-color: ${getRandomHexColor};
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}