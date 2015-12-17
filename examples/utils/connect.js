import $ from 'jquery';

export default function connect(self, selector, store, observe = '') {
  self.$selector = $(selector);
  self.state = (observe === '' ? store.getState() : store.getState()[observe]);
  self.dispatch = store.dispatch;
  store.subscribe(() => {
    const newState = store.getState();
    if (self.state !== newState) {
      self.state = newState;
      self.render();
    }
  });
}
