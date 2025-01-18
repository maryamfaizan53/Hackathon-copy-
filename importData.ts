import { createClient } from '@sanity/client';

// Define the product type for TypeScript
interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  discountPercent?: number;
  isNew?: boolean;
  colors: string[];
  sizes: string[];
}

// Initialize the Sanity client
const client = createClient({
  projectId: 'p8r5n9ko', // Replace with your project ID
  dataset: 'production', // Replace with your dataset
  useCdn: true,
  apiVersion: '2025-01-13',
  token: process.env.SANITY_API_TOKEN, // Use an environment variable for security
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl: string): Promise<string | null> {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

// Function to upload a single product to Sanity
async function uploadProduct(product: Product): Promise<void> {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product', // Match your Sanity schema name
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew || false,
        colors: product.colors,
        sizes: product.sizes,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.warn(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error(`Error uploading product "${product.name}":`, error);
  }
}

// Function to fetch products from the external API and upload them to Sanity
async function importProducts(): Promise<void> {
  try {
    console.log('Fetching products from the external API...');
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products: Product[] = await response.json();

    console.log(`Fetched ${products.length} products. Starting upload...`);

    for (const product of products) {
      await uploadProduct(product);
    }

    console.log('All products uploaded successfully.');
  } catch (error) {
    console.error('Error fetching or uploading products:', error);
  }
}

// Run the import process
importProducts();





// import urlBuilder from '@sanity/image-url';
// import { createClient } from '@sanity/client';


// const client = createClient({
//   projectId: 'p8r5n9ko',
//   dataset: 'production',
//   useCdn: true,
//   apiVersion: '2025-01-13',
//   token: 'sk6W4KlLhji0gspQg0rFiV50YHGNGEV0pG5jk8G4JqkBVk4OQVXvmZNFW2cpHpRIoZ7kBYuzXfUl1MIZr5hUIJcpBdFbsqLG8RwRVpxe6968HO385utwm9aShR42IOBmi5y3PMpnuzRM2wL78GuSPuSs0W9D6GorqwPydyg8aOimCO3PeUKt',
// });

// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);

//     const response = await fetch(imageUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch image: ${imageUrl}`);
//     }

//     const buffer = await response.arrayBuffer();
//     const bufferImage = Buffer.from(buffer);

//     const asset = await client.assets.upload('image', bufferImage, {
//       filename: imageUrl.split('/').pop(),
//     });

//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error);
//     return null;
//   }
// }

// async function uploadProduct(product: any) {
//   try {
//     const imageId = await uploadImageToSanity(product.imageUrl);

//     if (imageId) {
//       const document = {
//         _type: 'products',
//         name: product.name,
//         description: product.description,
//         price: product.price,
//         image: {
//           _type: 'image',
//           asset: {
//             _ref: imageId,
//           },
//         },
//         category: product.category,
//         discountPercent: product.discountPercent,
//         isNew: product.isNew,
//         colors: product.colors,
//         sizes: product.sizes
//       };

//       const createdProduct = await client.create(document);
//       console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
//     } else {
//       console.log(`Product ${product.name} skipped due to image upload failure.`);
//     }
//   } catch (error) {
//     console.error('Error uploading product:', error);
//   }
// }

// async function importProducts() {
//   try {
//     const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const products = await response.json();

//     for (const product of products) {
//       await uploadProduct(product);
//     }
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }

// importProducts();