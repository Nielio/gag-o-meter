import {DOM} from "../popup/DOM.js";

let singleton;

export class Data {

  constructor() {
    if (singleton) {
      return singleton;
    }
    singleton = this;

    // -- attributes --
    /**
     * @type {number}
     * @private
     */
    this._distance = 0;
  }

  /**
   * @param {number} val
   */
  static set distance(val) {
    if (singleton._distance === val) {
      return;
    }

    singleton._distance = val;
    DOM.updateDistance();
  }

  /**
   * @returns {number}
   */
  static get distance() {
    return singleton._distance;
  }

}