const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("getOfficeNumber()", () => {
    it("should give the office number of the created manager", () => {
        const userOfficeNumber = 133;

        const testUser = new Manager('Tom', 1, 'test@email.com', 133);
        const result = testUser.getOfficeNumber();

      expect(result).toEqual(userOfficeNumber);
    });
  });
  describe("getRole()", () => {
    it("should return the role of the manager", () => {
        const userRole = 'Manager';

        const testUser = new Manager('Tom', 1, 'test@email.com', 133);
        const result = testUser.getRole();

      expect(result).toEqual(userRole);
    });
  });
});