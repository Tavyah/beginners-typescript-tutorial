import { expect, it } from "vitest";
import { a } from "vitest/dist/chunks/suite.CcK46U-P.js";
import { number } from "zod";

const coerceAmount = (amount: number | {amount: number}) => {
  if (typeof amount === "object") {
    return amount.amount;
  }
  else {
    return amount; }
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
