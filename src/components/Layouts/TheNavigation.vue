<template>
  <div class="container">
    <header class="navbar" :style="{ position: position }">
      <nav>
        <div class="navbar--list-section">
          <ul class="navbar-list">
            <li v-for="item in listItems" :key="item.title">
              <router-link :to="item.route">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="navbar--buttons">
          <router-link class="navbar--buttons__signup" to="/signup"
          >ثبت نام</router-link
          >
          <router-link class="navbar--buttons__login" to="/login"
          >ورود</router-link
          >
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  props: [ "position" ],
  data() {
    return {
      listItems: [
        { title: "صفحه اصلی", route: "/home" },
        { title: "بلاگ", route: "/blog" },
        { title: "تماس با ما", route: "/home" },
        { title: "درباره ی ما", route: "/home" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: block;
  height: 15vh;
}
.navbar {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 15vh;
  /* position: fixed; */
  z-index: 25;
  background-color: rgba(204, 204, 204, 0.9);
}
.navbar nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-list {
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem transparent solid;
}
.navbar-list li {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 2.2rem;
  border-radius: 0.8rem;
  text-align: center;
  padding: 0.8rem 3.2rem;
}
.navbar-list li:hover {
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.26);
}
.navbar-list a {
  text-decoration: none;
  color: black;
}
.navbar--buttons {
  direction: ltr;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar--buttons a {
  text-decoration: none;
}
.navbar--buttons a {
  text-align: center;
  padding: 0.95rem;
  font-size: 1.8rem;
  border-radius: 0.8rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.26);
  width: 14.4rem;
  margin: 0 0 0 3.2rem;
}
.navbar--buttons__signup {
  border: none;
  background-color: #020397;
  color: white;
}
.navbar--buttons__signup:hover {
  background-color: white;
  border: 0.2rem #020397 solid;
  color: #020397;
}
.navbar--buttons__login {
  border: none;
  background-color: rgb(238, 156, 247);
  color: black;
}
.navbar--buttons__login:hover {
  border: 0.2rem white solid;
  background-color: #5f0b58;
  color: white;
}
</style>
