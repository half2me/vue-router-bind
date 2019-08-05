# Vue Router Mapper

Two way bindings for vue-router

## Installation

`npm install --save @halftome/vue-router-mapper

## Usage

In any of your vue components, Add the required query params to your `computed`:

```javascript
computed: {
    ...mapRouterQuery(['page_number', 'search']),
}
```

And you now have 2-way data binding. Feel free read/write to these variables. For example a search:

```html
<template>
  <div>
    You are on page {{ page_number }}
    <p>Search: <input v-model="search" /></p>
  </div>
</template>
```

As you type, the url will be updated.

Instead of doing `this.$routes.query.search` to get the value, and `this.$router.push({query: {search: 'value'}})`, you can now elegantly use v-model or a .sync modifier on a prop, allowing you to write cleaner and more concise code.
