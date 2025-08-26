import { saludar } from "./saludador";
beforeAll(() => { jest.useFakeTimers(); });
afterAll(() => { jest.useRealTimers(); });



test("buenas tardes con nombre (15:00)", () => {
  jest.setSystemTime(new Date("2024-01-01T15:00:00"));
  expect(saludar({ name: "Luis" })).toBe("Buenas tardes, Luis!");
});
test("buenos días sin nombre (8:00)", () => {
  jest.setSystemTime(new Date("2024-01-01T08:00:00"));
  expect(saludar({})).toBe("Buenos días!");
});
test("saludo por género (F) en español", () => {
  jest.setSystemTime(new Date("2024-01-01T10:00:00"));
  expect(saludar({ name: "Ana", gender: "F" })).toBe("Buenos días, señora Ana!");
});
test("edad > 30 aplica trato formal", () => {
  jest.setSystemTime(new Date("2024-01-01T20:00:00"));
  expect(saludar({ name:"Carlos", age:35, gender:"M" }))
    .toBe("Buenas noches, Sr. Carlos!");
});
test("saludo formal sin género en español", () => {
  jest.setSystemTime(new Date("2024-01-01T20:00:00"));
  expect(saludar({ name: "Alex", age: 40 })).toBe("Buenas noches, Estimad@ Alex!");
});

test("saludo formal sin género en inglés", () => {
  jest.setSystemTime(new Date("2024-01-01T20:00:00"));
  expect(saludar({ name: "Alex", age: 40, lang: "en" })).toBe("Good evening, Dear Alex!");
});

