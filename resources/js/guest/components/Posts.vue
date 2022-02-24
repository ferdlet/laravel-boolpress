<template>
    <div class="container">
        <h2>Lista posts</h2>
        <ul class="posts">
            <li class="post-container" v-for="post in posts" :key="post.id">
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
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'Posts',
    data() {
        return {
            posts: []
        }
    },
    created() {
        axios.get("/api/posts")
            .then((response) => {
                this.posts = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 1200px;
    margin: 0 auto;
    h2 {
        text-align: center;
        margin: 20px 0 20px 0;
    }
    .posts {
        list-style: none;
        .post-container {
            background-color: #aaa;
            border-radius: 15px;
            padding: 15px;
            margin-top: 20px;
            h3 {
                text-align: center;
            }
            p {
                padding: 15px;
            }
            .categories {
                padding: 15px;
            }
            .tags {
                padding: 15px;
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
    }

}
</style>