import { Component } from '@angular/core';
import { CarServices } from '../../services/cars.service';

@Component({
    moduleId: module.id,
    selector: 'cars',
    templateUrl: 'cars.component.html',
    providers: [ CarServices ]

})

export class CarsComponent {
    message: string;
    cars: Car[];
    rootApiUrl: string;

    constructor(private CarServices: CarServices){
        this.rootApiUrl = 'http://localhost:5000/';
        this.message = "All cars are shown in here..... :)";
        this.CarServices.getCars().subscribe(cars => {
            this.cars = cars;
        })
    }
}


interface Car {
    id: number;
    title: string;
    details: string;
    price: number;
    discount: number;
    photo: any;
}