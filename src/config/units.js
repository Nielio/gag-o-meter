export const UnitSystems = {
  metric: 'metric',
  imperial: 'imperial',
};

/**
 * multiplier: How many meter are one of it (1cm is 0.01 meter)
 * @type {[*]}
 */
export const units = [
  {
    "multiplier": 0.01,
    "name": "centimeter",
    "nameShort": "cm",
    "system": UnitSystems.metric
  },
  {
    "multiplier": 1,
    "name": "meter",
    "nameShort": "m",
    "system": UnitSystems.metric
  },
  {
    "multiplier": 1000,
    "name": "kilometer",
    "nameShort": "km",
    "system": UnitSystems.metric
  },
  {
    "multiplier": 0.0254,
    "name": "inch",
    "nameShort": "",
    "system": UnitSystems.imperial
  },
  {
    "multiplier": 0.3048,
    "name": "foot",
    "nameShort": "'",
    "system": UnitSystems.imperial
  },
  {
    "multiplier": 0.9144,
    "name": "yard",
    "nameShort": "yd",
    "system": UnitSystems.imperial
  },
  {
    "multiplier": 1609.344,
    "name": "mile",
    "nameShort": "m",
    "system": UnitSystems.imperial
  }
];
