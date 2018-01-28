export class Forecast {
    date: string;
    weekday: string;
    max: string;
    min: string;
    description: string;
    condition: string;
}

export class Weather {
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
	forecast: Forecast[] = [];
	latitude: number;
	longitude: number;
}