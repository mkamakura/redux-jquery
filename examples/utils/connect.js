import $ from 'jquery';

export default function connect(component, selector, store, ...stateNames) {
  component.$selector = $(selector);
  //TODO 複数の場合の処理
  //TODO 下階層のオブジェクトを指定できるように
  //component.state = (stateNames ? store.getState() : store.getState().stateNames);
  component.state = store.getState();
  component.dispatch = store.dispatch;
  store.subscribe(() => {
    const newState = store.getState();
    if (component.state !== newState) {
      component.state = newState;
      component.render();
    }
  });
}
