import styled from 'styled-components';

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid lightgray;
    box-shadow: 5px -5px 5px lightgray;

img {
    margin-right: 10px;
}
`
export const FriendItemStatus = styled.span`
    width: 10px;
    height: 10px;
    margin-right: 5px;
    border-radius: 50%;
    background: ${props => props.$isOnline ? 'green' : 'red'};
`