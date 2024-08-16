// Import required modules
import fs from 'fs';
import postmanToOpenApi from 'postman-to-openapi';

// Define the paths
const postmanCollection = './zap/wrk/postman_collection.json'; // Path to your Postman collection JSON file
const outputFile = './zap/wrk/openapi.yaml'; // Path where the OpenAPI YAML file will be generated

// Function to convert Postman collection to OpenAPI YAML
async function convertPostmanToOpenApi() {
    try {
        // Convert the Postman collection to OpenAPI YAML
        const result = await postmanToOpenApi(postmanCollection, outputFile, {
            defaultTag: 'General', // Optional: Default tag for untagged endpoints
        });

        console.log(`OpenAPI file created successfully at: ${result}`);
    } catch (error) {
        console.error('Error converting Postman collection to OpenAPI:', error);
    }
}

// Call the conversion function
convertPostmanToOpenApi();
