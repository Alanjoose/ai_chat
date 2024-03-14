import Message from "./modules/Message";
import ApiClient from "./modules/ApiClient";
import { API_TOKEN } from "./modules/api_token";

const $message_form = document.querySelector('form#message-form');
$message_form.addEventListener('submit', function(event) {
    event.preventDefault();
    const message = new Message();
    const apiClient = new ApiClient({
        url: 'https://api.openai.com/v1/chat/completions',
        token: API_TOKEN,
        model_id: 'gpt-3.5-turbo',
        headers: {
            "Content-Type": "application/json",
            "Auhorization": "Bearer "+API_TOKEN,
            "Accept": "application/json"
        }
    });
    const inputValue = document.querySelector('input[name="message-content"]').value.trim();
    const chat_gpt_response = apiClient.send_message(inputValue);
    message.content = inputValue;
    message.build(true);
    if(chat_gpt_response) {
        message.content = chat_gpt_response.choices[0].message;
        message.build(false);
    }
    else {
        return false;
    }
});