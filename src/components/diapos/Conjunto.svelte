<script>
    import { onMount } from 'svelte';

    $:isMobile = false;

    onMount(() => {
        if(window.innerWidth < 520) isMobile = true;
    });
</script>

<section
    style={`${isMobile ? 'background-image:url("https://res.cloudinary.com/andy-company/image/upload/v1719770330/bgM_t5ixjm.jpg");' : 'background-image:url("https://res.cloudinary.com/andy-company/image/upload/v1719770330/bgF_isjzcu.jpg");'}`}
    class="w-full h-dvh"></section>

<style>
    section {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>