const axios = require('axios');

async function ddgChat(query) {
    try {
        const init = await axios.get('https://duckduckgo.com/duckchat/v1/status', {
            headers: { 'x-vqd-accept': '1' }
        });
        const vqd = init.headers['x-vqd-4'];
        if (!vqd) return null;

        const res = await axios.post('https://duckduckgo.com/duckchat/v1/chat', {
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: query }]
        }, {
            headers: {
                'x-vqd-4': vqd,
                'Content-Type': 'application/json'
            }
        });

        // Response is server-sent events
        const text = res.data;
        const lines = text.split('\n');
        let answer = '';
        for (const line of lines) {
            if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                const data = JSON.parse(line.substring(6));
                if (data.message) answer += data.message;
            }
        }
        return answer;
    } catch (e) {
        console.error(e.message);
        return null;
    }
}

ddgChat('halo').then(console.log);
