const onceFn = (fn) => {
  let done = false;
  return (...args) =>
    done ? undefined : ((done = true), fn.call(this, ...args));
};

export { onceFn };
