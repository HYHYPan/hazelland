<template>
  <nav>
      <div class="left ">
             <nuxt-link to="/"> <button class="logo home button--main">HOME</button></nuxt-link>
      </div>

      <div class="right">
          
             <nuxt-link to="/about"> <button class="about button--main">ABOUT</button> </nuxt-link>
             <nuxt-link to="/expirience"><button class="expirience button--main">EXPERIENCE</button>  </nuxt-link>
             <nuxt-link to="/works"><button class="works button--main">WORKS</button>  </nuxt-link>
             <nuxt-link to="/about"><button class="contact button--main">CONTACT</button>  </nuxt-link>
      </div>
     
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav{
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 padding: 10px;
 height: 50px;
 width:100%;
 position:absolute;
top:0;
z-index: 100;
 .left{

 }
 .right{
     display: flex;
 flex-direction: row;
.about, .expirience, .works, .contact{
    margin: 3px;
}
 }
}
</style>