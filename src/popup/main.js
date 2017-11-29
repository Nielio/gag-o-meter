import {Data} from "../common/Data.js";
import {DOM} from "./DOM.js";
import {UnitLibrary} from "../common/UnitLibrary.js";

require('./style.scss');

document.addEventListener("DOMContentLoaded", function (event) {

  new Data();
  new DOM();
  new UnitLibrary();

  setTimeout(() => document.body.classList.add('ready'), 200);

  Data.distance = Math.random() * 0.3;

});