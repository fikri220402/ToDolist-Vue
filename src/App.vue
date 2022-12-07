<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <a class="navbar-brand" href="#">
        <img
          src="https://icon-library.com/images/todo-icon/todo-icon-22.jpg"
          width="50px" />
        ToDoList
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav> -->
    <div id="nav" class="mb-3 text-center">
      <h1><b>ToDoList</b></h1>
      <router-link to="/">Home</router-link><i style="margin-left: -11px" class="mr-1 bi bi-three-dots-vertical"></i>
      <router-link to="/add">Add</router-link>
      <i style="margin-left: -11px" class="mr-1 bi bi-three-dots-vertical" v-if="$route.name == 'edit-data'"></i>
      <button active to="#" id="edite" v-if="$route.name == 'edit-data'">
        Edit
      </button>
      <i style="margin-left: -11px" class="mr-1 bi bi-three-dots-vertical" v-if="$route.name == 'detail-data'"></i>
      <button active to="#" id="edite" v-if="$route.name == 'detail-data'">
        Detail
      </button>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 2rem;
}

#title {
  font-weight: bold;
  color: #ffffff;
  margin: 1rem 1rem 0 1rem;
  background: rgb(62, 60, 60);
  border-radius: 5px;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  width: 175px;
  text-align: center;
}


#actionic {
  font-weight: 500px;
  color: #ffffff;
  margin: 0 0.5rem 0 0;
  background: rgb(250, 45, 45);
  border-radius: 10px;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  border: 0;
}

#actionic:hover {
  color: #900505;
}

h1 {
  font-weight: 1200;
  font-size: 2rem;
  margin: 3rem 0 2rem 0rem;
}

#nav {
  color: #3d3d3d;
}

#nav a {
  font-weight: bold;
  color: #2e2e2d;
  margin: 0 1rem 0 0;
  background: #f5cb42;
  border-radius: 14px;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
}

#nav a:hover {
  color: #6b6a6a;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  background: #e70505;
}

#edite {
  text-color: #ffffff;
  font-weight: bold;
  color: #ffffff;
  margin: 0 1rem 0 0;
  background: #e70505;
  border-radius: 14px;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  border: 0;
}

#edite:hover {
  color: #900505;
}

input[type="submit"] {
  background: #ff0000;
  color: white;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  border: none;
  box-shadow: 0 5px 10px #1d1d1d7a;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.25s ease-out;
  cursor: pointer;
}

input[type="submit"]:hover {
  background: #ff0000;
  box-shadow: 0 3px 7px #3031327a;
}

input {
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #aaa;
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
}
</style>