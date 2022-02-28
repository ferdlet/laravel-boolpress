<template> 
    <div>
        <h1>{{category.name}}</h1>
        <ul v-if="category.posts.length > 0">
            <li v-for="post in category.posts" :key="post.id">
                <router-link :to="{name: 'single-post', params: {slug: post.slug}}">
                {{post.title}}
                </router-link>
            </li>
        </ul>
        <h2 v-else>Nessun Post associato</h2>
    </div>
</template>

<script>
export default {
    name: 'SingleCategory',
    data() {
        return{
            category: []
        }
    },
    created() {
        axios.get(`/api/categories/${this.$route.params.slug}`)
            .then((response)=> {
                this.category = response.data;
            })
            .catch((error)=>{
                this.$router.push({name:'page-404'});
            });
    }
}
</script>

<style lang="scss" scoped>

</style>