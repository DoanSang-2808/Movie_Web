<template>
  <div class="wrapper-form">
    <div class="header-form">
      <h5><b>CHI TIẾT</b></h5>
      <i class="bi bi-x-lg"></i>
    </div>
    <div class="main-form" id="scroll">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-6 wrapper-field-label">
            <label>Tên phim (VN)</label>
            <div class="input-label">
              <InputField />
            </div>
          </div>
          <div class="col-12 col-md-6 wrapper-field-label">
            <label>Tên phim (EN)</label>
            <div class="input-label">
              <InputField />
            </div>
          </div>
          <div class="col-12 col-md-6 wrapper-field-label">
            <label>Năm phát hành</label>
            <div class="select">
              <select class="select-css">
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
              <InputField />
            </div>
          </div>
          <div class="col-12 col-md-6 wrapper-field-label">
            <label>Đạo diễn</label>
            <div class="input-label">
              <InputField />
            </div>
          </div>
          <div class="col-12 col-md-6 wrapper-field-label">
            <label>Diễn viên</label>
            <div class="input-label">
              <InputField />
            </div>
          </div>
          <div class="col-12 col-md-6 wrapper-field-label">
            <label>Quốc gia</label>
            <div class="select">
              <select class="select-css">
                <option selected value></option>
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
          <div class="col-12 col-md-6 wrapper-field-label">
            <label>Thể loại</label>
            <div class="select">
              <select class="select-css">
                <option selected value></option>
                <option value="Tình Cảm">Tình cảm</option>
                <option value="Hành động">Hành động</option>
                <option value="khoa học viễn tưởng">Khoa học viễn tưởng</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-6 wrapper-field-label">
            <label>Link phim</label>
            <div class="input-label">
              <InputField />
            </div>
          </div>
          <div class="col-12 col-md-6 wrapper-field-label">
            <label>Link trailer</label>
            <div class="input-label">
              <InputField />
            </div>
          </div>
          <div class="col-12 wrapper-field-label">
            <label>Ảnh đại diện</label>
            <div class="input-file">
              <InputFile />
            </div>
          </div>
          <div class="col-12 wrapper-field-label">
            <label>Ảnh bìa</label>
            <div class="input-file">
              <InputFile />
            </div>
          </div>
          <div class="col-12 wrapper-field-label">
            <label>Mô tả</label>
            <div class="">
              <textarea rows="5" cols="65"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-form">
      <Button btnText="Lưu" :btnMode="5" icon="bi bi-save" />
    </div>
  </div>
</template>

<script>
import InputField from "../components/base/InputField.vue";
import InputFile from "../components/base/InputFile.vue";
import Button from "../components/base/BaseButton.vue";
export default {
  name: "ModalForm",
  components: { InputField, InputFile, Button },
};
</script>

<style scoped>
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
.input-file {
  height: 40px;
}
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
</style>
