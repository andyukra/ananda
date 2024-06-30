<script>
    import Card from '../Card.svelte';
    import Products from '../../products';
</script>

<section class="w-full h-dvh flex items-center flex-col justify-center overflow-hidden gap-5">
    <h1 class="lg:text-4xl text-2xl text-white text-center font-bold">Algunos de nuestros artículos en tienda</h1>
    <div class="flex gap-5 lg:px-5">
        <Card src={Products.medias[0]} title="Medias gris" opts={false}/>
        <Card src={Products.medias[1]} title="Medias negras" opts={false}/>
        <Card src={Products.medias[2]} title="Medias bordo" opts={false}/>
        <Card src={Products.vincha[0]} title="vincha tyedye" opts={false}/>
        <Card src={Products.campCierre[0]} title="camperita tyedye" opts={false}/>
        <Card src={Products.leggTerm[0]} title="termicos tyedye verde" opts={false}/>
        <Card src={Products.leggTerm[1]} title="termicos tyedye bordo" opts={false}/>
        <Card src={Products.pantAncho[0]} title="Pantalón ancho negro" opts={false}/>
        <Card src={Products.pantAncho[1]} title="Pantalón ancho tyedye" opts={false}/>
        <!-- COPIA -->
        <Card src={Products.medias[0]} title="Medias gris" opts={false}/>
        <Card src={Products.medias[1]} title="Medias negras" opts={false}/>
        <Card src={Products.medias[2]} title="Medias bordo" opts={false}/>
        <Card src={Products.vincha[0]} title="vincha tyedye" opts={false}/>
        <Card src={Products.campCierre[0]} title="camperita tyedye" opts={false}/>
        <Card src={Products.leggTerm[0]} title="termicos tyedye verde" opts={false}/>
        <Card src={Products.leggTerm[1]} title="termicos tyedye bordo" opts={false}/>
        <Card src={Products.pantAncho[0]} title="Pantalón ancho negro" opts={false}/>
        <Card src={Products.pantAncho[1]} title="Pantalón ancho tyedye" opts={false}/>
    </div>
</section>

<style>
    section {
        background: linear-gradient(45deg, rgb(117, 26, 26) 50%, rgb(96, 113, 37) 50%);
    }
    section > div {
        animation-name: slider;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @keyframes slider {
        from { transform: translateX(0) }
        to { transform: translateX(calc(-435px*8)) }
    }
</style>