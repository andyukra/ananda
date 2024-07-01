<script lang="ts">
    export let src : string;
    export let title : string;
    export let opts: boolean = true;

    import FaCartPlus from 'svelte-icons/fa/FaCartPlus.svelte';
    import FaHeart from 'svelte-icons/fa/FaHeart.svelte';
    import FaStar from 'svelte-icons/fa/FaStar.svelte';
</script>

<article class="w-full flex flex-col justify-between items-center h-[75vh] hover:scale-95">
    <img class="object-cover w-full rounded-t-xl shadow-lg" src={src} alt={title}>
    <div class="w-full shadow-lg rounded-lg divide-green-300 divide-y-8">
        <h1 class="w-full text-white text-center text-lg font-bold p-4 bg-slate-800 rounded-bl-lg rounded-br-lg">{title}</h1>
        {#if opts}
            <div class="p-4 bg-slate-800 rounded-b-lg flex justify-around items-center">
                <div class="size-5 text-slate-400 hover:text-white cursor-pointer">
                    <FaHeart />
                </div>
                <div class="size-5 text-slate-400 hover:text-white cursor-pointer">
                <FaCartPlus /> 
                </div>
                <div class="size-5 text-slate-400 hover:text-white cursor-pointer">
                <FaStar /> 
                </div>
            </div>
        {/if}
    </div>
</article>

<style>
    article {
        flex: 0 0 300px;
        transition: 0.3s;
    }
    img {
        max-height: max-content;
    }
    h1 {
        font-family: "Quicksand", sans-serif;
    }
</style>