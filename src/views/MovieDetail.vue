<template>
  <div class="movie-detail">
    <div class="background-detail"></div>
    <div class="movie-detail-content">
      <div class="container margin-top-200">
        <div class="movie-detail-main row">
          <div class="col-6 col-md-3" style="z-index: 1">
            <img src="../assets/img/img-movie.jpg" alt="" />
            <Button btnText="Xem phim" icon="bi bi-play-fill margin-right" />
          </div>
          <div class="col-md-9 main" style="z-index: 1">
            <h1 class="title">The Witcher: Nightmare of the Wolf</h1>
            <h2 class="subtitle">Thợ săn quái vật: Ác mộng của Sói (2021)</h2>
            <div class="meta">Thời lượng: 1 giờ 23 phút</div>
            <div class="meta">Rate: 9.6</div>
            <div class="movie-type">
              <div class="item-type-movie">Hành động</div>
              <div class="item-type-movie">Giật gân</div>
              <div class="item-type-movie">Kinh dị</div>
            </div>
            <div class="horizontal">
              <table>
                <tbody>
                  <tr>
                    <td class="color-ccc">ĐẠO DIỄN</td>
                    <td class="fontw-700">Han Kwwang-Il</td>
                  </tr>
                  <tr>
                    <td class="color-ccc">KỊCH BẢN</td>
                    <td class="fontw-700">Beau Demayo</td>
                  </tr>
                  <tr>
                    <td class="color-ccc">QUỐC GIA</td>
                    <td class="fontw-700">Hàm Quốc</td>
                  </tr>
                  <tr>
                    <td class="color-ccc">KHỞI CHIẾU</td>
                    <td class="fontw-700">28/08/2021</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="intro">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit
              beatae voluptatum laudantium facilis eos saepe blanditiis, itaque
              laboriosam sint magni error harum id voluptas ullam recusandae
              atque neque explicabo?
            </div>
            <h3 class="fontw-700">DIỄN VIÊN</h3>
            <div class="list-actors">
              <div class="container">
                <div class="row">
                  <div class="col item-actor">
                    <div class="item-actor-img"></div>
                    <div class="item-actor-name fontw-700">Nguyễn Văn A</div>
                  </div>
                  <div class="col item-actor">
                    <div class="item-actor-img"></div>
                    <div class="item-actor-name fontw-700">Nguyễn Văn A</div>
                  </div>
                  <div class="col item-actor">
                    <div class="item-actor-img"></div>
                    <div class="item-actor-name fontw-700">Nguyễn Văn A</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="fontw-700">TRAILER</h3>
            <div class="container">
              <div class="row">
                <div class="trailer-movie col-lg-2">
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
  </div>
</template>

<script>
import Button from "../components/base/BaseButton.vue";
export default {
  name: "MovieDetail",
  components: { Button },
};
</script>

<style scoped>
@import url("../css/views/MovieDetail.css");
</style>
