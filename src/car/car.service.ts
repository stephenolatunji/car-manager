import { Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
    private cars = CARS;
    public getCars(){
        return this.cars;
    }
    public getCarById(id: Number){
        const car =  this.cars.find(car => car.id === id);
        return car;
    }
    public postCar(car){
        return this.cars.push(car);
    }
    public putCarById(id){
        return 
    }
    public deleteCarById(id){
        return
    }
}
