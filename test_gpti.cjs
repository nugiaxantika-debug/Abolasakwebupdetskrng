const { gpti } = require("gpti");

gpti({
    messages: [
        {
            role: "system",
            content: "You are a helpful assistant."
        },
        {
            role: "user",
            content: "Hello"
        }
    ],
    markdown: false,
    stream: false,
    model: "gpt-4"
}, (err, data) => {
    if(err) {
        console.log("Error:", err);
    } else {
        console.log("Response:", data);
    }
});
