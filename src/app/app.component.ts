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

    private states: State[] = []; 
    private cities: City[] = []; 
    private weather: Weather[] = [];
    private forecast: Forecast[] = [];
    public regionForm: FormGroup;
    private dataTemp: {};
    private chartType: any;
    private chartData: any;
    private chartOptions: any;
    private wMax: number;
    private wMin: number;

    stateCtrl: FormControl;
    filteredStates: Observable<any[]>;

    constructor(private dS: DataService, private formBuilder: FormBuilder, ) { 

        // formbuild
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

        // autocomplete filter
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
            .subscribe(data => {
                this.states = data.geonames
                this.regionForm.controls['estado'].setValue(3450387);
            });

        //request cidades autocomplete
        this.dS.getCities(3450387)
            .subscribe(data => {
                this.cities = data.geonames;
                this.regionForm.controls['cidade'].setValue('Blumenau');        
            })
            
        //inicializa com os dados de blumenau
        this.onSelectCity({option : { _element : { nativeElement : { dataset : { lat: '-26.87417', lng: '-49.10227' } }}}});
    }

    onSelectState(event: any) {
        this.dS.getCities(event.value)
            .subscribe(data => this.cities = data.geonames)
    }

    onSelectCity(event: any) {
        var lat = event.option._element.nativeElement.dataset.lat;
        var lng = event.option._element.nativeElement.dataset.lng;
        
        var chartLabels = [];
        var chartTempMax = [];

        var max = 0;
        var min = 99;
        
        this.dS.getWeather(lat,lng)
            .subscribe(data => {
                this.weather = data.results;
                this.forecast = data.results.forecast;

                // gera os labels do chart com os dias seguintes
                // gera o arr com as temperaturas máximas da semana
                this.forecast.forEach(function(i) {

                    // temperaturas maximas e minimas da semana
                    if(parseInt(i.max) > max) { max = parseInt(i.max)}
                    if(parseInt(i.min) < min) { min = parseInt(i.min)}

                    chartLabels.push(i.weekday);
                    chartTempMax.push(i.max)
                })

                // set
                this.wMax = max;
                this.wMin = min;

                // chart configs
                this.chartType = 'line';
                this.chartData = {
                  labels: chartLabels,
                  datasets: [
                    {
                      label: "Próxima semana",
                      data: chartTempMax
                    }
                  ]
                };
                this.chartOptions = {
                  responsive: true,
                  maintainAspectRatio: false
                };

            })
    }

    filterStates(name: string) {
        return this.cities.filter(state =>
            state.toponymName.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
}
