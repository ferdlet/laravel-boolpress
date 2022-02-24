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

        .post-container {
            width: 1200px;
            margin: 0 auto;
            background-color: #aaa;
            border-radius: 15px;
            padding: 30px;
            margin-top: 20px;
            h3 {
                text-align: center;
            }
            p {
                padding: 15px 0;
            }
            .categories {
                padding: 15px 0;
            }
            .tags {
                padding: 15px 0;
                ul {
                    display: inline-flex;
                    list-style: none;
                    gap: 10px;
                    .tag {
                        padding: 5px;
                        background-color: lightblue;
                        border-radius: 1em;
                    }

                }
            }
        }

</style>