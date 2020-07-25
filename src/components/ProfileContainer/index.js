import React, {useState} from 'react';

import NameGenerator from '../NameGenerator';
import ActivityContainer from '../ActivityContainer';
import down from '../../Icons/down.svg';

import './profile-container.styles.scss';

const ProfileContainer = ({
  activity_periods: activityPeriod,
  real_name: realName,
  tz: location,
}) => {
  const [showActivity, setShowActivity] = useState(false);

  return (
    <div className="profile-container">
      <div className="image-data-wrapper">
        <img
          src="https://i.stack.imgur.com/l60Hf.png"
          className="default-image"
        ></img>
        <div>
          <NameGenerator label="Name" name={realName} />
          <NameGenerator label="Location" name={location} />
          <img
            src={down}
            onClick={() => setShowActivity(!showActivity)}
            className={`down-arrow ${showActivity ? 'up-arrow' : ''}`}
          />
        </div>
      </div>
      {showActivity && (
        <ActivityContainer name={realName} activityPeriod={activityPeriod} />
      )}
    </div>
  );
};

export default ProfileContainer;
