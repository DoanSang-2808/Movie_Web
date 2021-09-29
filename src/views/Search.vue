<template>
  <div class="search-wrapper">
    <div class="input">
      <input type="text" placeholder="Nhập trên phim ..." v-model="keySearch" />
      <div class="icon-exit">
        <i
          class="bi bi-x-lg"
          :class="{ 'show-icon': this.keySearch !== '' }"
          @click="deleteKeySearch"
        ></i>
      </div>
    </div>
    <div class="list-movie-wrapper">
      <h2>
        <span>Danh sách phim</span>
        <hr style="margin-top: 0.5rem" />
      </h2>
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-xs-6 col-sm-6 col-md-3 item-movie"
            v-for="item of listMovieFind"
            :key="item.id"
            :id="item._id"
            @click="movieOnclick(item._id)"
          >
            <div>
              <img :src="item.imagelink" alt="" />
            </div>
            <h3 class="vn-name">
              <a href="">{{ item.movienamevn }}</a>
            </h3>
            <h3 class="en-name">
              <a href="">{{ item.moviename }}</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      listMovieFind: [],
      keySearch: "",
    };
  },
  watch: {
    keySearch: function () {
      axios
        .get(`${process.env.VUE_APP_ROOT_API}/findmovie?key=${this.keySearch}`)
        .then((response) => {
          this.listMovieFind = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  methods: {
    /**
     * Hàm xử lí sự kiện khi bán vào nút "x"
     * Author: DTSang(23/09)
     */
    deleteKeySearch() {
      this.keySearch = "";
    },
    /**
     * Hàm bắt sự kiện khi click vào phim trong list
     * Ạuthor: DTSang(23/09)
     */
    movieOnclick(id) {
      this.$router.push({ name: "MovieDetail", params: { id: id } });
    },
  },
};
</script>

<style scoped>
@import url("../css/views/Search.css");
</style>
