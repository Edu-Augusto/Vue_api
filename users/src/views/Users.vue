<template>
  <div class="home">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://localhost:8080">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <div class="table-container column is-half is-offset-one-quarter">
      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role | processRole }}</td>
            <td>
              <router-link :to="{ name: 'UserEdit', params: { id: user.id } }"
                ><button id="btn-edit" class="button is-success">Editar</button></router-link
              >
              <button class="button is-danger" @click="showModalUser(user.id)">
                Deletar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div :class="{ modal: true, 'is-active': showModal }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Você quer realmente deletar este usuário?
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p>Após deletar, você não poderá reverter, tem certeza dessa ação?
                </p>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item" @click="hideModal()"
                >Cancelar</a
              >
              <a href="#" class="card-footer-item" @click="deleteUser()"
                >Sim, quero deletar!</a
              >
            </footer>
          </div>
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="hideModal()"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .get("http://localhost:8686/user", req)
      .then((res) => {
        console.log(res);
        this.users = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("OLÁ");
  },
  data() {
    return {
      users: [],
      showModal: false,
      deleteUserId: -1,
    };
  },
  methods: {
    hideModal() {
      this.showModal = false;
    },
    showModalUser(id) {
      this.deleteUserId = id;
      this.showModal = true;
    },
    deleteUser() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .delete("http://localhost:8686/user/" + this.deleteUserId, req)
        .then((res) => {
          console.log(res);
          this.showModal = false;
          this.users = this.users.filter((u) => u.id != this.deleteUserId);
        })
        .catch((err) => {
          console.log(err);
          this.showModal = false;
        });
    },
  },
  filters: {
    processRole: function (value) {
      if (value == 0) {
        return "Usuário comum";
      } else if (value == 1) {
        return "Admin";
      }
    },
  },
};
</script>

<style scoped>
.table-container {
  border: 1px solid rgba(172, 167, 167, 0.11);
  border-radius: 2%;
  background-color: rgba(220, 250, 250, 0.199);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 800;
}
  @media (max-width: 651px){
    #btn-edit {
      width: 85px;
      margin-bottom: 1%;
    }
}
</style>