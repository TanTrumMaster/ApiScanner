import fs from 'fs';
import postmanToOpenApi from 'postman-to-openapi';

const postmanCollection = 'postman_collection.json';
const outputFile = 'openapi.yaml';

async function convertPostmanToOpenApi() {
    try {
        const result = await postmanToOpenApi(postmanCollection, outputFile, {
            defaultTag: 'General',
        });

        console.log(`OpenAPI file created successfully at: ${result}`);
    } catch (error) {
        console.error('Error converting Postman collection to OpenAPI:', error);
        // Add additional error handling here
    }
}

convertPostmanToOpenApi();
