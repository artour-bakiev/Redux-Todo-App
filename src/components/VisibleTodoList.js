import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { toggleTodo } from "../actions";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "completed":
      return todos.filter(t => t.completed);
    case "active":
      return todos.filter(t => !t.completed);
    case "all":
    default:
      return todos;
  }
};

const mapsStateToTodoListProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.filter)
});
const mapDispatchToTodoListProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
});
const VisibleTodoList = connect(
  mapsStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;
