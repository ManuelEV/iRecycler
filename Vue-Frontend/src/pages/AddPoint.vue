<template>
  <div class="row justify-content-center">
    <div class="col-xl-10 col-lg-5 col-md-6">
      <user-card></user-card>
      <members-card></members-card>
    </div>
  </div>
</template>
<script>
import UserCard from "./AddPoint/UserCard.vue";
import MembersCard from "./AddPoint/MembersCard.vue";
export default {
  components: {
    UserCard,
    MembersCard
  }
};
</script>
<style>
</style>
