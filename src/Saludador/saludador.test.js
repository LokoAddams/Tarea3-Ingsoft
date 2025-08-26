import { saludar } from "./saludador";
beforeAll(() => { jest.useFakeTimers(); });
afterAll(() => { jest.useRealTimers(); });

test("buenos días sin nombre (8:00)", () => {
  jest.setSystemTime(new Date("2024-01-01T08:00:00"));
  expect(saludar({})).toBe("Buenos días!");
});

test("buenas tardes con nombre (15:00)", () => {
  jest.setSystemTime(new Date("2024-01-01T15:00:00"));
  expect(saludar({ name: "Luis" })).toBe("Buenas tardes, Luis!");
});
