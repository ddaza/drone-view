'use strict';
import React from 'react';
import {List, Map} from 'immutable';
import Tooltip from 'react-tooltip';
import classnames from 'classnames';
import _ from 'lodash';

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
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  key: React.PropTypes.string,
  drones: React.PropTypes.instanceOf(List)
};

class Strike extends React.Component {
  render() {
    const {strike, key} = this.props;
    const id = strike.get('_id');
    const deaths = _.toInteger(strike.get('deaths_max'));
    const children = _.toInteger(strike.get('children'));
    const narrative = strike.get('narrative');
    const strikeClass = classnames(
      'strike-ocurrence', {
        children: children,
        'double-digit': deaths > 9
      });
    return (
      <div key={key} className='drone-strikes__strike'>
        <a data-tip data-for={id} className={strikeClass}></a>
        <Tooltip id={id}>
          <p>{narrative}</p>
        </Tooltip>
      </div>
    );
  }
}

Strike.propTypes = {
  key: React.PropTypes.number,
  strike: React.PropTypes.instanceOf(Map)
};
