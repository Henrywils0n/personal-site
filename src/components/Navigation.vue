<template>
  <div>
    <nav class="navbar">
      <router-link class="nav-link" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
      <a href="https://www.linkedin.com/in/elizabeth-wilson-7a766718a/" target="_blank" class="nav-link social-icon"><button type="button" class="btn btn-li"><i class="fab fa-linkedin-in"></i></button></a>
      <a href="https://github.com/ediewilson" target="_blank" class="nav-link social-icon"><button type="button" class="btn btn-git"><i class="fab fa-github"></i></button></a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 1,
          text: 'Projects',
          page:'/Projects'
        },
        {
          id: 2,
          text: 'Resume',
          page:'/Resume'
        },
        {
          id: 3,
          text: 'Algorithms',
          page:'/Algorithms'
        },
        {
          id: 4,
          text: 'ISP',
          page:'/independent-study'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar { 
  background-color: rgb(234, 234, 234);
  display: flex;
  justify-content: space-around;

  .nav-link {
    color: rgb(10, 10, 10);
    font-weight: 500;
    font-size: 20px;
    justify-self: flex-start;
    transition: all 0.3s;

    &:hover {
      color: rgb(0, 49, 147);
    }
  }
  

  .social-icon {
    align-self: flex-end !important;
  }
}
</style>