import $ from 'jquery';
import * as actions from '../actions/ActionCreater';

export default class Greeting {
  constructor(selector, store) {
    this.$selector = $(selector);
    this.name = store.getState().name;
    store.subscribe(() => {
      if (this.name !== store.getState().name) {
        this.name = store.getState().name;
        this.render();
      }
    });

    this.$greeting = this.$selector.find('.js-greeting');
    this.$inputName = this.$selector.find('input[name=name]');
    this.$selector.find('.submit').on('click', () => store.dispatch(actions.updateName(this.$inputName.val())));
  }

  render() {
    this.$greeting.text(`Hello, ${this.name}!!`);
  }
}
