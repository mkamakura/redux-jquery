import * as actions from '../actions/ActionCreator';
import BaseComponent from '../../../utils/BaseComponent';
import is from 'predicates';

export default class Weather extends BaseComponent {
  constructor(selector, store) {
    super(selector, store, 'weather');

    this.$temp = this.$selector.find('.js-temp');
    this.$tempMax = this.$selector.find('.js-temp-max');
    this.$tempMin = this.$selector.find('.js-temp-min');
    this.$errorMessage = this.$selector.find('.js-error-message');
    this.$selector.find('.update').on('click', () => this.dispatch(actions.updateWeather()));
  }

  render() {
    if (is.notEmpty(this.state.weather.message)) {
      this.$errorMessage.text(this.state.weather.message);
      return;
    }

    if (is.notEmpty(this.state.weather.data)) {
      this.$temp.text(this.convertKtoC(this.state.weather.data.main.temp));
      this.$tempMax.text(this.convertKtoC(this.state.weather.data.main.temp_max));
      this.$tempMin.text(this.convertKtoC(this.state.weather.data.main.temp_min));
    }
  }

  convertKtoC(temp) {
    return `${Math.round(temp - 273.15)}℃`;
  }
}
