<template>
    <div class="article">
        <h3>{{this.article.title}}</h3>
        <h4>{{this.article.subtitle}}</h4>
        <p v-for="paragraph in this.article.text" :key="paragraph">
            {{ paragraph }}
        </p>
        <h5>Readings of the week:</h5>
        <p v-for="source in this.article.sources" :key="source">
            {{ source }}
        </p>
        <div v-if="article.subtitle === 'Week 5 Reflection'">
            <h6>Design drafts</h6>
            <iframe width="663.9" height="352.8" src="https://xd.adobe.com/embed/30101f62-8e43-46af-b9d8-7d24d64131b8-6543/" frameborder="0" allowfullscreen></iframe>
            <iframe width="663.9" height="352.8" src="https://xd.adobe.com/embed/22b3119e-b0df-47c5-b2ed-6d127ea94368-77e0/" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Journal',
    props: {
        article: Object,
    }, 
}
</script>

<style lang="scss" scoped>
p {
    margin: 0 10% 2% 10%;
}

ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-right: 5%;
    margin-left: 5%;

    justify-content: center;
    align-content: center;
    list-style-type: none;
    padding: 0 12px 0 12px;
    margin: 0 12px 0 12px;
}
</style>