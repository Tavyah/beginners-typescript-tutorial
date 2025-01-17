import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    } // Catch som any for å få melding ut ellers unknown og da får man ikke hentet ut meldingen. Kan åsså parse den til en Error me bruk av e as Error.message
  } catch (e: any) {
    return e.message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
