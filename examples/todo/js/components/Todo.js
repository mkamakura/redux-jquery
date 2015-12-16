import $ from 'jquery';
import * as actions from '../actions/ActionCreator';
import equal from 'deep-equal';

export default class Todo {
  constructor(selector, store) {
    this.$selector = $(selector);
    this.todo = store.getState().todo;
    this.dispatch = store.dispatch;
    store.subscribe(() => {
      if (!equal(this.todo, store.getState().todo)) {
        this.todo = store.getState().todo;
        this.render();
      }
    });

    this.$todoList = this.$selector.find('.todo-list');
    this.$todoTemplate = $('.todo-template');
    this.inputTodo = this.$selector.find('.input-todo');
    this.$selector.find('.add-button').on('click', () => this.dispatch(actions.addTodo(this.inputTodo.val())));
    this.$selector.find('.all-button').on('click', () => this.dispatch(actions.changeTab('ALL')));
    this.$selector.find('.active-button').on('click', () => this.dispatch(actions.changeTab('ACTIVE')));
    this.$selector.find('.complete-button').on('click', () => this.dispatch(actions.changeTab('COMPLETED')));

    this.init();
  }

  init() {
    this.dispatch(actions.initialTodo(JSON.parse($('.initialData').html())));
  }

  render() {
    this.$todoList.empty();
    this.todo.todo.map((todo) => {
      if (this.todo.tab === 'ALL' || this.todo.tab === todo.status) this.renderTodo(todo);
    });
  }

  renderTodo(todo) {
    const $template = this.$todoTemplate.clone();
    $template.removeClass('todo-template').show();
    $template.find('.todo-text').text(todo.text);
    if (todo.status === 'COMPLETED') {
      $template.addClass('completed');
      $template.find('.complete').hide();
      $template.find('.active').on('click', (e) => this.dispatch(actions.activeTodo(todo.id)));
    }
    if (todo.status === 'ACTIVE') {
      $template.find('.active').hide();
      $template.find('.complete').on('click', (e) => this.dispatch(actions.completeTodo(todo.id)));
    }
    $template.find('.delete').on('click', (e) => this.dispatch(actions.deleteTodo(todo.id)));
    this.$todoList.append($template);
  }
}
