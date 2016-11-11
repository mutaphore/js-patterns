"use strict";

const currency =
  (() => {
    const cache = {};
    return {
      round: (amount) => {
        let rounded = cache[amount];
        if (!rounded) {
          rounded = cache[amount] = Math.round(amount * 100) / 100;
        }
      }
    };
  }());

currency.round(1.246); // 1.25
currency.round(1.246); // 1.25 (cached value)
