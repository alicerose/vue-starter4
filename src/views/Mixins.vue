<template>
  <section>
    <h1>Mixins test page</h1>
    <h2>URL Params Parser</h2>
    <div>
      {{ getUrlQueries() }}
    </div>
  </section>
</template>

<script>
export default {
  name: "mixins"
};
</script>

<style scoped></style>
