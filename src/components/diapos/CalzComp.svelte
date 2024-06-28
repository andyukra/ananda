<script>
    import { onMount } from 'svelte';

    $:isMobile = false;

    onMount(() => {
        if(window.innerWidth < 520) isMobile = true;
    });
</script>

<section
    style={`${isMobile ? 'background-image:url("https://res.cloudinary.com/andy-company/image/upload/v1719603599/conjMobil_gcnrel.jpg");' : 'background-image:url("https://res.cloudinary.com/andy-company/image/upload/v1719603599/conj_rqfwtw.jpg");'}`}
    class="w-full h-dvh"></section>

<style>
    section {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>