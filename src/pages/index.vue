<template>
  <section class="container">
    <input type="text" @keyup.enter="addTodo(todoText)" v-model="todoText"/>
    <li v-for="todo in todos" :key="todo.id">
      {{todo.id}} {{ todo.text }} <button @click="remove(todo.id)">x</button>
    </li>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => {return {todoText: ''}},
  computed: {
    ...mapGetters({ todos: 'getTodos' })
  },
  methods: {
    ...mapActions(['addTodo', 'remove', 'reset'])
  }
}
</script>

<style>

.container {
  height: 100vh;
  text-align: center;
}
</style>
