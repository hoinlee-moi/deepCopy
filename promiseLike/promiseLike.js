function promiseLike(cb) {
  this.state = "Pending";
  const thenFn = [];
  const finalFn = [];
  const catchFn = [];
  promiseLike.prototype.then = (onFullfill) => {
    if (typeof onFullfill === "function") thenFn.push(onFullfill);
    return this;
  };
  promiseLike.prototype.catch = (onReject) => {
    if (typeof onReject === "function") catchFn.push(onReject);
    return this;
  };
  promiseLike.prototype.resolve = (res) => {
    resolveRecur(res);
  };
  promiseLike.prototype.reject = (err) => {
    this.state = "reject";
    const fn = catchFn.shift();
    if (!fn) {
      final();
      throw err;
    }

    try {
      fn(err);
      final();
    } catch (error) {
      this.reject(error);
    }
  };
  promiseLike.prototype.finally = (...callback) => {
    finalFn.push(...callback);
    return this;
  };
  const resolveRecur = (prevResult) => {
    const fn = thenFn.shift();
    if (!fn) {
      this.state = "fulfill";
      return final();
    }

    if (prevResult instanceof promiseLike) {
      prevResult.then(fn).then(resolveRecur).catch(this.reject);
    } else {
      try {
        const ret = fn(prevResult);
        resolveRecur(ret);
      } catch (error) {
        this.reject(error);
      }
    }
  };
  const final = () => {
    for (const fn of finalFn) fn();
  };

  cb(this.resolve, this.reject);
}

export { promiseLike };
