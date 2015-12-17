import * as actions from '../actions/ActionCreator';
import connect from '../../../utils/connect';

export default class Counter {
  constructor(selector, store) {
    connect(this, selector, store, 'result');

    this.$result = this.$selector.find('.js-result');
    this.$selector.find('.js-increment').on('click', () => this.dispatch(actions.increment()));
    this.$selector.find('.js-decrement').on('click', () => this.dispatch(actions.decrement()));
  }

  render() {
    this.$result.text(this.state.result);
  }
}
