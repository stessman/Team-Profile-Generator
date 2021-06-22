const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName()", () => {
    it("should give the name of the created employee", () => {
        const userName = 'Tom';

        const testUser = new Employee('Tom', 1, 'test@email.com');
        const result = testUser.getName();

      expect(result).toEqual(userName);
    });
  });
  describe("getId()", () => {
    it("should give the ID of the created employee", () => {
        const userId = 1;

        const testUser = new Employee('Tom', 1, 'test@email.com');
        const result = testUser.getId();

      expect(result).toEqual(userId);
    });
  });
  describe("getEmail()", () => {
    it("should give the email of the created employee", () => {
        const userEmail = 'test@email.com';

        const testUser = new Employee('Tom', 1, 'test@email.com');
        const result = testUser.getEmail();

      expect(result).toEqual(userEmail);
    });
  });
  describe("getRole()", () => {
    it("should return the role of the user", () => {
        const userRole = 'Employee';

        const testUser = new Employee('Tom', 1, 'test@email.com');
        const result = testUser.getRole();

      expect(result).toEqual(userRole);
    });
  });
});