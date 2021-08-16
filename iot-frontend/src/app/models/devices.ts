export class Devices {
    id !: number;
    name !: string;
    imei !: string;
    weight !: number;
    longtitude !: number;
    latitude !: number;

    constructor() {

    }
    Devices(name: string, imei: string, weight: number, longtitude: number, latitude: number) {
        this.name = name;
        this.imei = imei;
        this.weight = weight;
        this.latitude = latitude;
        this.longtitude = longtitude;
    }


}