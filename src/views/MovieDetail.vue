<template>
  <div class="movie-detail">
    <div
      class="background-detail"
      :style="{
        'background-image': `url(${this.movieDetail.imagebackgroundlink})`,
      }"
    ></div>
    <div class="movie-detail-content">
      <div class="container margin-top-200">
        <div class="movie-detail-main row">
          <div class="col-6 col-md-3" style="z-index: 1">
            <img :src="movieDetail.imagelink" alt="" />
            <Button
              btnText="Xem phim"
              icon="bi bi-play-fill margin-right"
              @btnOnclick="btnWatchMovieOnclick()"
            />
          </div>
          <div class="col-md-9 main" style="z-index: 1">
            <h1 class="title">{{ movieDetail.moviename }}</h1>
            <h2 class="subtitle">
              {{ movieDetail.movienamevn }}<span>({{ movieDetail.year }})</span>
            </h2>
            <div class="meta">Thời lượng: {{ movieDetail.timeduration }}</div>
            <div class="meta">Rate: {{ this.rateMovie }}</div>
            <div class="movie-type">
              <div
                class="item-type-movie"
                v-for="element of movieDetail.typemovie"
                :key="element.id"
              >
                {{ element }}
              </div>
            </div>
            <div class="horizontal">
              <table>
                <tbody>
                  <tr>
                    <td class="color-ccc">ĐẠO DIỄN</td>
                    <td class="fontw-700">{{ movieDetail.director }}</td>
                  </tr>
                  <tr>
                    <td class="color-ccc">KỊCH BẢN</td>
                    <td class="fontw-700">Beau Demayo</td>
                  </tr>
                  <tr>
                    <td class="color-ccc">QUỐC GIA</td>
                    <td class="fontw-700">{{ movieDetail.national }}</td>
                  </tr>
                  <tr>
                    <td class="color-ccc">KHỞI CHIẾU</td>
                    <td class="fontw-700">28/08/2021</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="intro">
              {{ movieDetail.description }}
            </div>
            <h3 class="fontw-700">DIỄN VIÊN</h3>
            <div class="list-actors">
              <div class="container">
                <div class="row">
                  <div
                    class="col item-actor"
                    v-for="item of movieDetail.actors"
                    :key="item.id"
                  >
                    <div class="item-actor-img"></div>
                    <div class="item-actor-name fontw-700">{{ item }}</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="fontw-700">TRAILER</h3>
            <div class="container">
              <div class="row">
                <div
                  class="trailer-movie col-lg-2"
                  @click="playTrailerMovie"
                  :style="{
                    'background-image': `url(${this.movieDetail.imagebackgroundlink})`,
                  }"
                >
                  <div class="play-vd">
                    <div class="play-vd-wrapper">
                      <i class="bi bi-play-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="over" :class="{ showVideo: openPlayVideo }">
      <div class="exit-video">
        <i class="bi bi-x-lg left" @click="exitPlayMovie"></i>
      </div>
      <div class="wrapper-video">
        <iframe
          width="80%"
          height="80%"
          :src="trailerlink"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Button from "../components/base/BaseButton.vue";
export default {
  name: "MovieDetail",
  components: { Button },
  props: ["id"],
  data() {
    return {
      movieDetail: new Object(),
      rateMovie: "0",
      trailerlink: "https://www.youtube.com/embed/",
      openPlayVideo: false,
    };
  },
  created() {
    this.loadMovie();
    this.loadRateMovie();
  },
  methods: {
    /**
     * Hàm lấy dữ liệu của 1 phim
     * Author: DTSang(23/09)
     */
    loadMovie() {
      let self = this;
      if (this.id !== undefined) {
        axios
          .get(`${process.env.VUE_APP_ROOT_API}/getmovie/${this.id}`)
          .then((response) => {
            self.movieDetail = response.data;
            self.trailerlink += response.data.trailerlink;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    /**
     * Hàm xử lí sự kiện click vào xem trailer phim
     * Author: DTSang(23/09)
     */
    playTrailerMovie() {
      this.openPlayVideo = true;
    },
    /**
     * Hàm xử lí sự kiện khi bấm vào nút đóng video
     * Author: DTSang(23/09)
     */
    exitPlayMovie() {
      this.openPlayVideo = false;
    },
    /**
     * Hàm xử sự kiện bấm vào nút xem phim
     * Author: DTSang(27/09)
     */
    btnWatchMovieOnclick() {
      this.routeWatchMovie();
    },
    /**
     * Hàm điều hướng khi bấm vào nút xem phím
     * Author: DTSang(29/09)
     */
    routeWatchMovie() {
      this.$router.push({
        path: `/movies/${this.id}/watching`,
        params: { id: this.id },
      });
    },
    /**
     * Hàm load đánh giá của phim
     * Author: DTSang(29/09)
     */
    loadRateMovie() {
      let self = this;
      if (this.id !== undefined) {
        axios
          .get(`${process.env.VUE_APP_ROOT_API}/getrateavgbymovie/${this.id}`)
          .then((response) => {
            self.rateMovie = response.data.avg;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
@import url("../css/views/MovieDetail.css");
</style>
