<script>
    import Card from '../../components/Card.svelte';
    import products from '../../products';
</script>

<h1 class="text-center text-3xl font-bold lg:mt-5">Línea calzas AIRE</h1>
<section class="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full h-[90dvh] items-center lg:px-5 px-2 py-2 lg:py-0">
    <Card src={products.calCompress[0]} title="Calza compresiva gris" opts={false}/>
    <Card src={products.calCompress[1]} title="Calza compresiva negra" opts={false}/>
    <Card src={products.calCompress[2]} title="Calza compresiva tye negra" opts={false}/>
    <Card src={products.calCompress[3]} title="Calza compresiva tye bordo" opts={false}/>
</section>