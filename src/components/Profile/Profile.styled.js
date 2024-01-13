import styled from 'styled-components';

export const ProfileContainer = styled.div`
  div {
    text-align: center;
  }
  img {
    width: 200px;
    background-color: lightgray;
    border-radius: 50%;
  }
  ul {
    display: flex;
    justify-content: center;
    margin: 40px;
  }
`;
export const ProfileName = styled.p`
  font-weight: 700;
  font-size: 28px;
`;
export const StatsItem = styled.li`
  margin-right: 20px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
