import $ from 'jquery';
import * as actions from '../actions/ActionCreator';
import equal from 'deep-equal';

export default class Weather {
  constructor(selector, store) {
    this.$selector = $(selector);
    this.weather = store.getState().weather;
    store.subscribe(() => {
      if (!equal(this.weather, store.getState().weather)) {
        this.weather = store.getState().weather;
        this.render();
      }
    });

    this.$temp = this.$selector.find('.js-temp');
    this.$tempMax = this.$selector.find('.js-temp-max');
    this.$tempMin = this.$selector.find('.js-temp-min');
    this.$selector.find('.update').on('click', () => store.dispatch(actions.updateWeather()));
  }

  render() {
    this.$temp.text(this.convertKtoC(this.weather.main.temp));
    this.$tempMax.text(this.convertKtoC(this.weather.main.temp_max));
    this.$tempMin.text(this.convertKtoC(this.weather.main.temp_min));
  }

  convertKtoC(temp) {
    return `${Math.round(temp - 273.15)}℃`;
  }
}
