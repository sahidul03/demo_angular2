import { Component, OnInit } from '@angular/core';
import { CarServices } from '../../services/cars.service';
import { FileUploader } from 'ng2-file-upload';


@Component({
    moduleId: module.id,
    selector: 'new-car',
    templateUrl: 'newCar.component.html',
    providers: [ CarServices ]

})

export class NewCarComponent {
    message: string;
    car: Car;
    savedCar: any;

    constructor(private _carServices: CarServices){
    }

    ngOnInit(){
        this.message = "New car page";
        this.car ={
            title: '',
            price: 0,
            discount: 0,
            details: '',
            photo: null
        };
    }

    imageChangeEvent(fileInput: any){
        this.car.photo = fileInput.srcElement.files;
        let formData = new FormData();
        formData.append('photo', this.car.photo);
        console.log(formData);
    }

    submit(){
        this._carServices.addCar(this.car).subscribe(car =>{
            console.log(car);
        });
    }


}


interface Car {
    title: string;
    details: string;
    price: number;
    discount: number;
    photo: any;
}
