import {Data} from "../common/Data.js";
import {UnitLibrary} from "../common/UnitLibrary.js";

document.addEventListener("DOMContentLoaded", function (event) {

  new Data();
  new UnitLibrary();

  console.log(Data);

});