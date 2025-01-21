import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`;


// export const allproducts = defineQuery(`
//     *[_type == "product"]{
//       _id,
//       name,
//       category,
//       price,
//       originalPrice,
//       tags,
//       "imageUrl": image.asset->url, // Fetch the full URL of the image
//       description,
//       available
//     }
//   `);
  

  // export const fourPro = defineQuery(`
  //   *[_type == "product"]{0..3}{
  //     _id,
  //     name,
  //     category,
  //     price,
  //     originalPrice,
  //     tags,
  //     "imageUrl": image.asset->url, // Fetch the full URL of the image
  //     description,
  //     available
  //   }
  // `);
    