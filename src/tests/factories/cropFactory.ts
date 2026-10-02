import { faker } from '@faker-js/faker';
import type { Crop } from '@features/crops';
import { Factory } from 'fishery';

export const cropFactory = Factory.define<Crop>(() => {
	const created_at = faker.date.past();
	const updated_at = faker.date.between({ from: created_at, to: new Date() });

	return {
		id: faker.string.uuid({ version: 4 }),
		created_at: created_at,
		updated_at: faker.datatype.boolean() ? updated_at : null,
		name: faker.book.title(),
		species: faker.datatype.boolean() ? faker.book.title() : null,
		description: faker.datatype.boolean() ? faker.lorem.paragraph() : null,
		notes: faker.datatype.boolean() ? faker.lorem.paragraph() : null,
		sowing_season_start: faker.datatype.boolean()
			? {
					month: faker.number.int({ min: 1, max: 12 }),
					fortnight: faker.number.int({ min: 1, max: 2 }),
				}
			: null,
		sowing_season_end: faker.datatype.boolean()
			? {
					month: faker.number.int({ min: 1, max: 12 }),
					fortnight: faker.number.int({ min: 1, max: 2 }),
				}
			: null,
	};
});
