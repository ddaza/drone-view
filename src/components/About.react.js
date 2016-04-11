import React from 'react';

export default class About extends React.Component {
  render() {
    return (
    <div className='drone-about'>
      <h2>About</h2>
      <p>This tool shows drone strikes by year and Country.</p>
      <div>
        <img src='/dist/images/toy-drone.png' />
        <p>The toy drone means children died in the Drone strike.</p>
      </div>
      <div>
        <img className='red-drone' src='/dist/images/drone_icon_small.png' />
        <p>The red drone means more at least 10 people died in the strike.</p>
      </div>
    </div>
    );
  }
}
