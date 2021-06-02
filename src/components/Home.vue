<template>
  <div class="home">
    <div class="header">
      <h1>Hi! Nice to meet you, I'm Edie.</h1>
    </div>
    <h3>Personal Profile Statement (but not the resumé kind)</h3>
    <ul>
      <li>{{ this.blog }}</li>
      <li>...</li>
      <li>{{ this.blogTwo }}</li>
      <li>...</li>
      <li>{{ this.blogThree }}</li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      blog: 'March 2019 is when I learned how to program. I was a likely engineering major at Dartmouth College, following closely in the footsteps of my father, who had gone through college and become an industrial engineer. However, in my first year as an engineer, nothing really EXCITED me.',
      blogTwo: 'I definitely don\'t remember the first thing that I learned in introductory physics, but I very clearly remember my first introductory programming class. Print statements and if loops. As clear as day, I remember the feeling of watching my terminal print out the numbers one through ten on my screen. Something that I now know is so simple absolutely electrified me with excitement.',
      blogThree: 'Long story short, I decided that, maybe even if I had to be the only computer science major who didn\'t know how to code yet, that I would be alright. So here, scattered throughout this site, are some projects I\'ve worked on, some more about me, my resumé, and how to reach out to me. When I\'m not coding, I love to make art, listen to music, live sustainably, and play with my dog. I run the 400m at a NCAA D1 school, I love to sail, and just learned to rollerblade. Most of all, I love to make things happen, make things exciting, and see my passions and dreams become reality. I hope you find something here that sparks your interest!',
    }
  }
}


  window.watsonAssistantChatOptions = {
      integrationID: "ad674d02-614b-4a8d-ad12-a8d24f4812cf", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "a235c2ae-c072-4d92-89a8-9561fbcf58c7", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });

</script>
<style scoped>
  .profile-pic {
    max-height: 250px;
    border-radius: 100%;
    padding: 12px;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    padding-left: 10%;
    padding-right: 10%;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/img/sunset.png');
    background-size: cover;
    height: 400px;
  } 

  h1 {
    position: relative;
    top: -75px;
  }
  h3 {
    padding-top: 2.5%;
  }
</style>
