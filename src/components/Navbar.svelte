<script lang="ts">
    import FaShoppingCart from 'svelte-icons/fa/FaShoppingCart.svelte';
    import FaInfoCircle from 'svelte-icons/fa/FaInfoCircle.svelte';
</script>

<nav class="px-8 py-4 bg-slate-800 text-white flex justify-between items-center">
    <a class="text-xl" href="/" data-astro-reload>Ananda</a>
    <ul class="flex items-center justify-center gap-7">
        <li class="size-5 cursor-pointer hover:animate-pulse">
            <a href="/store">
                <FaShoppingCart />
            </a>
        </li>
        <li class="size-5 cursor-pointer hover:animate-pulse">
            <a href="/nosotros">
                <FaInfoCircle />
            </a>
        </li>
    </ul>
</nav>

<style>
    a {
        font-family: "lobster", "sans serif";
        font-weight: bold;
    }
</style>