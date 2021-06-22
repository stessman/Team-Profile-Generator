const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("getSchool()", () => {
    it("should give the school name of the created intern", () => {
        const userSchool = 'U of M';

        const testUser = new Intern('Tom', 1, 'test@email.com', 'U of M');
        const result = testUser.getSchool();

      expect(result).toEqual(userSchool);
    });
  });
  describe("getRole()", () => {
    it("should return the role of the intern", () => {
        const userRole = 'Intern';

        const testUser = new Intern('Tom', 1, 'test@email.com', 'U of M');
        const result = testUser.getRole();

      expect(result).toEqual(userRole);
    });
  });
});