import React from 'react';

import './name-generator.styles.scss';

const NameGenerator = ({label, name}) => (
  <div className="name">
    <span className="key-title">{label}:</span> {name}
  </div>
);

export default NameGenerator;
