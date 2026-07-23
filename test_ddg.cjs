const { image_search } = require('duckduckgo-images-api');
async function run() {
    try {
        const results = await image_search({ query: "hantu kuntilanak seram", moderate: true });
        console.log(results[0].image);
    } catch(e) { console.error(e) }
}
run();
