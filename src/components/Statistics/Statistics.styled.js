import styled from 'styled-components';

export const StatisticsContainer = styled.section`
    width: 400px;
h2 {
    text-align: center;
    text-transform: uppercase;
    color: gray;
}

li {
    background-color: ${getRandomHexColor()};
}
`

export const StatisticsList = styled.ul`
    display: flex;
    width: 100%;
    /* background-color: ${getRandomHexColor()}; */

span {
    display: flex;
    margin: 15px;
}
`
// export const StatisticsListItem = styled.li`
//     background-color: ${getRandomHexColor()};
//     /* box-sizing: border-box;
//     border: 1px solid lightgray; */
// `

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}