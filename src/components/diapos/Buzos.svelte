<script lang="ts">
    //*********************B U Z O S***************************/
    import products from '../../products';
    import { onMount } from 'svelte';

    let image = products.buzos[0];

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function change() {
        for(const x in products.buzos) {
            await sleep(3000);
            image = products.buzos[x];
        }
        change();
    }
    onMount(() => {
        change();
    })
</script>

<section class="w-full h-dvh flex flex-col lg:flex-row overflow-hidden justify-between">
    <article style="flex:3;" class="text p-2 flex h-full flex-col justify-center">
        <div>
            <h1 class="text-4xl lg:text-7xl text-center text-slate-500">Buzo con capucha</h1>
            <h2 class="text-center lg:text-3xl text-slate-300 lg:my-5 my-1">gris | <span class="text-black">negro | </span><span class="text-green-700">tyedye</span></h2>
        </div>
        <p class="text-center lg:text-5xl text-slate-500">Un buzo para cualquier momento del día fabricado con el mejor jersey del mercado, garantizando máximo confort, calidad y calidéz para esos días tan fríos.</p>
    </article>
    <article style="flex:1.5;" class="image">
        <img src={image} alt="Foto del buzo">
    </article>
</section>

<style>
   h1 {
        font-family: "Lobster", sans-serif;
    }
</style>