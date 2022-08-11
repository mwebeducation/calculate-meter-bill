import { convertToMyanmar } from "./enToMm";

type Input = number;

const returnPrices = (
  inputUnits: number,
  minUnits: number,
  targetUnitPrices: number,
  minPrices: number
) => {
  if (inputUnits === 0) return 0;

  const usedUnits = inputUnits - minUnits;

  const pricesOfUsedUnits = usedUnits * targetUnitPrices;

  const totalPrices = minPrices + pricesOfUsedUnits;

  const value =
    inputUnits > 70000
      ? totalPrices.toExponential(4)
      : totalPrices.toLocaleString("en-US");

  return convertToMyanmar(value);
};

const homeUnitCalculation = (input: Input) => {
  switch (true) {
    case input < 31:
      return input * 35; // maxPrices 1050 kyats (30 units x 35 kyats) will be next minPrices
    case input < 51:
      return returnPrices(input, 30, 50, 1050);
    case input < 76:
      return returnPrices(input, 50, 70, 2050);
    case input < 101:
      return returnPrices(input, 75, 90, 3800);
    case input < 151:
      return returnPrices(input, 100, 110, 6050);
    case input < 201:
      return returnPrices(input, 150, 120, 11550);
    case input > 200:
      return returnPrices(input, 200, 125, 17550);
    default:
      return 0;
  }
};

console.log(homeUnitCalculation(110));

const factoryUnitCalculation = (input: Input) => {
  switch (true) {
    case input < 501:
      return input * 125; // maxPrices 62500 Kyats (500 units x 125 kyats) will be next minPrices
    case input < 5001:
      return returnPrices(input, 500, 135, 62500);
    case input < 10001:
      return returnPrices(input, 5000, 145, 670000);
    case input < 20001:
      return returnPrices(input, 10000, 155, 1395000);
    case input < 50001:
      return returnPrices(input, 20000, 167, 2945000);
    case input < 100001:
      return returnPrices(input, 50000, 175, 7955000);
    case input > 100000:
      return returnPrices(input, 100000, 180, 16705000);
    default:
      return 0;
  }
};

// console.log(factoryUnitCalculation(100001));

const finAndCalculateUsedUnit = (
  type: "Home" | "Factory",
  prevUnit: number,
  currentUnit: number
) => {
  const units = Math.abs(currentUnit - prevUnit);

  console.log(units);

  return type === "Home"
    ? homeUnitCalculation(units)
    : factoryUnitCalculation(units);
};

// console.log(finAndCalculateUsedUnit("Home", 2045, 2050345));
