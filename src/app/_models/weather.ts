export class forecast {
    date: string;
    weekday: string;
    max: number;
    min: number;
    description: string;
    condition: string;
}

export class Weather {
	by: string;
	valid_key: boolean;
	results: {
		temp: number;
		date: string;
		time: string;
		condition_code: string;
		description: string;
		currently: string;
		cid: string;
		city: string;
		img_id: string;
		humidity: string;
		wind_speedy: string;
		sunrise: string;
		sunset: string;
		condition_slug: string;
		city_name: string;
		forecast: forecast[];
		latitude: number;
		longitude: number;
	}
	execution_time: 0;
	from_cache: true;
}

