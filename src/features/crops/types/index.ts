export interface Crop {
	id: string;
	created_at: Date;
	updated_at?: Date | null;
	name: string;
	species?: string | null;
	description?: string | null;
	notes?: string | null;
	sowing_season_start?: SowingPeriod | null;
	sowing_season_end?: SowingPeriod | null;
}

export interface SowingPeriod {
	month: number;
	fortnight: number;
}
