// // sanity/schemas/product.ts
// import { defineField, defineType } from 'sanity'

// export default defineType({
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     // ID field (optional; some people prefer using 'slug' or let Sanity auto-generate IDs)
//     defineField({
//       name: 'productId',
//       title: 'Product ID',
//       type: 'number',
//       description: 'A unique numeric ID for the product (optional if you use slug).',
//       validation: (Rule) => Rule.required(),
//     }),

//     defineField({
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),

//     // For images, we typically use 'image' type in Sanity.
//     // If you want multiple images, use 'array' of type 'image'.
//     defineField({
//       name: 'image',
//       title: 'Product Image',
//       type: 'image',
//       options: {
//         hotspot: true, // enables image cropping in the UI
//       },
//       validation: (Rule) => Rule.required(),
//     }),

//     defineField({
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//       validation: (Rule) => Rule.required().min(0),
//     }),

//     defineField({
//       name: 'salePrice',
//       title: 'Sale Price',
//       type: 'number',
//       description: 'If on sale, specify the discounted price. Otherwise, leave blank or zero.',
//       validation: (Rule) => Rule.min(0),
//     }),

//     defineField({
//       name: 'quantity',
//       title: 'Quantity',
//       type: 'number',
//       description: 'Inventory count of this product.',
//       validation: (Rule) => Rule.required().min(0),
//     }),

//     defineField({
//       name: 'rating',
//       title: 'Rating',
//       type: 'number',
//       description: 'Average rating (0 to 5).',
//       validation: (Rule) => Rule.min(0).max(5),
//     }),

//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//       description: 'A detailed description of the product.',
//     }),
//   ],
// })
// //ye?hn





import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    // Unique Identifier
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'Unique identifier for the product.',
      validation: (Rule) => Rule.required(),
    }),

    // Product Name
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Product Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description of the product.',
      validation: (Rule) => Rule.required(),
    }),

    // Product Category
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category of the product (e.g., hoodie, jacket).',
      validation: (Rule) => Rule.required(),
    }),

    // Discount Percentage
    defineField({
      name: 'discountPercent',
      title: 'Discount Percentage',
      type: 'number',
      description: 'Discount percentage for the product.',
      validation: (Rule) => Rule.min(0).max(100),
    }),

    // Product Price
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Base price of the product.',
      validation: (Rule) => Rule.required().min(0),
    }),

    // Colors
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available colors for the product.',
    }),

    // Sizes
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available sizes for the product.',
    }),

    // Product Image
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
      description: 'URL of the product image.',
      validation: (Rule) => Rule.required().uri({ allowRelative: true }),
    }),

    // New Product Flag
    defineField({
      name: 'isNew',
      title: 'Is New',
      type: 'boolean',
      description: 'Indicates if the product is new.',
      initialValue: false,
    }),
  ],
});
//scripts ka folder add nhi hai?