<template>
  <div style="padding: 100px; padding-top: 20px">
    <div class="field">
      <label class="label">Nama Mahasiswa</label>
      <div class="control">
        <input class="input" type="text" placeholder="Nama Mahasiswa" v-model="mhsName" />
      </div>
    </div>

    <div class="field">
      <label class="label">NIM</label>
      <div class="control">
        <input class="input" type="text" placeholder="NIM" v-model="mhsNim" />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateProduct">UPDATE</button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "EditMhs",
  data() {
    return {
      mhsName: "",
      mhsNim: "",
    };
  },
  created: function () {
    this.getMhsById();
  },
  methods: {
    // Get Mahasiswa By Id
    async getMhsById() {
      try {
        const response = await axios.get(`http://localhost:5000/mhs/${this.$route.params.id}`);
        this.mhsName = response.data.mhs_name;
        this.mhsNim = response.data.mhs_nim;
      } catch (err) {
        console.log(err);
      }
    },

    // Update Mahasiswa
    async updateProduct() {
      try {
        await axios.put(`http://localhost:5000/mhs/${this.$route.params.id}`, {
          mhs_name: this.mhsName,
          mhs_nim: this.mhsNim,
        });
        this.mhsName = "";
        this.mhsNim = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
