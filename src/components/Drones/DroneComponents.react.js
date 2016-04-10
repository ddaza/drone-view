'use strict';
import React from 'react';
import {List, Map} from 'immutable';

export class DroneBlock extends React.Component {
  render() {
    const {title, drones, key} = this.props;
    return (
      <div key={key} className='drone-strikes__block'>
        <h1 className='block__title'>{title}</h1>
        <div clasName='block__wrapper'>
          {
            drones.map((strike, index) => {
              return <Strike key={index} strike={strike}/>;
            })
          }
        </div>
      </div>
    );
  }
}

DroneBlock.propTypes = {
  title: React.PropTypes.string,
  key: React.PropTypes.string,
  drones: React.PropTypes.instanceOf(List)
};

class Strike extends React.Component {
  render() {
    const {strike, key} = this.props;
    const id = strike.get('id');
    const deaths = strike.get('deaths_max');
    const children = strike.get('children');

    return (
      <div key={key} className='drone-strikes__strike'>
        <span data-tip id={id}>.</span>
      </div>
    );
  }
}

Strike.propTypes = {
  key: React.PropTypes.number,
  strike: React.PropTypes.instanceOf(Map)
};
