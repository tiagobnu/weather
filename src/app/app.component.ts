import { Component, Input } from '@angular/core';
import { DataService } from "./_services/data.service";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

//Models
import { State } from './_models/state';
import { City } from './_models/city';
import { Weather, Forecast } from './_models/weather';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

    //lista do combo estados
    private states: State[] = []; 
    private cities: City[] = []; 
    private weather: Weather[] = [];
    private forecast: Forecast[] = [];
    public regionForm: FormGroup;
    private dataTemp: {};

    stateCtrl: FormControl;
    filteredStates: Observable<any[]>;

    constructor(private dS: DataService, private formBuilder: FormBuilder, ) { 
        // this.dataTemp = {"by":"gps","valid_key":true,"results":{"temp":23,"date":"27/01/2018","time":"18:34","condition_code":"26","description":"Tempo nublado","currently":"dia","cid":"","city":"Blumenau,","img_id":"26","humidity":"74","wind_speedy":"11.27 km/h","sunrise":"6:46 am","sunset":"8:12 pm","condition_slug":"cloud","city_name":"Blumenau","forecast":[{"date":"27/01","weekday":"Sáb","max":"24","min":"18","description":"Tempo nublado","condition":"cloud"},{"date":"28/01","weekday":"Dom","max":"28","min":"19","description":"Tempo nublado","condition":"cloud"},{"date":"29/01","weekday":"Seg","max":"25","min":"21","description":"Tempestades isoladas","condition":"storm"},{"date":"30/01","weekday":"Ter","max":"28","min":"17","description":"Parcialmente nublado","condition":"cloudly_day"},{"date":"31/01","weekday":"Qua","max":"26","min":"21","description":"Tempestades isoladas","condition":"storm"},{"date":"01/02","weekday":"Qui","max":"28","min":"21","description":"Tempo nublado","condition":"cloud"},{"date":"02/02","weekday":"Sex","max":"28","min":"20","description":"Ensolarado com muitas nuvens","condition":"cloudly_day"},{"date":"03/02","weekday":"Sáb","max":"27","min":"20","description":"Ensolarado com muitas nuvens","condition":"cloudly_day"},{"date":"04/02","weekday":"Dom","max":"25","min":"18","description":"Parcialmente nublado","condition":"cloudly_day"},{"date":"05/02","weekday":"Seg","max":"25","min":"18","description":"Parcialmente nublado","condition":"cloudly_day"}]},"execution_time":0.0,"from_cache":true}

        //TEMP CODE for calc max min
        // var weekMax = 0;
        // var weekMin = 99;
        
        // this.dataTemp.results.forecast.forEach(function(f) {
        //     var max = f.max;
        //     var min = f.min;
        
        //     if(max > weekMax) { weekMax = max }
        //     if(min < weekMin) { weekMin = min }
        // })
    
        //formbuild
        this.regionForm = formBuilder.group({
            estado: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            cidade: ['', [
                Validators.required,
                Validators.minLength(3)
            ]]
        })

        this.stateCtrl = new FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
          .pipe(
            startWith(''),
            map(state => state ? this.filterStates(state) : this.cities.slice())
          );
    }
	
	ngOnInit() {
        //request do combo estados
		this.dS.getStates()
			.subscribe(data => this.states = data.geonames);
    }

    onSelectState(event: any) {
        this.dS.getCities(event.value)
            .subscribe(data => this.cities = data.geonames)
    }

    onSelectCity(event: any) {
        var lat = event.option._element.nativeElement.dataset.lat;
        var lng = event.option._element.nativeElement.dataset.lng;
        
        this.dS.getWeather(lat,lng)
            .subscribe(data => {
                this.weather = data.results;
                this.forecast = data.results.forecast;
            })
    }

    filterStates(name: string) {
        return this.cities.filter(state =>
            state.toponymName.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
}
