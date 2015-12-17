import $ from 'jquery';

export default function connect(self, selector, store, observeState = '') {
  self.$selector = $(selector);
  self.state = (observeState === '' ? store.getState() : store.getState()[observeState]);
  self.dispatch = store.dispatch;
  store.subscribe(() => {
    const newState = store.getState();
    if (self.state !== newState) {
      self.state = newState;
      self.render();
    }
  });
}
