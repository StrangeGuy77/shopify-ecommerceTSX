/**
 * @description Specifies the weight unit and value inputs.
 * @param unit (WeightUnit) Unit of measurement for value.
 * @param value (float) The weight value using the unit system specified with weight_unit.
 */

export interface WeightInput {
	unit: WeightUnit;
	value: number;
}

/**
 * @description Units of measurement for weight.
 * @typedef GRAMS Metric system unit of mass.
 * @typedef KILOGRAMS 1 kilogram equals to 1000 grams
 * @typedef OUNCES Imperial system unit of mass.
 * @typedef POUNDS 1 pound equals 16 ounces.
 */

export declare type WeightUnit = GRAMS | KILOGRAMS | OUNCES | POUNDS;

declare type GRAMS = "GRAMS";
declare type KILOGRAMS = "KILOGRAMS";
declare type OUNCES = "OUNCES";
declare type POUNDS = "POUNDS";
