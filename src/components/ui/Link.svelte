<script lang="ts">
    export let src : string;
    export let txt : string;
</script>

<a class="text-white px-8 py-4 rounded-lg shadow-md ring-amber-300 ring-4 font-bold hover:bg-amber-500" href={src}>{txt}</a>

<style>
    a {
        font-family: "Quicksand", "sans serif";
        transition: 0.3s;
    }
</style>