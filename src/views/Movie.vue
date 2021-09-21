<template>
  <div class="movie-wrapper">
    <div class="content" :class="{ hasNotLogin: isShow }">
      <h1><b>Các bộ phim lẻ mới nhất, được cập nhật liên tục</b></h1>
      <h3>Xem ở mọi nơi. Hủy bất kì lúc nào !</h3>
      <h6>Bạn đã sẵn sàng chưa ?</h6>
    </div>
    <div class="content-main" :class="{ hasLogin: isShow }">
      <div class="filter-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="column col-xs-6 col-sm-6 col-md-3">
              <div class="field">
                <label class="label">Thể loại:</label>
                <div class="control">
                  <div class="select" @click="optionFilterTypeOnclick">
                    <select class="select-css">
                      <option selected value>- Tất cả -</option>
                      <option value="Tình Cảm">Tình cảm</option>
                      <option value="Hành động">Hành động</option>
                      <option value="khoa học viễn tưởng">
                        Khoa học viễn tưởng
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column col-xs-6 col-sm-6 col-md-3">
              <div class="field">
                <label class="label">Quốc gia:</label>
                <div class="control">
                  <div class="select" @click="optionFilterNationalOnclick">
                    <select class="select-css">
                      <option selected value>- Tất cả -</option>
                      <option value="Mỹ">Mỹ</option>
                      <option value="Hàn Quốc">Hàn Quốc</option>
                      <option value="Trung Quốc">Trung Quốc</option>
                      <option value="Thái Lan">Thái Lan</option>
                      <option value="Pháp">Pháp</option>
                      <option value="Nga">Nga</option>
                      <option value="Việt Nam">Việt Nam</option>
                      <option value="Đài Loan">Đài loan</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column col-xs-6 col-sm-6 col-md-3">
              <div class="field">
                <label class="label">Năm:</label>
                <div class="control">
                  <div class="select" @click="optionFilterYearOnclick">
                    <select class="select-css">
                      <option selected value>- Tất cả -</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="-2015">Trước 2015</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column col-xs-6 col-sm-6 col-md-3">
              <div class="field">
                <label class="label">Sắp xếp:</label>
                <div class="control">
                  <div class="select">
                    <select class="select-css">
                      <option selected value="update">Ngày cập nhật</option>
                      <option value="publicDate">Ngày phát hành</option>
                      <option value="rating">Ngày đánh giá</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              v-for="item of listMovie"
              :key="item.id"
              :id="item.id"
              @click="movieOnclick(item._id)"
            >
              <a href="#">
                <img :src="item.imagelink" alt="" />
              </a>
              <h3 class="vn-name">
                <a href="#">{{ item.moviename }}</a>
              </h3>
              <h3 class="en-name">
                <a href="#">{{ item.moviename }}</a>
              </h3>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-3 item-movie">
              <a href="#">
                <img src="../assets/img/img-movie.jpg" alt="" />
              </a>
              <h3 class="vn-name">
                <a href="#">Tiếng việt</a>
              </h3>
              <h3 class="en-name">
                <a href="#">Tiếng anh</a>
              </h3>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-3 item-movie">
              <a href="#">
                <img src="../assets/img/img-movie.jpg" alt="" />
              </a>
              <h3 class="vn-name">
                <a href="#">Tiếng việt</a>
              </h3>
              <h3 class="en-name">
                <a href="#">Tiếng anh</a>
              </h3>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-3 item-movie">
              <a href="#">
                <img src="../assets/img/img-movie.jpg" alt="" />
              </a>
              <h3 class="vn-name">
                <a href="#">Tiếng việt</a>
              </h3>
              <h3 class="en-name">
                <a href="#">Tiếng anh</a>
              </h3>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-3 item-movie">
              <a href="#">
                <img src="../assets/img/img-movie.jpg" alt="" />
              </a>
              <h3 class="vn-name">
                <a href="#">Tiếng việt</a>
              </h3>
              <h3 class="en-name">
                <a href="#">Tiếng anh</a>
              </h3>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-3 item-movie">
              <a href="#">
                <img src="../assets/img/img-movie.jpg" alt="" />
              </a>
              <h3 class="vn-name">
                <a href="#">Tiếng việt</a>
              </h3>
              <h3 class="en-name">
                <a href="#">Tiếng anh</a>
              </h3>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-3 item-movie">
              <a href="#">
                <img src="../assets/img/img-movie.jpg" alt="" />
              </a>
              <h3 class="vn-name">
                <a href="#">Tiếng việt</a>
              </h3>
              <h3 class="en-name">
                <a href="#">Tiếng anh</a>
              </h3>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-3 item-movie">
              <a href="#">
                <img src="../assets/img/img-movie.jpg" alt="" />
              </a>
              <h3 class="vn-name">
                <a href="#">Tiếng việt</a>
              </h3>
              <h3 class="en-name">
                <a href="#">Tiếng anh</a>
              </h3>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-3 item-movie">
              <a href="#">
                <img src="../assets/img/img-movie.jpg" alt="" />
              </a>
              <h3 class="vn-name">
                <a href="#">Tiếng việt</a>
              </h3>
              <h3 class="en-name">
                <a href="#">Tiếng anh</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <paginate
        style="margin-top: 2rem"
        :page-count="10"
        :page-range="3"
        :margin-pages="2"
        :prev-text="'Trang trước'"
        :next-text="'Trang sau'"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :page-link-class="'page-link-item'"
        :prev-class="'prev-item'"
        :next-class="'next-item'"
        :prev-link-class="'prev-link-item'"
        :next-link-class="'next-link-item'"
      >
      </paginate>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Movie",
  data() {
    return {
      listMovie: [],
      typeMovie: "",
      nationalMovie: "",
      yearMovie: "",
    };
  },
  created() {
    this.loadMovie();
  },
  computed: {
    /**
     * Hàm tính toán isShow khi isShow ở store thay đổi
     * Author: DTSAng(19/09)
     */
    isShow() {
      return this.$store.state.isShow;
    },
  },
  methods: {
    /**
     * Hàm call dữ liệu hiện thị danh sách phim
     * Author: DTSang(19/09)
     */
    loadMovie() {
      if (this.isShow == true) {
        // let self = this;
        axios
          .get(
            `https://apiwebmovie.herokuapp.com/filter?typemovie=${this.typeMovie}&national=${this.nationalMovie}&year=${this.yearMovie}`
          )
          .then((response) => {
            console.log(response.data);
            this.listMovie = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    /**
     * Hàm bắt sự kiện khi click vào phim trong list
     * Ạuthor: DTSang(19/09)
     */
    movieOnclick(id) {
      console.log(id);
      this.$router.push({ name: "MovieDetail" });
    },
    /**
     * Ham bắt sự kiện click các option filter
     * Author: DTSang(20/09/2021)
     */
    optionFilterTypeOnclick() {
      this.typeMovie = event.target.options[event.target.selectedIndex].value;
    },
    optionFilterNationalOnclick() {
      this.nationalMovie =
        event.target.options[event.target.selectedIndex].value;
    },
    optionFilterYearOnclick() {
      this.yearMovie = event.target.options[event.target.selectedIndex].value;
    },
  },
  watch: {
    /**
     * Lắng nghe sựu thay đổi của typeMovie, nationalMovie, yearMovie
     * Author: DTSang(21/09)
     */
    typeMovie: function () {
      this.loadMovie();
    },
    nationalMovie: function () {
      this.loadMovie();
    },
    yearMovie: function () {
      this.loadMovie();
    },
  },
};
</script>

<style>
@import url("../css/views/Movie.css");
.page-item {
  border: 1px solid #ccc;
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active {
  background: #fff;
}
.active .page-link-item {
  background: #fff;
  color: #000 !important;
}
.page-link-item,
.prev-link-item,
.next-link-item {
  text-decoration: none;
  color: #fff;
}
.page-item:hover .page-link-item {
  color: yellow;
}
.prev-item,
.next-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.prev-item:hover .prev-link-item,
.next-item:hover .next-link-item {
  color: yellow;
}
</style>
