import $ from 'jquery';
import * as actions from '../actions/ActionCreator';

export default class Counter {
  constructor(selector, store) {
    this.$selector = $(selector);
    this.result = store.getState().result;
    store.subscribe(() => {
      if (this.result !== store.getState().result) {
        this.result = store.getState().result;
        this.render();
      }
    });

    this.$result = this.$selector.find('.js-result');
    this.$selector.find('.js-increment').on('click', () => store.dispatch(actions.increment()));
    this.$selector.find('.js-decrement').on('click', () => store.dispatch(actions.decrement()));
  }

  render() {
    this.$result.text(this.result);
  }
}
