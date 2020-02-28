import ProductVariantInput from "../../ProductVariantInput";

export const varianProductTemplate: ProductVariantInput = {
	id: "gid://shopify/x/112121",
	imageId: "gid://shopify/image/21321",
	imageSrc:
		"https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg",
	inventoryItem: {
		cost: 123,
		tracked: true
	},
	inventoryManagement: "SHOPIFY",
	inventoryQuantities: [
		{
			availableQuantity: 12,
			locationId: "gid://shopify/location/21654542364"
		}
	],
	price: "123.7",
	weightUnit: "OUNCES",
	barcode: "i dont know how the fuck does a barcode looks like",
	compareAtPrice: "xd",
	fulfillmentServiceId: "the fuck",
	harmonizedSystemCode: "dude why",
	inventoryPolicy: "CONTINUE",
	metafields: [
		{
			description: "test metafield",
			id: "gid://shopify/metafield/231231232",
			key: "Test metafield",
			namespace: "I have no namespace XD",
			value: "Its like i have a big store lol",
			valueType: "INTEGER"
		}
	],
	options: ["any"],
	position: 1,
	privateMetafields: [
		{
			key: "TPM",
			namespace: "Nonamespacexd",
			owner: "gid://shopify/products/12323423",
			valueInput: {
				value: "sadsda",
				valueType: "JSON_STRING"
			}
		}
	],
	productId: "gid://shopify/product/13213213213",
	requiresShipping: true,
	sku: "WhatTheFuckIsSKU",
	taxCode: "231658",
	taxable: "AintThisABoolean?",
	title: "TestTitle",
	weight: 465
};
