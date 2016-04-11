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
      country: drones.groupBy(strike=>strike.get('country'))
    };
    return filterType[filter] ? filterType[filter] : new List();
  }

  getFilteredList() {
    const filter = this.state.filter;
    return this.getFilter(filter);
  }

  onChange(e) {
    const filter = e.target.selectedOptions[0].value;
    this.setState({filter: filter});
  }

  render() {
    return (
      <div className='drone-strikes__wrapper'>
        <select onChange={this.onChange.bind(this)}>
          <option value='year'>Year</option>
          <option value='country'>Country</option>
        </select>
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
