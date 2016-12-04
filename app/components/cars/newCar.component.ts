import { Component } from '@angular/core';
import { CarServices } from '../../services/cars.service';

@Component({
    moduleId: module.id,
    selector: 'new-car',
    templateUrl: 'newCar.component.html',
    providers: [ CarServices ]

})

export class NewCarComponent {
    message: string;
    car: Car;

    constructor(private CarServices: CarServices){
      this.message = "New car page";
    }

    submit(){
        console.log(this.car);
    }

}


interface Car {
    title: string;
    details: string;
    price: number;
    discount: number;
    photo: any;
}
