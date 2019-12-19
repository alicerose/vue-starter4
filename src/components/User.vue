<template>
  <div class="c__user">
    <div class="c__user--avatar">
      <img :src="user.avatar" :alt="name(user)" />
    </div>
    <div class="c__user--name">{{ user.id }} : {{ name(user) }}</div>
  </div>
</template>
<script>
export default {
  name: "NewComponent",
  props: {
    user: {}
  },
  methods: {
    name(user) {
      return user.first_name + " " + user.last_name;
    }
  }
};
</script>
<style scoped lang="scss">
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
