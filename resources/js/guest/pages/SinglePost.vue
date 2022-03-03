<template>
    <div>
        <div class="post-container" >
            <h3>{{post.title}}</h3>
            <div class="image" v-if="post.image">
                <img :src="`/storage/${post.image}`" :alt="post.image">
            </div>
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

            <div>
                <h3>Commenti</h3>
                <form @submit.prevent="addComment()">
                    <div>

                        <input type="text" id="name" placeholder="Inserisci il tuo nome" v-model="formData.name">
                    </div>
                    <div>
                        <textarea id="content" rows="3" placeholder="Inserisci il commento" v-model="formData.content"></textarea>
                    </div>
                    <div>
                        <button type="submit">Aggiungi commento</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SinglePost",
    data() {
        return {
            post: {},
            formData: {
                name: '',
                content: ''
            }
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
    },
    methods: () {
        alert("Aggiunto Commento")
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
            textarea {
                width: 100%;
                margin-top: 15px;
                margin-bottom: 15px;

            }
            h3 {
                text-align: center;
            }
            .image {
                max-width: 100%;
                img {
                    max-width: 100%;
                    margin-top: 15px;
                    margin-bottom: 15px;

                }
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