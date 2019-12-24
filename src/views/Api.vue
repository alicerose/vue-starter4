<template>
  <div class="wrapper">
    <div class="call">
      <h2>UserList</h2>
      page : <input type="number" v-model="params.getUserList.page" /><br />
      delay: <input type="number" v-model="params.getUserList.delay" />
      <button @click="getUserList">GET</button>
      <div class="c__users">
        <template v-for="user of response.userList">
          <User :user="user" :key="user.id" />
        </template>
      </div>

      <h2>User</h2>
      <input type="number" v-model.number="params.getUser.id" />
      <button @click="getUser">GET</button>
      <User :user="response.user" v-if="response.user" />

      <h2>Qiita Posted Contents</h2>
      <button type="button" @click="getPosts">Qiita</button>
    </div>
    <div class="response">
      <pre
        >{{ response.raw }}
      </pre>
    </div>
  </div>
</template>

<script>
import { Reqres } from "@/api/reqres";
import User from "@/components/User";
import { Qiita } from "@/api/qiita";
import { QiitaPosts } from "@/models/qiita/Item";

export default {
  name: "Api",
  components: { User },
  data() {
    return {
      params: {
        getUserList: {
          page: 1,
          delay: null
        },
        getUser: {
          id: 1
        }
      },
      response: {
        raw: null,
        userList: null,
        user: null,
        error: null,
        qiita: {
          posts: null
        }
      }
    };
  },
  computed: {
    users() {
      return this.response.userList;
    }
  },
  methods: {
    getUserList() {
      this.response.userList = null;
      const params = {
        ...this.params.getUserList
      };
      Reqres.getUserList(params)
        .then(result => {
          this.response.raw = result;
          this.response.userList = result.data.data;
        })
        .catch(error => {
          this.response.error = error;
        });
    },
    getUser() {
      const params = this.params.getUser.id;
      Reqres.getUser(params)
        .then(result => {
          this.response.raw = result;
          this.response.user = result.data.data;
        })
        .catch(error => {
          this.response.error = error;
        });
    },
    getPosts() {
      const params = "";
      Qiita.getPosts(params)
        .then(result => {
          this.response.raw = result;
          console.log(result.data);
          this.response.qiita.posts = QiitaPosts.creates(result.data);
          console.log("Qiita Post Model:", QiitaPosts.creates(result.data));
        })
        .catch(error => {
          this.response.error = error;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.call,
.response {
  width: 50%;
  text-align: left;
}
.call {
  padding: 1em;
}
.response {
  background: #eee;
  position: sticky;
  top: 0;
  pre {
    max-height: 100vh;
    overflow: auto;
    text-align: left;
    padding: 1em;
  }
}
.c__users {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}
</style>
