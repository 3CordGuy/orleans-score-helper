<script>
	export let name;
	export let onAdd;
	export let onSub;
	export let value;
</script>

<div class="score-item">
	<div class="score-item-header">
		<span><strong>{name}</strong> qty:</span> <span class="value"><strong> {value}</strong></span>
	</div>
	<div class="score-item-body">
		<div class="buttons">
			<button on:click={onSub}>-</button>
			<button on:click={onAdd}>+</button>
		</div>
	</div>
</div>

<style>
	.score-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-shrink: 0;
		width: 48%;
		border: 1px solid #eee;
		border-radius: 0.7em;
		overflow: hidden;
		background: #eee;
		box-shadow: 0px -5px 6px 0px #ccc;
		max-width: 220px;
	}
	.score-item-header {
		display: flex;
		flex-direction: row;
		font-size: 1.5em;
		font-weight: 200;
		width: 100%;
		text-transform: uppercase;
		align-items: center;
		background: #bbb;
		color: #fff;
		justify-content: space-around;
		padding-left: 0.2em;
		padding-right: 0.2em;
	}

	.score-item-header .value {
		font-size: 2em;
		padding: 0 0.25em;
		background: #eee;
		border-bottom: 1px solid #bbb;
		color: rgb(2, 142, 202);
	}

	@media (max-width: 480px) {
		.score-item-header {
			font-size: 0.5em;
		}
	}

	.score-item-body {
		display: flex;
		flex-shrink: 0;
		justify-content: center;
		align-items: center;
		padding: 1em 2em;
	}
	.score-item .buttons {
		display: flex;
		gap: 8px;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.score-item .buttons button {
		padding: 1em 1.4em;
		background: #f4f4f4;
		border: 0;
		border-radius: 50%;
		font-size: 1em;
		box-shadow: 10px 10px 20px #ddd, -10px -10px 20px #fff;
	}
	.score-item .buttons button:active {
		background: #eee;
	}
</style>
