const { gpt } = require('gpti');
async function test() {
    try {
        gpt.v1({
            messages: [{role: 'user', content: 'Halo'}],
            prompt: 'Halo',
            markdown: false
        }, (err, data) => {
            if(err != null) console.log("gpti error:", err);
            else console.log("gpti success:", data);
        });
    } catch(e) {
        console.error(e);
    }
}
test();
