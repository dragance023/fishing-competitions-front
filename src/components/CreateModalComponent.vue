<template>
  <modal :height="'auto'" :scrollable="true" name="create-modal">
    <section class="section">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" />
          Make this competition public.
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button @click="closeModal" class="button is-link is-light">Cancel</button>
      </div>
    </div>
    </section>
  </modal>
</template>

<script>

export default {
  name: 'CreateModalComponent',
  components: {},
    methods: {
    closeModal() {
      this.$modal.hide('create-modal');
    },
  },
};
</script>

<style>
@import 'bulma/css/bulma.css';
</style>
