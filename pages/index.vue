<template>
  <div class="container">
    <NavBar />
    <div class="content">
      <div class="section1">
        <div class="main-img">
          <img src="~/assets/image/main.png" />
        </div>

        <div class="title-box">
          <div class="title">Name Name</div>
          <div class="subtitle">A F2E in Taipei</div>
        </div>
      </div>
      <div class="section2"></div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import NavBar from "~/components/NavBar.vue";

export default {
  components: {
    Logo,
    NavBar
  }
};
</script>

<style lang="scss" >
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .content {
    background: rgb(255, 231, 209);
    margin-top: 60px;
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    .section1 {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #333;
      .main-img {
        img {
          width: 500px;
          height: 500px;
        }
      }
      .title-box {
        //  flex:2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      // background-image: url('https://avatars3.githubusercontent.com/u/23360933?s=280&v=4');
      // background: url('https://avatars3.githubusercontent.com/u/23360933?s=280&v=4');

      // background: url('./assets/image/main.png');
    }

    .section2{

    }
  }
}
</style>
