import $ from 'jquery';
import { TODO_STATUS, TAB } from '../contents/contents';
import * as actions from '../actions/ActionCreator';
import BaseComponent from '../../../utils/BaseComponent';

export default class Todo extends BaseComponent {
  constructor(selector, store) {
    super(selector, store, 'todo', 'tab');

    this.$todoList = this.$selector.find('.todo-list');
    this.$todoTemplate = $('.todo-template');
    this.inputTodo = this.$selector.find('.input-todo');
    this.$selector.find('.add-button').on('click', () => this.dispatch(actions.addTodo(this.inputTodo.val())));
    this.$selector.find('.all-button').on('click', () => this.dispatch(actions.changeTab(TAB.ALL)));
    this.$selector.find('.active-button').on('click', () => this.dispatch(actions.changeTab(TAB.ACTIVE)));
    this.$selector.find('.complete-button').on('click', () => this.dispatch(actions.changeTab(TAB.COMPLETED)));

    this.$todoList.on('click', '.active', (event) => this.dispatch(actions.activeTodo($(event.target).parent().attr('data-todo-id'))));
    this.$todoList.on('click', '.complete', (event) => this.dispatch(actions.completeTodo($(event.target).parent().attr('data-todo-id'))));
    this.$todoList.on('click', '.delete', (event) => this.dispatch(actions.deleteTodo($(event.target).parent().attr('data-todo-id'))));

    this.init();
  }

  init() {
    this.dispatch(actions.initialTodo(JSON.parse($('.initialData').html())));
  }

  render() {
    this.$todoList.html(this.state.todo.map((todo) => {
      if (this.state.tab === TAB.ALL || this.state.tab === todo.status) return this.renderTodo(todo);
    }));
  }

  renderTodo(todo) {
    const $template = this.$todoTemplate.clone();
    $template.removeClass('todo-template').show();
    $template.attr('data-todo-id', todo.id);
    $template.find('.todo-text').text(todo.text);
    if (todo.status === TODO_STATUS.COMPLETED) {
      $template.addClass('completed');
      $template.find('.complete').hide();
    }
    if (todo.status === TODO_STATUS.ACTIVE) $template.find('.active').hide();
    return $template;
  }
}
