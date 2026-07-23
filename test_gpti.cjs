const { blackbox } = require("gpti");
blackbox({
    messages: [
        { role: "user", content: "Hello, my name is John." }
    ],
    markdown: false
}, (err, data) => {
    if(err != null){
        console.log(err);
    } else {
        console.log(data);
    }
});
