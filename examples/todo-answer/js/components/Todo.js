import $ from 'jquery';
import { TODO_STATUS, TAB } from '../contents/contents';
import * as actions from '../actions/ActionCreator';
import BaseComponent from '../../../utils/BaseComponent';

export default class Todo extends BaseComponent {
  constructor(selector, store) {
    super(selector, store, 'todo', 'tab');

    this.$todoList = this.$selector.find('.js−todoList');
    this.$todoTemplate = $('.js-template');
    this.inputTodo = this.$selector.find('.js-todoInput');
    this.$selector.find('.js-todoAddBtn').on('click', () => this.dispatch(actions.addTodo(this.inputTodo.val())));
    this.$selector.find('.js-todoFilterAll').on('click', () => this.dispatch(actions.changeTab(TAB.ALL)));
    this.$selector.find('.js-todoFilterActive').on('click', () => this.dispatch(actions.changeTab(TAB.ACTIVE)));
    this.$selector.find('.js-todoFilterComplete').on('click', () => this.dispatch(actions.changeTab(TAB.COMPLETED)));

    this.$todoList.on('click', '.js-btnActive', (event) => this.dispatch(actions.activeTodo($(event.target).parent().attr('data-todo-id'))));
    this.$todoList.on('click', '.js-btnComplete', (event) => this.dispatch(actions.completeTodo($(event.target).parent().attr('data-todo-id'))));
    this.$todoList.on('click', '.js-btnDelete', (event) => this.dispatch(actions.deleteTodo($(event.target).parent().attr('data-todo-id'))));

    this.init();
  }

  init() {
    this.dispatch(actions.initialTodo(JSON.parse($('.js-initialData').html())));
  }

  render() {
    this.$todoList.html(this.state.todo
        .filter((todo) => this.state.tab === TAB.ALL || this.state.tab === todo.status)
        .map((todo) => this.renderTodo(todo))
    );
  }

  renderTodo(todo) {
    const $template = this.$todoTemplate.find(todo.status === TODO_STATUS.ACTIVE ? '.js-todoItemActive' : '.js-todoItemComplete').clone();
    $template.attr('data-todo-id', todo.id);
    $template.find('.todoList-item-elem').text(todo.text);
    if (todo.status === TODO_STATUS.COMPLETED) {
      $template.addClass('completed');
      $template.find('.complete').hide();
    }
    if (todo.status === TODO_STATUS.ACTIVE) $template.find('.active').hide();
    return $template;
  }
}
