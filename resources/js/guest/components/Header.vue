<template>
    <header>
        <h2>Boolpress</h2>
        <nav>
            <ul>
                <li>
                    <router-link :to="{name:'home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{name:'categories'}">Categories</router-link>
                </li>
                <li>
                    <a href="/admin/home">Dashboard</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
header {
    max-width: 100%;
    min-height: 100px;
    padding: 10px 100px 10px 100px;
    display: flex;
    justify-content: space-between;
    background: #aaa;
    align-items: center;
    nav {
        ul {
            list-style: none;
            display: flex;
            gap: 20px;
        }
    }
}
</style>