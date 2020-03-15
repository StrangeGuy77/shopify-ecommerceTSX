import ProductInput from "../ProductInput";
import {varianProductTemplate} from "./variants/variantProductTemplate";

const productTemplate: ProductInput = {
	id: "gid://triedthisthingforfourtimeorso",
	images: [
		{
			id: "gid://image/132123132",
			src:
				"https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg",
			altText: "test"
		}
	],
	title: "templateProduct",
	bodyHtml: "<div>TestHtml</div>",
	collectionsToJoin: ["TestCollection"],
	collectionsToLeave: ["TestCollectionToLeave"],
	descriptionHtml: "<div>TestDescriptionHtml</div>",
	giftCard: true,
	giftCardTemplateSuffix: "this",
	handle: "ThatHandled",
	metafields: [
		{
			description: "TestDescriptionMetafield",
			id: "gid://shopify/metafield/549874986",
			key: "Test",
			namespace: "NoNamespace",
			value: "TestValue",
			valueType: "JSON_STRING"
		}
	],
	options: ["any"],
	privateMetafields: [
		{
			key: "TestKey",
			namespace: "NoNamespace",
			owner: "gid://shopify/admin/123456",
			valueInput: {
				value: "TestValue",
				valueType: "STRING"
			}
		}
	],
	productPublications: [
		{
			publicationId: "gid://shopify/product/123166",
			publishDate: "2016-02-28",
			channelHandle: "WhatsThis",
			channelId: "gid://shopify/channels/123984"
		}
	],
	productType: "static",
	publishDate: "2016-02-28",
	publishOn: "2016-02-28",
	published: true,
	publishedAt: "2018-02-28",
	redirectNewHandle: true,
	seo: {
		description: "TestDescription",
		title: "TestTitle"
	},
	tags: ["Test", "Template", "Product"],
	templateSuffix: "TemplateThing",
	vendor: "TestingThisThingForFourthTimeOrSo",
	variants: [
		{
			id: "gid://shopify/products/13213",
			imageId: "gid://shopify/image/1213213",
			imageSrc:
				"https://cdn.shopify.com/s/files/1/0315/8661/5429/products/pepsi-max-fizzy-drinks-coca-cola-diet-pepsi-png-favpng-76miEzkheWgQTB2uJT8tCyWd6.jpg?v=1580415232",
			inventoryItem: {
				cost: 132,
				tracked: true
			},
			inventoryManagement: "SHOPIFY",
			inventoryQuantities: [
				{
					availableQuantity: 132,
					locationId: "132"
				}
			],
			price: "132.7",
			weightUnit: "KILOGRAMS",
			barcode: "45654456456",
			compareAtPrice: "500",
			fulfillmentServiceId: "gid://shopify/fulfillment/2654697498",
			harmonizedSystemCode: "08081000",
			inventoryPolicy: "CONTINUE",
			metafields: [
				{
					description: "Test metafield description",
					id: "gid://shopify/metafield/1235296849",
					key: "metafield-test",
					namespace: "NoNamespace",
					value: "Testvalue",
					valueType: "STRING"
				}
			],
			options: ["any"],
			position: 2,
			privateMetafields: [
				{
					key: "testPrivateMetafield",
					namespace: "NoNamespace",
					owner: "gid://shopify/admin/customer/465465465",
					valueInput: {
						value: "TestValue",
						valueType: "STRING"
					}
				}
			],
			productId: "gid://shopify/product/132165498",
			requiresShipping: true,
			sku: "NoSKU",
			taxCode: "165498",
			taxable: "ThisShouldBeABoolean",
			title: "TestTitle",
			weight: 123
		},
		varianProductTemplate
	]
};

export default productTemplate;
