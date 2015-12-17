import * as actions from '../actions/ActionCreator';
import connect from '../../../utils/connect';

export default class Weather {
  constructor(selector, store) {
    connect(this, selector, store, 'weather');

    this.$temp = this.$selector.find('.js-temp');
    this.$tempMax = this.$selector.find('.js-temp-max');
    this.$tempMin = this.$selector.find('.js-temp-min');
    this.$selector.find('.update').on('click', () => this.dispatch(actions.updateWeather()));
  }

  render() {
    this.$temp.text(this.convertKtoC(this.state.weather.main.temp));
    this.$tempMax.text(this.convertKtoC(this.state.weather.main.temp_max));
    this.$tempMin.text(this.convertKtoC(this.state.weather.main.temp_min));
  }

  convertKtoC(temp) {
    return `${Math.round(temp - 273.15)}℃`;
  }
}
