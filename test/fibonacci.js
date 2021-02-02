const Fibonacci = artifacts.require("Fibonacci");

contract("Fibonacci", () => {
  let fibonacci = null;
  before(async () => {
    fibonacci = await Fibonacci.deployed();
  });
  it("should correctly calculate fibonacci sequence", async () => {
    const result = await fibonacci.fib(10);
    assert(result.toNumber() === 55);
  });

  it("should return 0, if 0", async () => {
    const result = await fibonacci.fib(0);
    assert(result.toNumber() === 0);
  });

  it("should return 1, if 1", async () => {
    const result = await fibonacci.fib(1);
    assert(result.toNumber() === 1);
  });

  it("should return 1, if 2", async () => {
    const result = await fibonacci.fib(2);
    assert(result.toNumber() === 1);
  });

  it("should return 55 for index of 10", async () => {
    const result = await fibonacci.fib(10);
    assert(result.toNumber() === 55);
  });
});
