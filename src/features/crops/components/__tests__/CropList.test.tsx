import type { Crop } from '@features/crops';
import { CropList } from '@features/crops/components/CropList';

import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { cropFactory } from '@/tests/factories';

test('empty list informs the user.', () => {
	render(<CropList items={[]} />);

	const item = screen.getByText('No crops created.');
	expect(item).toBeInTheDocument();
});

test('a list of crops is rendered properly', () => {
	const crops: Crop[] = cropFactory.buildList(3, { name: 'Tomato' });
	render(<CropList items={crops} />);

	const items = screen.getAllByText('Tomato');
	expect(items).toHaveLength(3);

	items.forEach((item) => {
		expect(item).toBeInTheDocument();
	});
});
