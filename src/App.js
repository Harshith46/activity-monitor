import React, {useEffect, useState} from 'react';
import 'react-calendar/dist/Calendar.css';

import Header from './components/Header';
import ProfileContainer from './components/ProfileContainer';

import './App.css';

const App = () => {
  const [members, setMember] = useState(null);

  useEffect(() => {
    fetch('/api/members')
      .then(res => res.json())
      .then(members => setMember(members));
  }, []);

  return (
    <div>
      <Header />
      <h1 className="headline">Activity Monitor</h1>
      <div className="profile-container-wrapper">
        {members &&
          members.map(member => (
            <ProfileContainer key={member.id} {...member} />
          ))}
      </div>
    </div>
  );
};

export default App;
