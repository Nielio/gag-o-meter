import {Unit} from "./Unit.js";
import {units} from "../config/units.js";

let singleton;

export class UnitLibrary {

  constructor() {
    if (singleton) {
      return singleton;
    }
    singleton = this;

    // -- attributes --
    /**
     * @type {Unit[]}
     */
    this.library = [];
    UnitLibrary.importUnits();
  }

  /**
   * @param {Unit} newUnit
   */
  static addUnit(newUnit) {
    singleton.library.push(newUnit);
  }

  static sortLibrary() {
    singleton.library = Unit.sort(singleton.library);
  }

  static importUnits() {
    for (let i = 0, len = units.length; i < len; i++) {
      this.addUnit(Unit.fromObject(units[i]));
    }
    this.sortLibrary();
  }

  /**
   * Return a recommended Unit for value
   * @param {number} value Traveled meter
   * @param {string} system
   * @return {Unit}
   */
  static getUnitForValue(value, system) {
    const units = Unit.sort(this.getUnitsForSystem(system));
    console.log(units);
    let acceptableUnit = units[0];
    for (let i = units.length - 1; i >= 0; i--) {
      const unit = units[i];
      if (unit.fromMeter(value) >= 1) {
        acceptableUnit = unit;
        break;
      }
    }
    return acceptableUnit;
  }

  /**
   * @param {string} system
   * @return {Unit[]}
   */
  static getUnitsForSystem(system) {
    if (!system) {
      return singleton.library;
    }
    const res = [];
    for (let i = 0, len = singleton.library.length; i < len; i++) {
      const unit = singleton.library[i];
      if (unit.system === system) {
        res.push(unit);
      }
    }
    return res;
  }


}