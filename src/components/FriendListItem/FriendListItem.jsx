import { FriendItem, FriendItemStatus } from "./FriendListItem.styled"

export const FriendListItem = ({avatar, name, isOnline}) => {
    return <FriendItem>
        <FriendItemStatus $isOnline={isOnline}>
        </FriendItemStatus>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
    </FriendItem>
    
}