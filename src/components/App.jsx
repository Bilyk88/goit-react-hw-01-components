import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import { Profile } from "components/Profile/Profile";
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { FriendList } from 'components/FriendList/FriendList';


export const App = () => {
  return (
    <div
      style={{

        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#010101'
      }}
    >
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      
    <FriendList friends={friends} />
      
    <TransactionHistory items={transactions} />
    </div>
  );
};
