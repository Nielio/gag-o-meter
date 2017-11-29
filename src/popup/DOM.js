import {Data} from "../common/Data.js";
import {UnitLibrary} from "../common/UnitLibrary.js";
import {config} from "../config/config.js";

let singleton;

export class DOM {

  constructor() {
    if (singleton) {
      return singleton;
    }
    singleton = this;
  }

  /**
   *
   * @returns {Element}
   */
  static get distance() {
    return document.getElementById('distance');
  }

  /**
   *
   * @returns {Element}
   */
  static get distanceUnit() {
    return document.getElementById('distance-unit');
  }

  /**
   *
   * @param {Element} element
   * @param {string | number} content
   * @private
   */
  static _updateElementsTextContent(element, content) {
    const oldContent = element.textContent;
    const newContent = content + ''; // cast to string
    if (oldContent === newContent) {
      return;
    }
    element.textContent = newContent;
  }

  static updateDistance() {
    const unit = UnitLibrary.getUnitForValue(Data.distance, config.unitSystem);
    DOM._updateElementsTextContent(this.distance, Math.round(unit.fromMeter(Data.distance)));
    DOM._updateElementsTextContent(this.distanceUnit, unit.name);
  }

}
