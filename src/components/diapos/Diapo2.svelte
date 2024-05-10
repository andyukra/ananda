<script lang="ts">
    import Card from '../Card.svelte';
</script>

<div class="scr">
    <h1 class="text-center lg:text-3xl text-2xl font-bold w-fit mx-auto mb-2">primavera-verano 2024</h1>
<section class="flex p-3 gap-5">
    <Card src="/yoga1.jpg" title="Conjunto 1" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni "/>
    <Card src="/yoga2.jpg" title="Conjunto 2" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni"/>
    <Card src="/yoga3.jpg" title="Conjunto 3" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni "/>
    <Card src="/yoga4.jpg" title="Conjunto 4" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni "/>
    <Card src="/yoga5.jpg" title="Conjunto 5" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni  perspiciatis ut magnam"/>
    <Card src="/yoga6.jpg" title="Conjunto 6" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni  perspiciatis ut magnam cupiditate repellat"/>
    <Card src="/yoga7.jpg" title="Conjunto 7" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni "/>
    <Card src="/yoga8.jpg" title="Conjunto 8" desc="Lorem ipsum dolor sit amet consectetur"/>
    <!-- DUPLICATE -->
    <Card src="/yoga1.jpg" title="Conjunto 1" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni "/>
    <Card src="/yoga2.jpg" title="Conjunto 2" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni"/>
    <Card src="/yoga3.jpg" title="Conjunto 3" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni "/>
    <Card src="/yoga4.jpg" title="Conjunto 4" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni "/>
    <Card src="/yoga5.jpg" title="Conjunto 5" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni  perspiciatis ut magnam"/>
    <Card src="/yoga6.jpg" title="Conjunto 6" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni  perspiciatis ut magnam cupiditate repellat"/>
    <Card src="/yoga7.jpg" title="Conjunto 7" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni "/>
    <Card src="/yoga8.jpg" title="Conjunto 8" desc="Lorem ipsum dolor sit amet consectetur"/>
</section>
</div>

<style>
    ::-webkit-scrollbar {
        display: none;
    }
    .scr { 
        overflow: hidden
     }
    h1 {
        font-family: "Quicksand", sans-serif;
        position: relative;
    }
    h1::before {
        content: '';
        position: absolute;
        top: 110%;
        left: 0;
        width: 25%;
        height: 7px;
        background: rgb(134 239 172);
        border-radius: 99999px;
    }
    section {
        animation: scroll 40s linear infinite;
        transform: translateX(0);
    }
    
    section:hover {
        animation-play-state: paused;
    }
    /* animation */
    @keyframes scroll {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-25% * 8)); }
    }
    /* queries */
    @media(max-width: 768px) {
        section {
            animation: scroll 10s linear infinite;
        }
    }
</style>