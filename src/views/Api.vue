<template>
  <div class="wrapper">
    <div class="call">
      <h2>UserList</h2>
      <input type="number" v-model="params.getUserList.page" />
      <button @click="get">GET</button>
    </div>
    <div class="response">
      <pre
        >{{ response.get }}
      </pre>
    </div>
  </div>
</template>

<script>
import { Reqres } from "@/repositories/reqres";

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
        get: null,
        error: null
      }
    };
  },
  methods: {
    get() {
      const params = {
        page: this.params.getUserList.page
      };
      Reqres.getUserList(params)
        .then(result => {
          this.response.get = result;
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
</style>
