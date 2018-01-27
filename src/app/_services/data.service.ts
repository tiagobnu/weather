import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

  private apiUrlStates: string = "https://secure.geonames.org/childrenJSON?geonameId=3469034&username=tiagogalczinski";

  private apiUrlCities: string = "https://secure.geonames.org/childrenJSON?geonameId=";

  private apiUrlKey: string = "";
  private apiUrlWeather: string = "https://api.hgbrasil.com/weather/?format=json";

  constructor(private http: Http) { }

  getStates(){
    return this.http.get(this.apiUrlStates)
      .map(res => res.json());
  }

  getCities(id){
    return this.http.get(this.apiUrlCities+id)
      .map(res => res.json())
  }

  getWeather(lat, lng){
    return this.http.get(this.apiUrlWeather+"&lat="+lat+"&lon="+lng+"&user_ip=remote&key="+this.apiUrlKey)
      .map(res => res.json())
  }

}


// http://embed.plnkr.co/cuMsdkK6SuTn41uQSeI6
