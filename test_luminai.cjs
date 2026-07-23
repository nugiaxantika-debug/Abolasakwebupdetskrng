const axios = require('axios');
async function test() {
    try {
        const res = await axios.post("https://luminai.my.id/", {
            content: "Halo",
            user: "user_1"
        });
        console.log("Success:", res.data);
    } catch(e) {
        console.log("Error:", e.message);
    }
}
test();
