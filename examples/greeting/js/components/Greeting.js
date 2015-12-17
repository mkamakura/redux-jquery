import * as actions from '../actions/ActionCreator';
import connect from '../../../utils/connect';

export default class Greeting {
  constructor(selector, store) {
    connect(this, selector, store, 'name');

    this.$greeting = this.$selector.find('.js-greeting');
    this.$inputName = this.$selector.find('input[name=name]');
    this.$selector.find('.submit').on('click', () => this.dispatch(actions.updateName(this.$inputName.val())));
  }

  render() {
    this.$greeting.text(`Hello, ${this.state.name}!!`);
  }
}
