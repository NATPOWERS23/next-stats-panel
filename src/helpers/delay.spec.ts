import { delayed } from "./delay";

describe("delayed function", () => {
  it("resolves with the correct data after the specified timeout", async () => {
    const data = "test data";
    const timeout = 500; // Use a shorter timeout for testing

    const promise = delayed(data, { timeout });

    await expect(promise).resolves.toBe(data);
  });

  it("rejects with the correct data after the specified timeout", async () => {
    const data = "error data";
    const timeout = 500; // Use a shorter timeout for testing

    const promise = delayed(data, { shouldFail: true, timeout });

    await expect(promise).rejects.toBe(data);
  });

  it("uses default timeout and resolves", async () => {
    const data = "test data";

    const promise = delayed(data);

    await expect(promise).resolves.toBe(data);
  });

  it("uses default timeout and rejects", async () => {
    const data = "error data";

    const promise = delayed(data, { shouldFail: true });

    await expect(promise).rejects.toBe(data);
  });
});
