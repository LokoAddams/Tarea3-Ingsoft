import { saludar } from "./saludador";
beforeAll(() => { jest.useFakeTimers(); });
afterAll(() => { jest.useRealTimers(); });

test("saludo por género (F) en español", () => {
  jest.setSystemTime(new Date("2024-01-01T10:00:00"));
  expect(saludar({ name: "Ana", gender: "F" })).toBe("Buenos días, señora Ana!");
});

