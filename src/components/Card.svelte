<script lang="ts">
    export let src : string;
    export let title : string;
    export let desc : string;
</script>

<article class="w-full flex flex-col justify-between items-center h-[90dvh] hover:scale-95">
    <img class="object-cover w-full rounded-t-xl shadow-lg h-full" src={src} alt={title}>
    <div class="w-full shadow-lg rounded-lg divide-green-300 divide-y-8">
        <h1 class="w-full text-white text-center text-xl font-bold p-4 bg-slate-800">{title}</h1>
        <p class="bg-slate-800 p-4 text-white w-full rounded-b-xl">{desc}</p>
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
    p {
        font-family: "Quicksand", sans-serif;
    }
</style>