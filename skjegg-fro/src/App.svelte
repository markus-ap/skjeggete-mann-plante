<script>
	export let title;
	export let tld;
	let clicked = false;
	let riktig = false;
	let src = "./img/meg.jpg";
	let href = {title} + "." + {tld};

	function toggleRiktig(){
		riktig = !riktig;
	}
</script>

<main>
	{#if !riktig}
	<h1 on:click={toggleRiktig}>{title}.{tld}</h1>
	<p on:click={toggleRiktig}>Leste du den lenkja riktig?</p>
	{/if}

	{#if riktig}
	<h1 on:click={toggleRiktig}>{title}.{tld}</h1>
	<p on:click={toggleRiktig}>Sikker på det?</p>
	<p><a {href}>{title}.{tld}</a></p>
	<img {src} on:click={toggleRiktig} alt="Bilete av skjeggete mann som ser skeptisk ut.">
	{/if}
</main>

<style>
	:global(body){
		background-color: #7bb821;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}
	
	img{
			max-height: 50vh;
		}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
		h1{
			font-size: 4em;
		}
	}
</style>