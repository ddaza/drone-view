import React from 'react';
import {getDrones} from '../../api';
import {List} from 'immutable';
import {DroneBlock} from './DroneComponents.react';
import moment from 'moment';

export default class DroneStrikes extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drones: null,
      filter: null
    };
  }

  componentDidMount() {
    getDrones().then((response) => {
      const drones = response.get('strike');
      this.setState({
        drones: drones,
        filter: 'year'
      });
    });
  }

  getFilter(filter) {
    const drones = this.state.drones || new List();
    const filterType = {
      year: drones.groupBy(strike=>moment(strike.get('date')).year()),
      country: drones.groupBy(strike=>strike.get('country')),
      deaths_max: drones.groupBy(strike=>strike.get('deaths_max'))
    };
    return filterType[filter] ? filterType[filter] : new List();
  }

  getFilteredList() {
    const filter = this.state.filter;
    return this.getFilter(filter);
  }

  render() {
    return (
      <div className='drone-strikes__wrapper'>
        {this.getFilteredList().map((drones, title) => {
          return (
            <DroneBlock
              key={title}
              title={title}
              drones={drones}
            />);
        })}
      </div>
    );
  }
}

