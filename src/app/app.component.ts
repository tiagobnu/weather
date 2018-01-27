import { Component, Input } from '@angular/core';
import { DataService } from "./_services/data.service";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

//Models
import { State } from './_models/state';
import { City } from './_models/city';
import { Weather } from './_models/weather';

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
    public regionForm: FormGroup;

    stateCtrl: FormControl;
    filteredStates: Observable<any[]>;

    constructor(private dS: DataService, private formBuilder: FormBuilder, ) { 
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
            .subscribe(data => this.weather = data)
    }

    filterStates(name: string) {
        return this.cities.filter(state =>
            state.toponymName.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
}
