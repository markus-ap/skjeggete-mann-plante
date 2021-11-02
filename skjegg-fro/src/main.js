import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: "🧔🌱",
		tld: "to",
		bgcolor: "#7bb821"
	}
});

export default app;