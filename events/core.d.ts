/**
 * Tha base value of a data layer event.
 */
export type DataLayerBaseValue = {
  [k in string]: string[] | string | number | boolean | DataLayerBaseValue | DataLayerBaseValue[];
};