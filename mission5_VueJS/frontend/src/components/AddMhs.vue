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
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "AddMhs",
  data() {
    return {
      mhsName: "",
      mhsNim: "",
    };
  },
  methods: {
    // Create New Mahasiswa
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/mhs", {
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
