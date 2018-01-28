webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.apiUrlStates = "https://secure.geonames.org/childrenJSON?geonameId=3469034&username=tiagogalczinski";
        this.apiUrlCities = "https://secure.geonames.org/childrenJSON?geonameId=";
        this.apiUrlKey = "6f5a29b1";
        this.apiUrlWeather = "https://api.hgbrasil.com/weather/?format=json-cors";
    }
    DataService.prototype.getStates = function () {
        return this.http.get(this.apiUrlStates)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getCities = function (id) {
        return this.http.get(this.apiUrlCities + id)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getWeather = function (lat, lng) {
        return this.http.get(this.apiUrlWeather + "&lat=" + lat + "&lon=" + lng + "&user_ip=remote&key=" + this.apiUrlKey)
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());

// http://embed.plnkr.co/cuMsdkK6SuTn41uQSeI6


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\n    <mat-toolbar-row color=\"primary\">\n\n        <div class=\"container\">\n            <button mat-icon-button>\n                <mat-icon>opacity</mat-icon>\n            </button>\n            <span class=\"app-title\">Weather</span>\n        </div>\n\n    </mat-toolbar-row>\n\n</mat-toolbar>\n\n<mat-card class=\"container\">\n\n    <form [formGroup]=\"regionForm\">\n        <mat-form-field>\n            <mat-select formControlName=\"estado\" placeholder=\"Estado\" (change)=\"onSelectState($event)\">\n            <mat-option *ngFor=\"let state of states\" [value]=\"state.geonameId\">\n                {{ state.toponymName }}\n            </mat-option>\n            </mat-select>\n        </mat-form-field>\n        \n        <mat-form-field>\n            <input formControlName=\"cidade\" matInput placeholder=\"Cidade\" aria-label=\"City\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onSelectCity($event)\">\n            <mat-option *ngFor=\"let city of filteredStates | async\" [attr.data-lat]=\"city.lat\" [attr.data-lng]=\"city.lng\" [value]=\"city.toponymName\" >\n                {{ city.toponymName }}\n            </mat-option>\n            </mat-autocomplete>\n        </mat-form-field>\n    </form>\n\n</mat-card>\n\n<mat-card class=\"container content-today\">\n\n    <div *ngFor=\"let f of forecast; let ii=index\">\n        <div *ngIf=\"ii<1\" class=\"flex container-today\">\n            <div *ngIf=\"f.condition=='storm'\" class=\"weather-container column1\">\n                <ul>\n                    <li>\n                        <div class=\"icon-container rain thunderstorms\">\n                            <div class=\"cloud\"></div>\n                            <div class=\"rain-container\">\n                            <div class=\"rain-drop\"></div>\n                            <div class=\"rain-drop\"></div>\n                            <div class=\"rain-drop\"></div>\n                            <div class=\"rain-drop\"></div>\n                            </div>\n                            <div class=\"shadow\"></div>\n                            <div class=\"lightning\"></div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div *ngIf=\"f.condition=='clear_day'\" class=\"weather-container column1\">\n                <ul>\n                    <li>\n                        <div class=\"icon-container\">\n                            <div class=\"sun\"></div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div *ngIf=\"f.condition=='cloud'\" class=\"weather-container column1\">\n                <ul>\n                    <li>\n                        <div class=\"icon-container cloudy\">\n                            <div class=\"cloud with-shadow\">\n                            <div class=\"shadow\"></div>\n                            </div>\n                        </div>\n                    </li>      \n                </ul>\n            </div>\n            <div *ngIf=\"f.condition=='cloudly_day'\" class=\"weather-container column1\">\n                <ul>\n                    <li>\n                        <div class=\"icon-container mostly-cloudy\">\n                            <div class=\"sun\"></div>\n                            <div class=\"cloud with-shadow\">\n                            <div class=\"shadow\"></div>\n                            </div>\n                        </div>\n                    </li>    \n                </ul>\n            </div>\n\n            <div class=\"column2\">\n                <span class=\"today\">{{weather.temp}}º</span>\n                <span>{{f.description}}</span>                \n            </div>\n\n            <div>\n                <div class=\"maxmin flex\"> <i class=\"material-icons\">keyboard_arrow_up</i> <span class=\"maxmin-label\"> {{f.max}}º </span> </div>\n                <div class=\"maxmin flex\"> <i class=\"material-icons min\">keyboard_arrow_down</i> <span class=\"maxmin-label min\"> {{f.min}}º </span> </div>\n            </div>\n\n        </div>\n    </div>\n\n</mat-card>\n\n<mat-card class=\"container content\">\n    <table class=\"forecast-next\" cellspacing=\"0\" borderspacing=\"0\" align=\"center\">\n        <tr *ngFor=\"let f of forecast; let i=index\">\n                <td width=\"34%\" *ngIf=\"i>0\"> \n                    <div class=\"maxmin flex\"> <i class=\"material-icons\">keyboard_arrow_up</i> <span class=\"maxmin-label\"> {{f.max}}º </span> </div>\n                    <div class=\"maxmin flex\"> <i class=\"material-icons min\">keyboard_arrow_down</i> <span class=\"maxmin-label min\"> {{f.min}}º </span> </div>    \n                </td>\n                <td class=\"weekday\" *ngIf=\"i>0\">{{f.weekday}}</td>\n                <td align=\"right\" *ngIf=\"i>0\"> {{f.description}}</td>\n        </tr>\n    </table>\n</mat-card>\n    \n{{weather | json}}\n\n<BR><br>\n<!-- LAST: {{ dataTemp|json }} -->\n<br>\n<!-- temperatura atual: {{ dataTemp.results.temp |json }} <br>\ncondition: {{ dataTemp.results.forecast[0].condition |json }} <br>\ndescription: {{ dataTemp.results.forecast[0].description |json }} <br>\nmax: {{ dataTemp.results.forecast[0].max |json }} <br>\nmin: {{ dataTemp.results.forecast[0].min |json }} <br> -->\n\n<Br>\n<!-- \n<table>\n  <tr *ngFor=\"let forecast of dataTemp.results.forecast\" >\n    <td>{{forecast.condition}}</td>\n    <td>{{forecast.max}} - {{forecast.min}}</td>\n    <td>{{forecast.weekday}}</td>\n    <td>{{forecast.description}}</td>\n  </tr>\n</table>\n<br><br> -->\n<!-- {{states|json}} -->\n\n<Br>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/_services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(dS, formBuilder) {
        // this.dataTemp = {"by":"gps","valid_key":true,"results":{"temp":23,"date":"27/01/2018","time":"18:34","condition_code":"26","description":"Tempo nublado","currently":"dia","cid":"","city":"Blumenau,","img_id":"26","humidity":"74","wind_speedy":"11.27 km/h","sunrise":"6:46 am","sunset":"8:12 pm","condition_slug":"cloud","city_name":"Blumenau","forecast":[{"date":"27/01","weekday":"Sáb","max":"24","min":"18","description":"Tempo nublado","condition":"cloud"},{"date":"28/01","weekday":"Dom","max":"28","min":"19","description":"Tempo nublado","condition":"cloud"},{"date":"29/01","weekday":"Seg","max":"25","min":"21","description":"Tempestades isoladas","condition":"storm"},{"date":"30/01","weekday":"Ter","max":"28","min":"17","description":"Parcialmente nublado","condition":"cloudly_day"},{"date":"31/01","weekday":"Qua","max":"26","min":"21","description":"Tempestades isoladas","condition":"storm"},{"date":"01/02","weekday":"Qui","max":"28","min":"21","description":"Tempo nublado","condition":"cloud"},{"date":"02/02","weekday":"Sex","max":"28","min":"20","description":"Ensolarado com muitas nuvens","condition":"cloudly_day"},{"date":"03/02","weekday":"Sáb","max":"27","min":"20","description":"Ensolarado com muitas nuvens","condition":"cloudly_day"},{"date":"04/02","weekday":"Dom","max":"25","min":"18","description":"Parcialmente nublado","condition":"cloudly_day"},{"date":"05/02","weekday":"Seg","max":"25","min":"18","description":"Parcialmente nublado","condition":"cloudly_day"}]},"execution_time":0.0,"from_cache":true}
        var _this = this;
        this.dS = dS;
        this.formBuilder = formBuilder;
        //lista do combo estados
        this.states = [];
        this.cities = [];
        this.weather = [];
        this.forecast = [];
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
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(3)
                ]],
            cidade: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(3)
                ]]
        });
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (state) { return state ? _this.filterStates(state) : _this.cities.slice(); }));
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //request do combo estados
        this.dS.getStates()
            .subscribe(function (data) { return _this.states = data.geonames; });
    };
    AppComponent.prototype.onSelectState = function (event) {
        var _this = this;
        this.dS.getCities(event.value)
            .subscribe(function (data) { return _this.cities = data.geonames; });
    };
    AppComponent.prototype.onSelectCity = function (event) {
        var _this = this;
        var lat = event.option._element.nativeElement.dataset.lat;
        var lng = event.option._element.nativeElement.dataset.lng;
        this.dS.getWeather(lat, lng)
            .subscribe(function (data) {
            _this.weather = data.results;
            _this.forecast = data.results.forecast;
        });
    };
    AppComponent.prototype.filterStates = function (name) {
        return this.cities.filter(function (state) {
            return state.toponymName.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__("../../../../../src/app/_services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDividerModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map