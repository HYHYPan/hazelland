<template>
  <div class="container">
    <NavBar />
    <div class="content">
      <div class="title">The title</div>
      <div class="subtitle">A F2E in Taipei</div>
      <div class="main-img">
         <img src="~/assets/image/main.png">
      </div>

      
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
  justify-content: center;
  align-items: center;
  text-align: center;
  .content {
    background: rgb(255, 231, 209);
    margin-top: 60px;
    width: 100%;
    height: 800px;
    .main-img{
      width:300px;
      height: 300px;
      img{
        width:300px;
      height: 300px;
      }
      // background-image: url('https://avatars3.githubusercontent.com/u/23360933?s=280&v=4');
      // background: url('https://avatars3.githubusercontent.com/u/23360933?s=280&v=4');
     
      // background: url('./assets/image/main.png');
    }
  }
}


</style>
