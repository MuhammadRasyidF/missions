<template>
  <div style="padding: 100px; padding-top: 20px">
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5">Add</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Nama Mahasiswa</th>
          <th>NIM</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.mhs_id">
          <td>{{ item.mhs_name }}</td>
          <td>{{ item.mhs_nim }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'Edit', params: { id: item.mhs_id } }" class="button is-info is-small">Edit</router-link>
            <a class="button is-danger is-small" @click="deleteMhs(item.mhs_id)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "MhsList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getMhs();
  },

  methods: {
    // Get All Mahasiswa
    async getMhs() {
      try {
        const response = await axios.get("http://localhost:5000/mhs");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Mahasiswa
    async deleteMhs(id) {
      try {
        await axios.delete(`http://localhost:5000/mhs/${id}`);
        this.getMhs();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
