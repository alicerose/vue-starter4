<template>
  <div class="wrapper">
    <div class="call">
      <input type="number" v-model="params.getList.page" />
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
        getList: {
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
        page: this.params.getList.page
      };
      Reqres.getList(params)
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
  text-align: leftl;
}
.response {
  background: #eee;
  pre {
    text-align: left;
  }
}
</style>
