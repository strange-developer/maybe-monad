class Maybe {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(fn) {
    return Maybe.of(this.isNothing() ? null : fn(this.value));
  }

  ap(functor) {
    return this.isNothing() ? this : functor.map(this.value);
  }

  join() {
    return this.value;
  }

  chain(fnReturnFunctor) {
    return this.isNothing ? this : this.map(fnReturnFunctor).join();
  }

  fold(falsyComponent, truthyComponent) {
    if (this.isNothing() || this.value === false) {
      return falsyComponent;
    }
    return truthyComponent;
  }
}

export default Maybe;
