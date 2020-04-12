<template>
  <div class="team_member--container general-container">
    <h2 class="team_container--title mb-5">
      Csapatunk
    </h2>
    <div class="team_tile--container">
      <TeamMemberTile v-for="(member, index) in teamMembers" :key="member.name" :name="member.name" :field="member.field" :picture="member.image"></TeamMemberTile>
    </div>
  </div>
</template>

<script>
  import TeamMemberTile from "./TeamMemberTile";
  export default {
    name: "TeamContainer",
    components: {TeamMemberTile},
    data (){
      return {
        teamMembers: {
          Eszter: {
            name: 'Csécsei Eszter',
            field: 'Kollektíva',
            image: '/img/team/csapat-Eszter.jpg'
          },
          Berenike: {
            name: 'Hegedűs Bereniké',
            field: 'UI/UX, webdesign',
            image: '/img/team/csapat-logo.png'
          },
          Mark: {
            name: 'Juhász Márk',
            field: 'Backend',
            image: '/img/team/csapat-Mark.jpg'
          },
          Dora: {
            name: 'Kiss Dóra',
            field: 'Logó/Grafika',
            image: '/img/team/csapat-logo.png'
          },
          Norbert: {
            name: 'Magyari Norbert',
            field: 'Frontend',
            image: '/img/team/csapat-Norbert.jpg'
          },
          Judit: {
            name: 'Makai Judit',
            field: 'Kollektíva',
            image: '/img/team/csapat-Judit.jpg'
          },
          Balazs: {
            name: 'Varga Balázs',
            field: 'Kollektíva',
            image: '/img/team/csapat-Balazs.jpg'
          },
          Krisztian: {
            name: 'Wolf Krisztián',
            field: 'Marketing',
            image: '/img/team/csapat-Krisztian.jpg'
          },

        }

      }
    }
  };
</script>

<style scoped>

  .team_container--title {
    text-align: center
  }

  .team_tile--container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

</style>
