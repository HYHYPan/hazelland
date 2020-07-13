<template>
  <div class="container">
    <NavBar />

    <main class="content">

      <section class="main-banner bottom-border">
        <div class="main-img">
          <img src="~/assets/image/main.png" />
        </div>

        <div class="title-box">
          <div class="title">Hazel Pan</div>
          <div class="subtitle">A F2E in Taipei</div>
        </div>
      </section>

      <section class="about bottom-border">
        <div class="personal-img">
          <img src="~/assets/image/personal-img.png" />
        </div>
        <div class="profile">
          A women in Taipei
        </div>
      </section>

      <section class="exprience bottom-border">
        <Chart />
        <div class="exprience">

        </div>
      </section>

    </main>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import NavBar from "~/components/NavBar.vue";
import Chart from "~/components/Chart.vue";

export default {
  components: {
    Logo,
    NavBar,
    Chart
  },
  data() {
    return {};
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
    width: 1280px;
    height: auto;
    display: flex;
    flex-direction: column;

    section {
      width: 100%;
      padding:30px;
    }

    .main-banner {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .main-img {
        img {
          width: 500px;
          height: 500px;
        }
      }
      .title-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      // background-image: url('https://avatars3.githubusercontent.com/u/23360933?s=280&v=4');
      // background: url('https://avatars3.githubusercontent.com/u/23360933?s=280&v=4');

      // background: url('./assets/image/main.png');
    }

    .about {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .personal-img{
        display: flex;
        width:400px;
        border-radius: 50px;
        border: 3px solid white;
        margin: 10px;
        overflow: hidden;
        img{
          width:550px;
          height:550px;
        }
      }
      .profile{
        display: flex;
        margin: 10px;
        border: 1px solid white;
      }
    }

    .exprience {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
