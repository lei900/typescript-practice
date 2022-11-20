interface Reportable {
  summary(): string;
}

// Can use extends
interface Car extends Reportable {
  manufacture: string;
  broken: boolean;
  mileage: number;
}

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  isBroken: true,
  summary(): string {
    return `${this.name}`;
  },
};

const newCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `${this.name}`;
  },
};

const printVehicle = (vehicle: Car): void => {
  console.log(vehicle);
};

// printVehicle(oldCivic); // Error

const printSummary = (item: Reportable): void => {
  console.log(item);
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

printSummary(drink);
printSummary(oldCivic);
