<template>
    <div>
        <div class="post-container" >
                <h3>{{post.title}}</h3>
                <p>{{post.content}}</p>
                <div class="categories" v-if="post.category">
                    <strong>Categoria: </strong>
                    <span >{{post.category.name}}</span>
                </div>
                <div class="tags" v-if="post.tags.length > 0">
                    <strong>Tags: </strong>
                    <ul>
                        <li class="tag" v-for="(tag, index) in post.tags" :key="index">{{tag.name}} </li>

                    </ul>
                </div>
                <router-link :to="{ name: 'single-post', params: { slug: post.slug } }">Visualizza Post</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "SinglePost",
    data() {
        return {
            post: {}
        }
    },
    created() {
        axios.get(`/api/posts/${this.$route.params.slug}`)
            .then((response) => {
                this.post = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
</script>

<style lang="scss" scoped>

</style>