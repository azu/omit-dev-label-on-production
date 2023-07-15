(() => {
  // index.js
  var assertMainArgs = (args) => {
    if (typeof args[0] !== "string") {
      throw new Error("First argument must be a string");
    }
    if (typeof args[1] !== "string") {
      throw new Error("Second argument must be a string");
    }
  };
  function main(args) {
    DEV:
      assertMainArgs(args);
    const [a, b] = args;
    return a + b;
  }
})();
