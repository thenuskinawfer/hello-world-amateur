function CarObject(CarNumberPlate,CarBrand,CarColour) {
    return {
        CarNumberPlate,
        CarBrand,
        CarColour,
        CarState:"Stopped",
        CarStart : function(){
            console.log(`The car bearing ${CarNumberPlate} has started`)
        },
        CarDrive : function(){
            console.log(`The ${CarBrand} car with registration ${CarNumberPlate} is now driving`)
            this.CarState = "Running"
        }
    }
}

const PersonalCar = CarObject('NA-9154','Mercedes','Blue')

console.log(PersonalCar.CarStart())
console.log(PersonalCar.CarState)
console.log(PersonalCar.CarColour)
console.log(PersonalCar.CarDrive())
console.log(PersonalCar.CarState)