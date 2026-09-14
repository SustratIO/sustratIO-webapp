export interface Crop {
	id: string;
	name: string;
	unique_name: string | null;
	description: string | null;
	notes: string | null;
	created_at: Date;
	updated_at: Date | null;
}
