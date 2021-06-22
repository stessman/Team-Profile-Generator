const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("getGitHubUsername()", () => {
    it("should give the GitHub username of the created engineer", () => {
        const userGitHub = 'tommyboy';

        const testUser = new Engineer('Tom', 1, 'test@email.com', 'tommyboy');
        const result = testUser.getGitHubUsername();

      expect(result).toEqual(userGitHub);
    });
  });
  describe("getRole()", () => {
    it("should return the role of the engineer", () => {
        const userRole = 'Engineer';

        const testUser = new Engineer('Tom', 1, 'test@email.com', 'tommyboy');
        const result = testUser.getRole();

      expect(result).toEqual(userRole);
    });
  });
});