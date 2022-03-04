<template>
    <div>
        <div class="post-container" >
            <h1>{{post.title}}</h1>
            <div class="image" v-if="post.image">
                <img :src="`/storage/${post.image}`" :alt="post.image">
            </div>
            <p>{{post.content}}</p>
            <div class="categories" v-if="post.category">
                <strong>Categoria: </strong>
                <span >{{post.category.name}}</span>
            </div>
            <div class="tags" v-show="postTags.length > 0">
                <strong>Tags: </strong>
                <ul>
                    <li class="tag" v-for="tag in postTags" :key="tag.id">{{tag.name}} </li>

                </ul>
            </div>

            <div>
                <h3>Scrivi un commento</h3>
                <form @submit.prevent="addComment()">
                    <div>

                        <input type="text" id="name" placeholder="Inserisci il tuo nome" v-model="formData.name">
                    </div>
                    <div>
                        <textarea id="content" rows="3" placeholder="Inserisci il commento" v-model="formData.content"></textarea>
                        <div v-if="formErrors.content">
                            <ul>
                                <li v-for="(error, index) in formErrors.content" :key="index">{{error}}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Aggiungi commento</button>
                    </div>
                </form>
                <div class="comment-sent" v-show="commentSent">
                    Commento aggiunto, in fase di approvazione!
                </div>
            </div>
            <div>
                <h3>Commenti</h3>
                <ul>
                    <li v-for="comment in post.comments" :key="comment.id">
                        <h4>{{comment.name}}</h4>
                        <p>{{comment.content}}</p>
                    </li>
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
            post: {},
            postTags: [],
            formData: {
                name: '',
                content: '',
                post_id: null
            },
            commentSent: false,
            formErrors: {}
        }
    },
    methods: {
        addComment() {
            axios.post(`/api/comments/`, this.formData)
                .then( (response) => {
                    this.formData.name = "";
                    this.formData.content = "";
                    this.commentSent = true;
                }).catch( (error) => {
                    this.formErrors = error.response.data.errors;
                })
        },
    },
    created() {
        axios.get(`/api/posts/${this.$route.params.slug}`)
            .then( (response) => {
                this.post = response.data;
                this.formData.post_id = this.post.id;
                if (this.post.tags.length > 0) {
                    for (let i = 0; i < this.post.tags.length; i++) {
                        this.postTags.push(this.post.tags[i]);
                    }
                };
            }).catch( (error) => {
                this.$router.push({name: 'page-404'});
            })    
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
        h1 {
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
        .comment-sent {
            background-color: green;
            color: white;
            text-align: center;
        }
    }

</style>