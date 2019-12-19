<template>
  <div class="wrapper">
    <div class="call">
      <h2>UserList</h2>
      <input type="number" v-model="params.getUserList.page" />
      <button @click="get">GET</button>
      <div class="c__users">
        <template v-for="user of response.userList">
          <div :key="user.id" class="c__user">
            <div class="c__user--avatar">
              <img :src="user.avatar" :alt="name(user)" />
            </div>
            <div class="c__user--name">{{ user.id }} : {{ name(user) }}</div>
          </div>
        </template>
      </div>
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

export default {
  name: "Api",
  data() {
    return {
      params: {
        getUserList: {
          page: 1
        }
      },
      response: {
        raw: null,
        userList: null,
        error: null
      }
    };
  },
  computed: {
    users() {
      return this.response.userList;
    }
  },
  methods: {
    get() {
      const params = {
        page: this.params.getUserList.page
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
    name(user) {
      return user.first_name + " " + user.last_name;
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
.c__user {
  width: 100%;
  max-width: 128px;
  border: 1px solid #ddd;
  & + & {
    margin: {
      top: 0.5em;
    }
  }
}
.c__user-avatar {
  img {
    width: 100%;
    height: auto;
    display: block;
  }
}
.c__user--name {
  text-align: center;
}
</style>
