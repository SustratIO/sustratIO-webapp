export interface Plantation {
	name: string;
	location?: PlantationLocation | null;
}

export interface PlantationLocation {
	latitude: number;
	longitude: number;
	altitude?: number | null;
}
