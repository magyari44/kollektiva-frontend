<template>
  <div class="team_member_tile--container">
    <div class="team_member_tile--picture">
      <img :src="picture" />
    </div>
    <h5 class="team_member_tile--name">{{name}}</h5>
    <p class="team_member_tile--field">{{field}}</p>
  </div>
</template>

<script>
  export default {
    name: "TeamMemberTile",
    props: ['picture', 'name', 'field']
  };
</script>

<style scoped>
  .team_member_tile--container{
    flex: 1 0 21%;
  }

  .team_member_tile--picture img {
    border-radius: 50%;
    max-width: 12rem;
    box-shadow: 0px 5px 5px 0px #adb5bd;
  }

  .team_member_tile--picture {
    margin-bottom: 12px;
  }

  .team_member_tile--container > * {
    text-align: center;
  }

</style>
