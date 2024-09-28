document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');

    const questions = [
        {
            question: 'What information and documents are required to obtain the services of the Legal Aid Department?',
            answer: 'The required documents include: a) Identity card, b) Original marriage/divorce certificate, c) Divorce order, d) Child birth certificate, e) Employment details, f) Name of employer, g) Certificate from employer, h) Salary statement, i) Medical report, j) Police report, k) Witness information, l) Confirmation of residency of the claimant, m) Any related documents.'
        },
        {
            question: 'What is the law that governs the Legal Aid Department?',
            answer: 'The Legal Aid Act 1971 governs the Legal Aid Department. The department is also regulated by the Legal Aid Regulations 2017 and the Legal Aid (Mediation) Regulations 2006.'
        },
        {
            question: 'What is the objective of the Legal Aid Department?',
            answer: 'The Legal Aid Department was established to provide legal assistance and mediation services to indigent individuals and raise legal awareness within the community.'
        },
        {
            question: 'What are the criteria that qualify me to get legal aid?',
            answer: 'To qualify, you must be a Malaysian citizen aged 18 or above. If the applicant is under 18, a parent or guardian must apply on their behalf.'
        },
        {
            question: 'If I am eligible for legal aid, will I be charged any fees?',
            answer: 'You only need to pay a registration fee of RM 10 if your financial resources are less than RM 50,000 annually. Higher financial resources may require additional contributions.'
        },
        {
            question: 'What happens if both parties in a dispute are represented by the Legal Aid Department?',
            answer: 'Both parties will be referred to mediation. If mediation fails, the case will be sent to a panel of lawyers appointed by the Legal Aid Department.'
        },
        {
            question: 'What will happen if both parties involved in a dispute are represented by the Legal Aid Department? ',
            answer: 'If this happens, both parties will be referred to a mediation session at our Department to find a solution out of court. If mediation fails, their case will be referred to a panel of lawyers appointed by the Department in accordance with section 5 of the Legal Aid Act 1971 and legal fees will be paid by the Legal Aid Department.'
        },
        {
            question: 'Am I still eligible for assistance even though my case is outside the jurisdiction of the Legal Aid Department? ',
            answer: 'An application for a case outside the jurisdiction of the Department as stated in subsection 10(2A) and 12(3) of the Legal Aid Act 1971 may be submitted to the Minister through the Director General for consideration and exemption provided that there is merit in the application.'
        },
        {
            question: 'What form of legal advice is provided by the Legal Aid Department? ',
            answer: 'According to section 29 of the Legal Aid Act 1971, legal advice shall consist of oral advice on legal matters relating to Malaysian law.'
        }
    ];

    // Display bot message
    function displayBotMessage(message, options) {
        const messageElem = document.createElement('div');
        messageElem.classList.add('message', 'bot');
        messageElem.innerHTML = `<p>${message}</p>`;
        
        if (options) {
            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('options-container');
            options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option.title;
                button.onclick = () => handleOptionClick(option);
                optionsContainer.appendChild(button);
            });
            messageElem.appendChild(optionsContainer);
        }

        chatBox.appendChild(messageElem);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Display user message
    function displayUserMessage(message) {
        const messageElem = document.createElement('div');
        messageElem.classList.add('message', 'user');
        messageElem.innerHTML = `<p>${message}</p>`;
        chatBox.appendChild(messageElem);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Handle option click
    function handleOptionClick(option) {
        displayUserMessage(option.title);
        setTimeout(() => {
            const answer = questions.find(q => q.question === option.question).answer;
            displayBotMessage(answer);
        }, 500);
    }

    // Add event listener for send button
    sendBtn.addEventListener('click', function () {
        const message = userInput.value;
        if (message.trim() !== '') {
            displayUserMessage(message);
            userInput.value = '';
        }
    });

    // Initial Bot Message in Two Parts
    displayBotMessage('Hello! How can I assist you today?', [
        { title: 'What documents are required for legal aid?', question: questions[0].question },
        { title: 'What is the law governing Legal Aid?', question: questions[1].question },
        { title: 'What is the objective of the Legal Aid Department?', question: questions[2].question },
        { title: 'What are the criteria that qualify me to get legal aid?', question: questions[3].question },
        { title: 'If I am eligible for legal aid, will I be charged any fees?', question: questions[4].question },
        { title: 'What happens if both parties in a dispute are represented by the Legal Aid Department?', question: questions[5].question },
        { title: 'What will happen if both parties involved in a dispute are represented by the Legal Aid Department?', question: questions[6].question },
        { title: 'Am I still eligible for assistance even though my case is outside the jurisdiction of the Legal Aid Department?', question: questions[7].question },
        { title: 'What form of legal advice is provided by the Legal Aid Department?', question: questions[8].question },
    ]);


});
