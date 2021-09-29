<template>
  <div class="wrapper-cms">
    <div class="container-fluid height100">
      <div class="row height100">
        <div class="col-2 col-xl-2 menu">
          <div class="menu-item">
            <div class="menu-item-icon">
              <i class="bi bi-reception-4"></i>
            </div>
            <div class="menu-item-text">Dashbroad</div>
          </div>
          <div class="menu-item active">
            <div class="menu-item-icon">
              <i class="bi bi-film"></i>
            </div>
            <div class="menu-item-text">Movie</div>
          </div>
        </div>
        <div class="col-10 col-xl-10 content">
          <div class="content-title">
            <h1 class="title"></h1>
            <Button
              btnText="Thêm phim mới"
              icon="bi bi-plus-lg"
              @btnOnclick="btnAddMovieOnclick"
            />
          </div>
          <div class="content-main">
            <div class="main-search">
              <div class="main-search-left col-6 col-md-4">
                <i class="bi bi-search"></i>
                <InputField @changeInput="findMovie" ref="input" />
              </div>
              <div class="main-search-right" @click="reloadMovies">
                <i class="bi bi-arrow-clockwise"></i>
              </div>
            </div>
            <div class="list-movie">
              <hr />
              <div class="scrollbar" id="scroll">
                <table>
                  <tr>
                    <th width="150px;" min-width="100px;">Tên phim</th>
                    <th width="70px;">Năm</th>
                    <th width="120px;">Thời lượng</th>
                    <th width="100px;">Quốc gia</th>
                    <th width="150px;">Thể loại</th>
                    <th width="100px;">Đạo diễn</th>
                    <th width="150px;">Diễn viên</th>
                    <th width="300px;">Mô tả</th>
                    <th width="80px;" class="no-border-r"></th>
                  </tr>
                  <tbody>
                    <tr v-for="item of listMovie" :key="item.id">
                      <td :title="item.moviename">{{ item.moviename }}</td>
                      <td :title="item.year">{{ item.year }}</td>
                      <td :title="item.timeduration">
                        {{ item.timeduration }}
                      </td>
                      <td :title="item.national">{{ item.national }}</td>
                      <td :title="item.typemovie">{{ item.typemovie }}</td>
                      <td :title="item.director">{{ item.director }}</td>
                      <td :title="item.actors">{{ item.actors }}</td>
                      <td :title="item.description">{{ item.description }}</td>
                      <td class="no-border-r">
                        <i
                          class="bi bi-pencil-square edit"
                          title="Sửa thông tin phim"
                          @click="btnEditMovieOnclick(item._id)"
                        ></i>
                        <i
                          class="bi bi-trash delete"
                          title="Xóa phim"
                          @click="btnDeleteMovieOnclick(item._id)"
                        ></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalForm
      ref="modalForm"
      @closeModalForm="closeModalForm"
      @reload="reloadMovies"
    />
    <div class="cms-over" :class="{ 'show-over': isShow }"></div>
  </div>
</template>

<script>
import Button from "../components/base/BaseButton.vue";
import InputField from "../components/base/InputField.vue";
import axios from "axios";
import ModalForm from "../views/ModalForm.vue";
export default {
  name: "MovieCMS",
  components: {
    Button,
    InputField,
    ModalForm,
  },
  data() {
    return {
      listMovie: [],
      typeMovie: "",
      nationalMovie: "",
      yearMovie: "",
      isShow: false,
      movie: {},
      formMode: "",
      keyword: "",
    };
  },
  created() {
    this.loadMovies();
  },
  methods: {
    /**
     * Hàm gọi toàn bộ danh sách phim
     * Author: DTSang(26/09)
     */
    loadMovies() {
      let self = this;
      axios
        .get(`${process.env.VUE_APP_ROOT_API}/filter`, {
          params: {
            pageIndex: "",
            pageSize: "",
            typemovie: this.typeMovie,
            national: this.nationalMovie,
            year: this.yearMovie,
          },
        })
        .then((response) => {
          self.listMovie = response.data.movies;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * Hàm xử lí sự kiện bấm nút thêm phim mới
     * Author: DTSang(27/09)
     */
    btnAddMovieOnclick() {
      this.movie = {
        typemovie: [],
        actors: [],
      };
      this.formMode = 0;
      this.isShow = true;
    },
    /**
     * Hàm xử lí sự kiện đóng cms-over khi đóng modal
     * Author: DTSang(27/09)
     */
    closeModalForm() {
      this.movie = {};
      this.isShow = false;
    },
    /**
     * Hàm lấy về thoogn tin bộ phim theo id
     * Author: DTSang(27/09)
     */
    getMovieById(id) {
      return new Promise((res) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_API}/getmovie/${id}`)
          .then((response) => {
            res(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
    /**
     * Hàm xử lí sự kiện khi bấm vào nút edit phim
     * Author: DTSang(27/09)
     */
    async btnEditMovieOnclick(id) {
      this.movie = await this.getMovieById(id);
      this.formMode = 1;
      this.isShow = true;
    },
    /**
     * Hàm xử lí sự kiện khi bấm nút xóa
     * Author: DTSang(28/09)
     */
    async btnDeleteMovieOnclick(id) {
      this.movie = await this.getMovieById(id);
      if (
        confirm("Bạn có muốn xóa phim " + this.movie.moviename + " hay không ?")
      ) {
        axios
          .post(`${process.env.VUE_APP_ROOT_API}/deletemovie/${id}`, {
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
      }
    },
    /**
     * Hàm xử lí sự kiện bấm vào nút reload
     * Author: DTSang(28/09)
     */
    reloadMovies() {
      this.loadMovies();
      this.$refs.input.reset();
    },
    /**
     * Tìm kiếm phimg theo key word
     * Author: DTSang(28/09)
     */
    findMovie(data) {
      let self = this;
      axios
        .get(`${process.env.VUE_APP_ROOT_API}/findmovie?key=${data[1]}`)
        .then((response) => {
          self.listMovie = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    /**
     * Lắng nghe sự thay đổi của isShow
     * Author: DTSang(27/09)
     */
    isShow: function () {
      if (this.isShow == true) {
        this.$refs.modalForm.showModalForm(this.movie, this.formMode);
      }
    },
  },
};
</script>

<style scoped>
.wrapper-cms {
  width: 100%;
  height: calc(100vh - 56px);
  position: relative;
}
.row > * {
  padding: 0 !important;
}
.menu {
  border-right: 1px solid #ccc;
}
.menu-item {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 20px;
}
.menu-item:hover {
  background-color: #0f161b;
}
.menu-item-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.active {
  background-color: #0f161b;
  padding-left: 10px;
  border-left: 10px solid green;
}
.content {
  padding: 0 1rem 1rem !important;
  height: 100%;
}
.content .content-title {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-weight: 700;
  color: #cf2122;
}
.content .content-main {
  height: 90%;
  width: 100%;
  background: #0f161b;
}
.content .content-main .main-search {
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}
.content .content-main .main-search .main-search-left {
  height: 40px;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
}
.main-search-left i {
  color: #000;
  margin-left: 0.5rem;
}
.main-search-right {
  height: 40px;
  width: 40px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-search-right:hover {
  cursor: pointer;
  background: #23323d;
  border-color: #23323d;
}
.content .content-main .list-movie {
  height: 90%;
  width: 100%;
  padding: 1rem;
}
table {
  width: 100%;
  table-layout: fixed;
}
table tr {
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 40px;
}
td,
th {
  border-right: 1px dotted #ccc;
  padding: 0 0.5rem !important;
}
table th,
table td {
  text-align: left;
}
table tbody tr td {
  padding: 0;
  font-weight: 500 !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.no-border-r {
  border-right: none !important;
}
table tbody tr td i {
  margin-right: 0.5rem;
}
table tbody tr td .edit:hover {
  color: #2167cf;
}
table tbody tr td .delete:hover {
  color: #cf2122;
}
.scrollbar {
  width: 100%;
  height: 90%;
  overflow: auto;
}
#scroll::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}
#scroll::-webkit-scrollbar-thumb {
  background-color: #ccc;
}
#scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
.cms-over {
  position: absolute;
  width: 100vw;
  height: calc(100vh - 56px);
  background: #000;
  opacity: 0.8;
  top: 0;
  left: 0;
  display: none;
}
.show-over {
  display: block;
}
</style>
