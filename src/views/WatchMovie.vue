<template>
  <div>
    <div class="watch-movie-wrapper">
      <div class="watch-movie">
        <my-video
          :sources="video.sources"
          :options="video.options"
          style="width: 100%; height: 100%"
        ></my-video>
        <h1 class="name-movie">Ký sinh trùng</h1>
        <h3 class="sub-mane-movie">Parasise<span>(2021)</span></h3>
        <div class="description-movie">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          accusamus sed perferendis fugiat? Adipisci aliquid cum veniam numquam
          quisquam corporis, in incidunt placeat ipsam possimus id magnam, ab
          recusandae. Dolorum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sint doloribus delectus doloremque porro explicabo
          quos nisi ullam tempore, aliquid soluta libero dicta. Explicabo at,
          sed molestias aut a accusamus velit.
        </div>
      </div>
    </div>
    <div class="comment-wrapper">
      <div class="comment">
        <div class="title-comment">
          <b>288 bình luận</b>
        </div>
        <hr />
        <div class="input">
          <input type="text" placeholder="Thêm bình luận" charset="UTF-8" />
          <div class="icon-send">
            <i class="bi bi-cursor-fill"></i>
          </div>
        </div>
        <div class="comment-list">
          <div class="comment-item" v-for="item in 10" :key="item.id">
            <div class="img-user"></div>
            <div class="comment-content">
              <div class="user-comment">
                <b>Doàn thị sáng</b>
              </div>
              <div class="comment-main">
                Phim hay lắm =)))) bao giờ ra phần 2 nhỉ ???
                <span>28/08/2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myVideo from "vue-video";
export default {
  name: "WatchMovie",
  components: { myVideo },
  props: ["src"],
  data() {
    return {
      video: {
        sources: [
          {
            src: "https://www.googleapis.com/drive/v3/files/12H41M5wQQAVOS4bZ7QfIEv-SWGbf81rh?key=AIzaSyAR2pX0DsiQXppxQnq4N_qWxg1ND6D6wjQ&alt=media",
            type: "video/mp4",
          },
        ],
        options: {
          // autoplay: true,
        },
      },
    };
  },
};
</script>

<style scoped>
.watch-movie-wrapper {
  width: 100vw;
  height: max-content;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
.watch-movie {
  width: 80%;
  height: 100%;
  background: rgb(107, 107, 107);
  text-align: left;
  color: #000;
  padding: 1rem;
}
#app {
  height: max-content !important;
  background: rgb(107, 107, 107) !important;
  margin-bottom: 4rem;
}
.container {
  padding: 0 !important;
  margin: 0 !important;
}
.name-movie {
  /* text-transform: uppercase; */
  font-weight: 500;
  color: rgb(224, 203, 8);
}
.sub-mane-movie {
  font-size: 20px !important;
  color: #ccc !important;
  margin-bottom: 2rem;
}
.description-movie {
  width: 100%;
  height: 50px;
  background-color: rgb(90, 89, 89);
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 0.5rem;
  color: #ccc;
}
.comment-wrapper {
  width: 100vw;
  height: max-content;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
}
.comment {
  width: 80%;
  height: inherit;
  background: #fff;
  text-align: left;
  color: #000;
  padding: 1rem;
}
.title-comment {
  height: 40px;
  width: 100%;
}
.input {
  background: #fff;
  border: 1 px solid #ccc;
  margin-bottom: 2rem;
}
.input input {
  background: #fff !important;
  color: #000 !important;
  width: calc(100% - 50px);
  border: none;
  outline: none;
}
.icon-send {
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-send i {
  display: block;
  color: #000;
  cursor: pointer;
}
.icon-send i:hover {
  color: blue;
}
.comment-list {
  width: 100%;
  height: max-content;
}
.comment-item {
  width: 100%;
  height: max-content;
  display: flex;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
}
.img-user {
  width: 5%;
  background-image: url("../assets/img/background-avatar.jpeg");
  background-size: contain;
  background-repeat: no-repeat;
}
.comment-content {
  width: 95%;
  padding-left: 1rem;
}
.comment-main span {
  font-size: 15px;
  color: #ccc;
}
.comment-main span:hover {
  text-decoration-line: underline;
  cursor: pointer;
}
</style>
