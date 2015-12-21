import * as actions from '../actions/ActionCreator';
import BaseComponent from '../../../utils/BaseComponent';

export default class Counter extends BaseComponent {
  constructor(selector, store) {
    super(selector, store, 'result');

    this.$result = this.$selector.find('.js-result');
    this.$selector.find('.js-increment').on('click', () => this.dispatch(actions.increment()));
    this.$selector.find('.js-decrement').on('click', () => this.dispatch(actions.decrement()));
  }

  render() {
    this.$result.text(this.state.result);
  }
}
