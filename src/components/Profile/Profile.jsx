import { ProfileContainer, ProfileName, StatsItem } from "./Profile.styled"

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <ProfileContainer>
  <div>
    <img
      src={avatar}
      alt="User avatar"
    />
    <ProfileName>{username}</ProfileName>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className="stats">
    <StatsItem>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span>Views</span>
      <span>{stats.views}</span>
    </StatsItem>
    <StatsItem>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </StatsItem>
  </ul>
</ProfileContainer>
}