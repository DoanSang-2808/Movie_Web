<template>
  <div class="position-ab" :class="{ 'show-form': isShow }">
    <div class="sub-position-ab">
      <div class="wrapper-form">
        <div class="header-form">
          <h5><b>CHI TIẾT</b></h5>
          <i class="bi bi-x-lg" @click="btnCloseOnclick"></i>
        </div>
        <div class="main-form" id="scroll" ref="form">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-6 wrapper-field-label">
                <label>Tên phim (VN)</label>
                <div class="input-label">
                  <InputField
                    :value="movie.movienamevn"
                    keyword="movienamevn"
                    @changeInput="changeInput"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6 wrapper-field-label">
                <label>Tên phim (EN)</label>
                <div class="input-label">
                  <InputField
                    :value="movie.moviename"
                    keyword="moviename"
                    @changeInput="changeInput"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6 wrapper-field-label">
                <label>Năm phát hành</label>
                <div class="select">
                  <select class="select-css" v-model="movie.year">
                    <option selected value="2021">2021</option>
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
              <div class="col-12 col-md-6 wrapper-field-label">
                <label>Thời lượng</label>
                <div class="input-label">
                  <InputField
                    :value="movie.timeduration"
                    keyword="timeduration"
                    @changeInput="changeInput"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6 wrapper-field-label">
                <label>Đạo diễn</label>
                <div class="input-label">
                  <InputField
                    :value="movie.director"
                    keyword="director"
                    @changeInput="changeInput"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6 wrapper-field-label">
                <label>Diễn viên</label>
                <div class="input-label">
                  <InputField
                    :valueArray="movie.actors"
                    keyword="actors"
                    @changeInput="changeInputArray"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6 wrapper-field-label">
                <label>Quốc gia</label>
                <div class="select">
                  <select class="select-css" v-model="movie.national">
                    <option selected value></option>
                    <option
                      v-for="item of this.nationalList"
                      :key="item.id"
                      :value="item"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-12 wrapper-field-label">
                <label>Thể loại</label>
                <div class="container-fluid">
                  <div class="row row-checkbox">
                    <div
                      class="col-3 checkbox"
                      v-for="item of this.typeMovieList"
                      :key="item.id"
                    >
                      <input
                        class="check-box"
                        type="checkbox"
                        :id="item"
                        :value="item"
                        v-model="movie.typemovie"
                      />
                      <label class="label-check-box" :for="item">{{
                        item
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 wrapper-field-label">
                <label>Link phim</label>
                <div class="input-label">
                  <InputField
                    :value="movie.movielink"
                    keyword="movielink"
                    @changeInput="changeInput"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6 wrapper-field-label">
                <label>Link trailer</label>
                <div class="input-label">
                  <InputField
                    :value="movie.trailerlink"
                    keyword="trailerlink"
                    @changeInput="changeInput"
                  />
                </div>
              </div>
              <div class="col-12 wrapper-field-label">
                <label>Ảnh đại diện</label>
                <div class="input-file">
                  <InputFile
                    :value="movie.imagelink"
                    keyword="imagelink"
                    @changeInput="changeInputFile"
                  />
                  <img :src="image" />
                </div>
              </div>
              <div class="col-12 wrapper-field-label">
                <label>Ảnh bìa</label>
                <div class="input-file">
                  <InputFile
                    :value="movie.imagebackgroundlink"
                    keyword="imagebackgroundlink"
                    @changeInput="changeInputFile"
                  />
                  <img :src="imagebackground" />
                </div>
              </div>
              <div class="col-12 wrapper-field-label">
                <label>Mô tả</label>
                <div class="">
                  <textarea
                    rows="5"
                    cols="60"
                    v-model="movie.description"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-form">
          <Button
            btnText="Lưu"
            icon="bi bi-save"
            @btnOnclick="btnSaveOnclick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "../components/base/InputField.vue";
import InputFile from "../components/base/InputFile.vue";
import Button from "../components/base/BaseButton.vue";
import axios from "axios";
import VueCookies from "vue-cookies";
export default {
  name: "ModalForm",
  components: { InputField, InputFile, Button },
  data() {
    return {
      isShow: false, // show form
      movie: {},
      image: "",
      imagebackground: "",
      token: VueCookies.get("Account").token,
      nationalList: [],
      typeMovieList: [],
      formMode: "",
      idMovie: "",
    };
  },
  created() {
    this.getTypeMovieList();
    this.getNationalList();
  },
  methods: {
    /**
     * Hàm xử lí sự kiện mở modal
     * Author: DTSang(27/09)
     */
    showModalForm(data1, data2) {
      this.isShow = !this.isShow;
      this.movie = data1;
      this.formMode = data2;
      if (data2 == 1) {
        this.idMovie = data1._id;
      }
    },
    /**
     * Hàm xử lí sự kiện khi bấm vào nút đóng form
     * Author: DTSang(27/09)
     */
    btnCloseOnclick() {
      this.isShow = !this.isShow;
      this.$emit("closeModalForm");
    },
    /**
     * Hàm cập nhật lại lại movie khi nhập liệu input
     * Author: DTSang(27/09)
     */
    changeInput(data) {
      this.movie[data[0]] = data[1];
    },
    changeInputArray(data) {
      this.movie[data[0]] = data[1].split(",");
    },
    changeInputFile(data) {
      this.movie[data[0]] = data[1];
      this.createImage(data[0], data[1]);
    },
    /**
     * Hàm gọi hiện ảnh priview khi chọn input tyupe file
     * Author: DTSang(28/09)
     */
    createImage(typeImage, file) {
      //this.image = new Image();
      let reader = new FileReader();
      let self = this;
      reader.onload = (e) => {
        if (typeImage == "imagelink") {
          self.image = e.target.result;
        } else {
          self.imagebackground = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    },
    /**
     * Hàm xử lí sự kiện bấm vào nút lưu
     * AuthorL: DTSang(28/09)
     */
    btnSaveOnclick() {
      let self = this;
      let formData = new FormData();
      formData.append("movienamevn", this.movie.movienamevn);
      formData.append("moviename", this.movie.moviename);
      formData.append("year", this.movie.year);
      formData.append("timeduration", this.movie.timeduration);
      formData.append(
        "director",
        (this.movie.director =
          this.movie.director == null ? "" : this.movie.director)
      );
      formData.append("national", this.movie.national);
      formData.append("movielink", this.movie.movielink);
      formData.append("trailerlink", this.movie.trailerlink);
      let actorsArr = this.movie.actors;
      let actors = "";
      for (let i = 0; i < actorsArr.length; i++) {
        actors += actorsArr[i] + ",";
      }
      formData.append("actors", actors.slice(0, -1));
      let typeMovieArr = this.movie.typemovie;
      let typeMovie = "";
      for (let i = 0; i < typeMovieArr.length; i++) {
        typeMovie += typeMovieArr[i] + ",";
      }
      formData.append("typemovie", typeMovie.slice(0, -1));
      formData.append("description", this.movie.description);
      formData.append("image", this.movie.imagelink);
      formData.append("imagebackground", this.movie.imagebackgroundlink);
      if (this.typeMode == 0) {
        axios
          .post(`${process.env.VUE_APP_ROOT_API}/createmovie`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
              token: this.token, // eslint-disable-line
            },
          })
          .then((response) => {
            self.$toast(response.data.message, {
              timeout: 2000,
            });
            self.$emit("reload");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .put(
            `${process.env.VUE_APP_ROOT_API}/updatemovie/${this.idMovie}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                token: this.token, // eslint-disable-line
              },
            }
          )
          .then((response) => {
            self.$toast(response.data.message, {
              timeout: 2000,
            });
            self.$emit("reload");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.btnCloseOnclick();
    },
    /**
     * Hàm gọi các thể loại phim và quốc gia từ api
     * Author: DTSang(29/09)
     */
    getTypeMovieList() {
      let self = this;
      axios
        .get(`${process.env.VUE_APP_ROOT_API}/gettypemovie`)
        .then((response) => {
          self.typeMovieList = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getNationalList() {
      let self = this;
      axios
        .get(`${process.env.VUE_APP_ROOT_API}/getnationalmovie`)
        .then((response) => {
          self.nationalList = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    movie: function () {
      this.image = this.movie.imagelink;
      this.imagebackground = this.movie.imagebackgroundlink;
    },
  },
};
</script>

<style scoped>
.position-ab {
  width: 100%;
  height: calc(100% - 56px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: none;
}
.sub-position-ab {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper-form {
  height: 700px;
  width: 600px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
  color: #000;
}
@media only screen and (max-width: 767px) {
  .wrrapper-form {
    width: 500px;
  }
}
.header-form {
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
}
.main-form {
  width: 100%;
  height: 85%;
  padding: 2rem 0 1rem;
  overflow: auto;
}
#scroll::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}
#scroll::-webkit-scrollbar-thumb {
  background-color: #000;
}
#scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 4px;
}
.wrapper-field-label {
  text-align: left !important;
}
label {
  font-weight: 700;
  margin: 1rem 0 0.5rem;
}
.input-label {
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 1rem;
  display: flex;
  align-items: center;
}
/* .input-file {
  height: 40px;
} */
textarea {
  outline: none;
  padding: 0 1rem;
}
.footer-form {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  border-top: 1px solid #000;
}
.show-form {
  display: block;
}
img {
  width: 30%;
  display: block;
  margin: 10px 0;
}
.check-box {
  height: 50%;
  width: 20%;
}
.label-check-box {
  margin: 0 !important;
}
.checkbox {
  padding-right: 0 !important;
}
</style>
