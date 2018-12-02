import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../plugins/firebase'
// import { getField } from 'vuex-map-fields'
// import { ADD_TODO, REMOVE_TODO, INIT_TODO } from './action-types'
const initialTodos = [{id:1, text: "todoです"}, {id:2, text: "todoだよ"}]
export default () => new Vuex.Store({
  state:{
    todos:initialTodos,
    number:2
  },
  actions: {
    addTodo: ({commit}, text) => { commit('ADD_TODO', text) },
    remove: ({commit}, id) => { commit('REMOVE_TODO', id) },
    reset: ({commit}) => { commit('RESET_TODO')}
  },
  mutations: {
    ADD_TODO: (state, text) => {
      state.number += 1
      const id = state.number
      const todo = {id: id, text: text}
      state.todos.push(todo)

    },
    REMOVE_TODO: (state, id) => {
      state.todos = state.todos.filter(itm => itm.id!= id)
    },
    RESET_TODO: (state) => {
      state = {todos:[], number:0}
    }
  },
  getters: {
    getTodos: state => state.todos,
    number: satate => state.number
  }

})
