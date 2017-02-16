// is the amount of money

module.exports = class WalterCalculator {
  constructor(money, callback = '') {
    this.result = [];
    this.WALTER_PRICE = 0.53;
    this.TARE_PRICE = 0.08;

    this.money = money;
    this.totalWalters = 0;
    this.cycle = 1;

    this.computeCycles();

    if (this.isCallable(callback)) {
      return callback(this.result);
    } else {
      return this.result;
    }
  }

  getNumWalters () {
    let ret = [0,0];
    ret[0] = Math.floor(this.money/this.WALTER_PRICE);
    ret[1] = this.round(this.money - ret[0] * this.WALTER_PRICE);
    return ret;
  }

  round (num) {
    return Math.round(num * 100) / 100;
  }

  computeCycles () {
    while (this.money >= this.WALTER_PRICE) {
      const data = {};
      let walters = this.getNumWalters();
      this.totalWalters += walters[0];
      this.money = this.round(walters[1] + this.TARE_PRICE * walters[0]);
      // data to add to result array
      data.cycle = this.cycle;
      data.walter = this.totalWalters;
      data.leftOver = this.money;
      this.result.push(data);
      this.cycle++;
    }

    return this.totalWalters;
  }

  isCallable (func) {
    const getType = {};
    return func && getType.toString.call(func) === '[object Function]';
  }
}
