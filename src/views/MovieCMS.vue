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
            <h1 class="title">Quản lí phim</h1>
            <Button btnText="Thêm phim mới" :btnMode="4" icon="bi bi-plus-lg" />
          </div>
          <div class="content-main">
            <div class="main-search">
              <div class="main-search-left col-6 col-md-4">
                <i class="bi bi-search"></i>
                <InputField />
              </div>
              <div class="main-search-right">
                <i class="bi bi-arrow-clockwise"></i>
              </div>
            </div>
            <div class="list-movie">
              <hr />
              <div class="scrollbar" id="scroll">
                <table>
                  <tr>
                    <th width="150px;" min-width="100px;">Tên phim</th>
                    <th width="50px;">Năm</th>
                    <th width="100px;">Thời lượng</th>
                    <th width="100px;">Quốc gia</th>
                    <th width="150px;">Thể loại</th>
                    <th width="100px;">Đạo diễn</th>
                    <th width="150px;">Diễn viên</th>
                    <th width="300px;">Mô tả</th>
                    <th width="80px;" class="no-border-r"></th>
                  </tr>
                  <tbody>
                    <tr v-for="item of listMovie" :key="item.id">
                      <td :title="item.movienamevn">{{ item.movienamevn }}</td>
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
                          title="Sử thông tin phim"
                        ></i>
                        <i class="bi bi-trash delete" title="Xóa phim"></i>
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
    <ModalForm />
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
            pageIndex: 1,
            pageSize: 8,
            typemovie: this.typeMovie,
            national: this.nationalMovie,
            year: this.yearMovie,
          },
        })
        .then((response) => {
          self.listMovie = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.wrapper-cms {
  width: 100%;
  height: calc(100vh - 56px);
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
</style>
