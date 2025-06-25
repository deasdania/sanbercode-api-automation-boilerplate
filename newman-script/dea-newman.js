const newman = require("newman");

newman.run({
    collection: "./json-collection/dea-project.postman_collection.json",
    environment: "./json-env/dea-env.postman_environment.json",
    reporters: ["cli", "htmlextra"]
}, function (err) {
    if (err) { 
        console.error('❌ Newman run failed:', err);
        process.exit(1);
    }
    console.log('✅ Newman run completed successfully!');
});