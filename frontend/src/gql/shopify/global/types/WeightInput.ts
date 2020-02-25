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

declare type WeightUnit = {
	GRAMS: "GRAMS";
	KILOGRAMS: "KILOGRAMS";
	OUNCES: "OUNCES";
	POUNDS: "POUNDS";
};
