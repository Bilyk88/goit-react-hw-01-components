import { FriendItem, FriendItemStatus } from "./FriendListItem.styled"

export const FriendListItem = ({avatar, name, isOnline}) => {
    return <FriendItem>
        <FriendItemStatus isOnline={isOnline}>
            {isOnline ? true : false}
  </FriendItemStatus>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
    </FriendItem>
    
}