<script>
	import { score, scoreTotal } from '../lib/stores';
	import ScoreItem from '../lib/score-item.svelte';

	const scoreItems = [
		{ name: 'wheat', key: 'wheat' },
		{ name: 'cheese', key: 'cheese' },
		{ name: 'wine', key: 'wine' },
		{ name: 'wool', key: 'wool' },
		{ name: 'cloth', key: 'cloth' },
		{ name: 'coins', key: 'coins' },
		{ name: 'trading posts', key: 'trading' },
		{ name: 'civilians', key: 'civilians' },
		{ name: 'development', key: 'development', initial: 1 }
	];
</script>

<main>
	<h1>Orleans Score</h1>
	<h2 class="score-total">{$scoreTotal} pts</h2>

	<div class="score-items">
		{#each scoreItems as scoreItem}
			<ScoreItem
				value={$score[scoreItem.key] / score[scoreItem.key].unit}
				name={scoreItem.name}
				onAdd={score[scoreItem.key].increment}
				onSub={score[scoreItem.key].decrement}
			/>
		{/each}
	</div>

	<button class="reset" on:click={score.reset}>Reset</button>
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		background: #eee;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		max-width: 600px;
	}

	.score-total {
		top: 0;
		position: sticky;
		background: #eee;
		padding: 0.25em;
		border-bottom: 1px solid #eee;
		box-shadow: 10px 10px 20px #ddd, -10px -10px 20px #fff;
	}

	h1 {
		text-transform: uppercase;
		font-size: 3rem;
		font-weight: 800;
		line-height: 1.1;
		margin: 2rem auto;
		max-width: 14rem;
		color: rgb(2, 142, 202);
		/* text-shadow: 10px 10px 20px #ddd,
                  -10px -10px 20px #fff; */

		text-shadow: -8px -8px 12px rgba(255, 255, 255, 0.4), 8px 8px 12px rgba(0, 0, 0, 0.08);
	}
	h2 {
		color: #333;
		max-width: 75%;
		font-size: 3rem;
		font-weight: 700;
		line-height: 1.1;
		margin: 2rem auto;
		text-shadow: 0 0 5px #ccc;
	}

	.score-items {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		justify-content: center;
	}

	.reset {
		padding: 1em 2em;
		border-radius: 1em;
		border: 1px solid #ccc;
		background: none;
		color: #ccc;
		text-transform: uppercase;
		margin-top: 2em;
	}
	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}
	}
</style>
