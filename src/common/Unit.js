import {config} from "../config/config.js";

export class Unit {

  /**
   * @param {number} multiplier Based on meter. (1 for 1 meter, .01 for centimeter)
   * @param {string} name Full name of unit. e.g. centimeter
   * @param {string} nameShort short name of unit. e.g. cm
   * @param {string} system units system. e.g metric, imperial
   */
  constructor(multiplier, name, nameShort, system) {
    this.multiplier = multiplier;
    this.name = name;
    this.nameShort = nameShort;
    this.system = system;
  }

  /**
   * @param {object} obj
   * @return {Unit}
   */
  static fromObject(obj) {
    return new Unit(obj.multiplier, obj.name, obj.nameShort, obj.system);
  }

  fromMeter(value) {
    return value / this.multiplier;
  }

  /**
   * Sort an array of Units by multiplier.
   * @param {Unit[]} arr
   * @return {Unit[]}
   */
  static sort(arr) {
    return arr.sort((a, b) => a.multiplier - b.multiplier);
  }

  /**
   * Convert dots per inch of users screen to pixel per meter.
   * @return {number}
   */
  static get pixelPerMeter() {
    return config.screenDpi / 2.54 * 100;
  }

  /**
   * Convert pixel to meter depending on users screen
   * @param pixel
   * @return {number}
   */
  static picelToMeter(pixel) {
    return pixel / this.pixelPerMeter;
  }

}