import { title } from "process";

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name : "slug",
      type : "slug",
      title : "Slug",
      options : {
        source : "name"
      } 
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Category of the product (e.g., Drink, Dessert, Sandwich)',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price',
    },
    {
      name: 'originalPrice',
      type: 'number',
      title: 'Original Price',
      description: 'Price before discount',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for the product (e.g., "Popular", "Recommended")',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true, // Enables cropping and focal point selection
      },
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Availability',
      description: 'Is the product currently available?',
    },
  ],
};
