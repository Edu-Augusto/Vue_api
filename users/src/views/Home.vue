<template>
  <div class="home">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarExampleTransparentExample"
        >
          <span  aria-hidden="true"></span>
          <span  aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#"> Home </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#"> Ações </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="http://localhost:8080/login">
                Login
              </a>
              <a class="navbar-item" href="http://localhost:8080/register">
                Criar usuário
              </a>
              <a class="navbar-item" href="http://localhost:8080/admin/users">
                Lista de usuários
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by1">
          <img src="../assets/ti.jpeg" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="../assets/logo2.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">XPTO enterprise</p>
            <p class="subtitle is-6">Eduardo Augusto Oliveira</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <a href="https://twitter.com/eduumezenga">@eduumezenga</a>.
          <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.home {
  font-weight: 600;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
button {
  margin: 1%;
}
.notification a:not(.button):not(.dropdown-item) {
  text-decoration: none;
  text-align: center;
}
</style>
