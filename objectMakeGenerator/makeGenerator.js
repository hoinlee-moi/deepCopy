export const makeGenerator = (obj) => {
  if (
    !(typeof obj === "object") ||
    !obj ||
    obj instanceof Boolean ||
    obj[Symbol.iterator]
  )
    throw new Error("not allowed type");
  if (obj instanceof Number) {
    obj[Symbol.iterator] = function* () {
      const value = String(obj.valueOf());
      for (let i = 0; i < value.length; i += 1) yield value[i];
    };
    return;
  }
  obj[Symbol.iterator] = function* () {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i += 1) yield obj[keys[i]];
  };
};
