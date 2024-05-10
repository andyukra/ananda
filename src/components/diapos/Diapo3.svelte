<script lang="ts">
    import Link from '../ui/Link.svelte';
    import Contacts from '../ui/Contacts.svelte';
</script>

<section class="w-full h-dvh bg-slate-800 flex justify-center items-center flex-col gap-10 p-5">
    <h1 class="md:text-5xl text-3xl font-bold text-white text-center">Visiten nuestra tienda!</h1>
    <Link src="/tienda" txt="Visitanos"/>
    <Contacts />
</section>

<style>
    h1 {
        font-family: "Quicksand", "sans serif";
    }
</style>