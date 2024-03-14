export default class Message {
    constructor(content) {
        this.content = content;
        this.all = this.all.bind(this);
        this.build = this.build.bind(this);
    };

    build(is_mine) {
        const create_element = (element) => document.createElement(element),
        $messages_container = document.querySelector('#messages-container'),
        $new_message_container = create_element('section'),
        $message_sender_resume_container = create_element('div'),
        $message_sender_resume_image = create_element('img'),
        $message_sender_resume_name_element = create_element('p'),
        message_sender_data = {
            image: is_mine ? './assets/img/User.png' :'./assets/img/ChatGPT_logo.svg.png',
            name: is_mine ? 'You' : 'ChatGpt',
        },
        $messages_content_element = create_element('p');

        $new_message_container.classList.add('message');

        $message_sender_resume_container.classList.add('message-sender-resume');
        $message_sender_resume_image.setAttribute('src', message_sender_data.image);
        $message_sender_resume_image.classList.add('message-sender-pic');
        $message_sender_resume_name_element.innerText = message_sender_data.name;
        $message_sender_resume_container.appendChild($message_sender_resume_image);
        $message_sender_resume_container.appendChild($message_sender_resume_name_element);
        $new_message_container.appendChild($message_sender_resume_container);

        $messages_content_element.classList.add('message-content');
        $messages_content_element.innerText = this.content;
        $new_message_container.appendChild($messages_content_element);

        $messages_container.appendChild($new_message_container);
        return true;
    };
}