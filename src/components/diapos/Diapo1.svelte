<script>
    import ChevronCircleDown from 'svelte-icons/fa/FaChevronCircleDown.svelte';
</script>

<section class="relative h-dvh">
    <video class="w-full h-full object-cover z-10" loop data-autoplay muted>
        <source data-src="/diapo1bg.mp4" type="video/mp4">
    </video>
    <main class="w-full h-full absolute top-0 left-0 z-20 bg-[#0009] flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-center">
            <h1 class="text-white lg:text-[10rem] text-[5rem] font-bold ">Ananda</h1>
            <h2 class="w-9/12 text-center lg:text-2xl text-xl text-slate-300">Bienvenidos a Ananda, tu ropa deportiva que combina calidad, funcionalidad y estilo. En Ananda diseñamos cada prenda para brindar libertad, confort y bienestar a la hora de realizar actividad física. Te ofrecemos prendas que puedan adaptarse a todas tus necesidades</h2>
        </div>
        <div class="w-10 h-10 text-slate-300 animate-bounce absolute bottom-5">
            <ChevronCircleDown />
        </div>
    </main>
</section>

<style>
    h1 {
        font-family: "Lobster", sans-serif;
    }
</style>
