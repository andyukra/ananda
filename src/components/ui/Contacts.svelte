<script lang="ts">
    import FaWhatsapp from 'svelte-icons/fa/FaWhatsapp.svelte';
    import FaFacebookSquare from 'svelte-icons/fa/FaFacebookSquare.svelte';
    import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
</script>

<h1 class="text-white text-2xl font-bold text-center">Contactos</h1>
<section class="w-full flex justify-center items-center gap-5">
    <article class="md:px-8 px-4 py-4 rounded-lg shadow-lg bg-green-600 flex justify-center items-center gap-5 text-white">
        <div class="size-10">
            <FaWhatsapp />
        </div>
        <p class="hidden md:block">+541138150081</p>
    </article>
    <article class="md:px-8 px-4 py-4 rounded-lg shadow-lg bg-sky-600 flex justify-center items-center gap-5 text-white">
        <div class="size-10">
            <FaFacebookSquare />
        </div>
        <p class="hidden md:block">Ananda Sports</p>
    </article>
    <article class="md:px-8 px-4 py-4 rounded-lg shadow-lg bg-orange-600 flex justify-center items-center gap-5 text-white">
        <div class="size-10">
            <FaInstagram />
        </div>
        <p class="hidden md:block">Ananda Sports</p>
    </article>
</section>

<style>

</style>