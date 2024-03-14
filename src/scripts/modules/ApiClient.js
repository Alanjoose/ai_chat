import Message from "./Message";

export default class ApiClient {
    constructor(configs) {
        this.url = configs.url;
        this.model_id = configs.model_id;
        this.headers = configs.headers;
        this.send_message = this.send_message.bind(this);
    }

    async send_message(payload) {
        const message = new Message();
        const request = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: this.headers,
            body: JSON.stringify(payload)
        }).catch((error) => {
            message.content = error.message;
            message.build(false);
            console.error('Error: ' + error.message);
        }),
        response = await request.json();
        return response;
    }
}