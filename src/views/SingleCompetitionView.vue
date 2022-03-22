<template>
  <div class="l-single-competition">
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Primary hero</p>
        <p class="subtitle">Primary subtitle</p>
      </div>
    </section>
    <div class="container is-widescreen">
      <section class="section">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </h2>

        <article class="message is-dark">
          <div class="message-header">
            <p>Dark</p>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </div>
        </article>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SingleCompetitionView',
  data() {
    return {
      competitionList: [
        { id: 1, name: 'Glozan Method Cup', date: '11:09 PM - 1 Jan 2022' },
        {
          id: 2,
          name: 'Backi Jarak Method Cup',
          date: '11:09 PM - 1 Jan 2022',
        },
      ],
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  max-width: 80%;
  margin: 0 auto;
}
</style>
