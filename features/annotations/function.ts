// Nee annotation for args "a", "b", but TS will figure out the return will be number
// const substract = (a: number, b: number) => {
//   return a - b;
// };

// But always add the annotation for return in case that human make mistakes
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// Function never be executed when error
const throwBadError = (message: string): never => {
  throw new Error(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const throwAnError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// or
const logaWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
