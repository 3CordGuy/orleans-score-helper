import { writable, derived } from 'svelte/store';

const INITIAL = {
	wheat: 0,
	cheese: 0,
	wine: 0,
	wool: 0,
	cloth: 0,
	coins: 0,
	trading: 0,
	civilians: 0,
	development: 1
};

function createScore() {
	const score = writable(INITIAL);

	const scoring = {
		wheat: {
			name: 'wheat',
			unit: 1,
			increment: () => score.update((n) => ({ ...n, wheat: n.wheat + 1 })),
			decrement: () => score.update((n) => (n.wheat > 0 ? { ...n, wheat: n.wheat - 1 } : n))
		},
		cheese: {
			name: 'cheese',
			unit: 2,
			increment: () => score.update((n) => ({ ...n, cheese: n.cheese + 2 })),
			decrement: () => score.update((n) => (n.cheese > 1 ? { ...n, cheese: n.cheese - 2 } : n))
		},
		wine: {
			name: 'wine',
			unit: 3,
			increment: () => score.update((n) => ({ ...n, wine: n.wine + 3 })),
			decrement: () => score.update((n) => (n.wine >= 3 ? { ...n, wine: n.wine - 3 } : n))
		},
		wool: {
			name: 'wool',
			unit: 4,
			increment: () => score.update((n) => ({ ...n, wool: n.wool + 4 })),
			decrement: () => score.update((n) => (n.wool >= 4 ? { ...n, wool: n.wool - 4 } : n))
		},
		cloth: {
			name: 'cloth',
			unit: 5,
			increment: () => score.update((n) => ({ ...n, cloth: n.cloth + 5 })),
			decrement: () => score.update((n) => (n.cloth >= 5 ? { ...n, cloth: n.cloth - 5 } : n))
		},
		coins: {
			name: 'coins',
			unit: 1,
			increment: () => score.update((n) => ({ ...n, coins: n.coins + 1 })),
			decrement: () => score.update((n) => (n.coins > 0 ? { ...n, coins: n.coins - 1 } : n))
		},
		trading: {
			name: 'trading posts',
			unit: 1,
			increment: () => score.update((n) => ({ ...n, trading: n.trading + 1 })),
			decrement: () => score.update((n) => (n.trading > 0 ? { ...n, trading: n.trading - 1 } : n))
		},
		civilians: {
			name: 'civilians',
			unit: 1,
			increment: () => score.update((n) => ({ ...n, civilians: n.civilians + 1 })),
			decrement: () =>
				score.update((n) => (n.civilians > 0 ? { ...n, civilians: n.civilians - 1 } : n))
		},
		development: {
			name: 'development',
			unit: 1,
			increment: () => score.update((n) => ({ ...n, development: n.development + 1 })),
			decrement: () =>
				score.update((n) => (n.development > 0 ? { ...n, development: n.development - 1 } : n))
		}
	};

	return {
		subscribe: score.subscribe,
		...scoring,
		wheat: scoring.wheat,
		reset: () => score.set(INITIAL)
	};
}

export const score = createScore();
export const scoreTotal = derived(score, ($score) => {
	const hasTradingOrCiv = $score.civilians > 0 || $score.trading > 0;
	const tradeCivPts = hasTradingOrCiv
		? ($score.civilians + $score.trading) * $score.development
		: 0;
	return (
		$score.wheat +
		$score.cheese +
		$score.wine +
		$score.wool +
		$score.cloth +
		$score.coins +
		tradeCivPts
	);
});
