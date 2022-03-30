<template>
  <main class="l-main">
    <div class="container is-max-desktop">
      <section class="section">
        <div class="tabs">
          <ul>
            <li @click="filterCompetitions('active')" :class="{ 'is-active' : currentFilter === 'active' }">
              <a>Active</a>
            </li>
            <li @click="filterCompetitions('finished')" :class="{ 'is-active' : currentFilter === 'finished' }"><a>Previous</a></li>
          </ul>
        </div>
        <h1 class="title">Large section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </h2>
        <router-link
          v-for="item in getFilteredCompetitions"
          :key="item.id"
          :to="`/competitions/${item.id}`"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://backipetrovacvesti.com/wp-content/uploads/2020/07/DJI_0052-scaled-1.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ item.name }}</p>
                  <p class="subtitle is-6">
                    organizator: @stariDobriVanjaOrganizator
                  </p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </router-link>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      currentFilter: 'active',
      competitionList: [
        {
          id: 1,
          name: 'Glozan Method Cup',
          date: '11:09 PM - 1 Jan 2022',
          status: 'active',
        },
        {
          id: 2,
          name: 'Backi Jarak Method Cup',
          date: '11:09 PM - 1 Jan 2022',
          status: 'finished',
        },
        {
          id: 3,
          name: 'Backi Jarak Method Cup',
          date: '11:09 PM - 1 Jan 2022',
          status: 'finished',
        },
      ],
    };
  },
  computed: {
    getFilteredCompetitions() {
      return this.competitionList.filter(
        (competition) => competition.status === this.currentFilter
      );
    },
  },
  methods: {
    filterCompetitions(filter) {
      console.log(filter);
      this.currentFilter = filter;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l-main {
  max-width: 60%;
  margin: 0 auto;
}
.card {
  margin-bottom: 2rem;
}
</style>
