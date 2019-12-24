<template>
  <div class="post">
    <a :href="post.url">
      <h2>{{ post.title }}</h2>
      <div>{{ post.postTime }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object
  }
};
</script>

<style scoped lang="scss">
.post {
  border: 1px solid #ddd;
  h2 {
    font-size: 1.1rem;
  }
  a {
    color: #555;
    text-decoration: none;
    display: block;
    padding: 1em;
    &:hover {
      background: #eee;
    }
  }
}
</style>
