import * as actions from '../actions/ActionCreator';
import BaseComponent from '../../../utils/BaseComponent';

export default class Greeting extends BaseComponent {
  constructor(selector, store) {
    super(selector, store, 'name');

    this.$greeting = this.$selector.find('.js-greeting');
    this.$inputName = this.$selector.find('input[name=name]');
    this.$selector.find('.submit').on('click', () => this.dispatch(actions.updateName(this.$inputName.val())));
  }

  render() {
    this.$greeting.text(`Hello, ${this.state.name}!!`);
  }
}
