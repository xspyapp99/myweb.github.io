// FamToolApp AI Chatbot Script
// Version 2.0 - No iframe
(function() {

    // 1. AI के लिए आपकी वेबसाइट की पूरी जानकारी
    const WEBSITE_CONTEXT = `
        FamToolApp Information:
        
        --- Home Page ---
        Title: FamToolApp - The Best Parental Guidance App for Child Safety.
        Description: FamToolApp is a powerful tool for modern parents. Ensure your child's safety in the digital world with ethical parental guidance. It's completely free.
        Getting Started in 3 Steps: 1. Register Free Account. 2. Install on Child's Phone. 3. Review Activities from your web browser.
        Features include: Device Status, Location Safety, Emergency Camera, Keystroke Review, SMS Review, Call Log Review, Notification Review, Social Apps Safety, File Manager, Ambient Sound, Screenshot, Screen Review.
        Why Choose FamToolApp: Easy Install (5 mins, no root/jailbreak), Real-time Updates (every 5 mins), Protected Data (securely stored), Top Service (87% user satisfaction), 24/7 Support, Totally Free.
        About: FamToolApp is a leading Parental Guidance solution for Android phones/tablets. It helps protect kids from cyberbullying, online predators, etc.
        Ratings: 4.8 stars based on 25,381 reviews. 1,452,384 happy customers in 192 countries.
        Responsible Usage Policy: Designed for legal and ethical purposes only, such as parental guidance for your own underage children. You must inform the device owner.

        --- Features Page ---
        The app is an all-in-one digital safety solution.
        - Device Status: Check battery level, Wi-Fi, and network signal.
        - Location Safety: Real-time GPS tracking.
        - Emergency Camera Access: Access front and back cameras in emergencies.
        - Keystroke Review for Safety: See what your child types to protect them from cyberbullying and harmful content.
        - SMS Message Review: Read sent and received text messages.
        - Call Log Review: Review call history.
        - Notification Review: See notifications from all apps.
        - Social Apps Safety (Coming Soon): Understand interactions on WhatsApp, Instagram, Facebook.
        - File Manager for Safety (Coming Soon): Review files and folders.
        - Ambient Sound Review (Coming Soon): Listen to the phone's surroundings in emergencies.
        - On-Demand Screenshot (Coming Soon): Capture the screen instantly.
        - Live Screen Review (Coming Soon): Review screen activity.

        --- Installation Guide ---
        Step 1: Create Your Parent Account on the Parent Panel or from the app.
        Step 2: Adjust Google Play Protect. Open Play Store > Profile > Play Protect > Settings gear icon to turn it off. This is to ensure safety features run smoothly.
        Step 3: Install the APK, log in with your parent account, and allow essential permissions (Location, SMS, Camera).
        Step 4: Enable required system services like Overdraw, Accessibility, Notification Listener, and add to Whitelist. Then complete setup. The app runs discreetly.
        Video tutorials are available for installation and usage.

        --- About Us Page ---
        Mission: To empower parents with powerful, easy-to-use tools for digital safety, fostering open communication and trust. Core principles are Security First, Empowerment, and Building Trust.
        Story: The idea for FamToolApp was born in 2023 by parents and tech enthusiasts. It was publicly launched in 2025.
        Team: Alex Johnson (Founder & CEO), Maria Garcia (Lead Developer), David Chen (Head of Security), Sarah Lee (UX/UI Designer).

        --- FAQ Page ---
        - Is FamToolApp free? Yes, all core features are completely free.
        - Why adjust Google Play Protect? Because the app uses advanced safety features not available on the Play Store, adjusting settings ensures correct installation.
        - Is my login secure? Yes, all data has end-to-end encryption. Only you can access it with your password.
        - Can I manage multiple devices? Yes, from a single parent account.
        - What if the phone reboots or loses internet? The app restarts automatically and syncs data once the internet is back.
        - Do I need to allow all permissions? Yes, for the app to function correctly.
        - What if the app stops working? Ensure battery optimization is disabled for the app.
        - Can I uninstall and delete data? Yes, deleting the child's profile from your dashboard deletes all data from servers in real-time.
        - How to contact support? Via the Contact page or email.

        --- Privacy Policy ---
        - Commitment: Your family's privacy is the highest priority.
        - Information Collected: Location, communication logs (SMS, calls), multimedia files, keystroke data, app notifications, device info.
        - Data Security: End-to-end encryption. Only the parent's login can decrypt the data. We never sell or share data with third parties.
        - Data Retention: All data is automatically and permanently deleted from servers every 7 days. Deleting an account removes all data in real-time.
        - Account Management: Incomplete setup or inactivity (over 30 days) may lead to account closure for security reasons.

        --- Terms and Conditions ---
        - Agreement: By using the service, you agree to the terms.
        - Legal and Ethical Use: The service is for parental guidance of your own minor children, employee guidance on company devices with consent, or on a device of a consenting adult.
        - Prohibited Activities: Using the app for illegal purposes, harassment, or on a device without proper authorization is prohibited and will lead to account termination.
        - Disclaimer: The service is provided "AS IS". FamToolApp is not liable for any damages resulting from your use or misuse of the service.
    `;

    // 2. चैटबॉट का HTML स्ट्रक्चर
    const chatbotHTML = `
        <div id="chat-widget-container" class="fixed bottom-5 right-5 z-50" style="font-family: 'Inter', sans-serif;">
            <div id="chat-window" class="hidden absolute bottom-[70px] right-0 w-[90vw] max-w-md h-[70vh] bg-gray-900 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform origin-bottom-right scale-95 opacity-0">
                <div class="bg-gray-800 p-4 rounded-t-2xl flex items-center justify-between border-b border-gray-700">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        </div>
                        <div>
                            <h3 class="font-bold text-white">FamToolApp Assistant</h3>
                            <p class="text-xs text-green-400">● Online</p>
                        </div>
                    </div>
                    <button id="close-chat-btn" class="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <div id="chat-messages" class="flex-1 p-4 overflow-y-auto">
                    <div class="flex items-start gap-3 mb-4">
                        <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        </div>
                        <div class="bg-gray-800 p-3 rounded-lg rounded-tl-none max-w-xs">
                            <p class="text-sm text-white">Hello! I am the FamToolApp AI assistant. How can I help you today?</p>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-gray-900 rounded-b-2xl border-t border-gray-700">
                    <form id="chat-form" class="flex items-center gap-2">
                        <input type="text" id="chat-input" placeholder="Ask a question..." class="flex-1 bg-gray-800 border border-gray-700 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" autocomplete="off">
                        <button type="submit" class="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                        </button>
                    </form>
                </div>
            </div>
            <button id="chat-toggle-btn" class="w-14 h-14 bg-purple-600 rounded-full shadow-lg flex items-center justify-center text-white transform hover:scale-110 transition-transform">
                 <svg id="chat-icon" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                 <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    `;

    // 3. चैटबॉट के लिए CSS स्टाइल
    const chatbotCSS = `
        #chat-messages::-webkit-scrollbar { width: 6px; }
        #chat-messages::-webkit-scrollbar-track { background: #1f2937; }
        #chat-messages::-webkit-scrollbar-thumb { background: #8b5cf6; border-radius: 3px; }
        #chat-messages::-webkit-scrollbar-thumb:hover { background: #7c3aed; }
        #chat-widget-container { font-family: 'Inter', sans-serif; }
    `;

    // 4. पेज पर HTML और CSS जोड़ना
    document.addEventListener('DOMContentLoaded', () => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = chatbotCSS;
        document.head.appendChild(styleSheet);

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);

        // 5. चैटबॉट के लॉजिक को शुरू करना
        initializeChatbot();
    });

    // 6. चैटबॉट का मुख्य लॉजिक
    function initializeChatbot() {
        const chatWindow = document.getElementById('chat-window');
        const chatToggleBtn = document.getElementById('chat-toggle-btn');
        const closeChatBtn = document.getElementById('close-chat-btn');
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');
        const chatMessages = document.getElementById('chat-messages');
        const chatIcon = document.getElementById('chat-icon');
        const closeIcon = document.getElementById('close-icon');

        const toggleChatWindow = () => {
            if (chatWindow.classList.contains('hidden')) {
                chatWindow.classList.remove('hidden');
                setTimeout(() => chatWindow.classList.remove('scale-95', 'opacity-0'), 10);
                chatIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                chatWindow.classList.add('scale-95', 'opacity-0');
                setTimeout(() => chatWindow.classList.add('hidden'), 300);
                chatIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        };

        chatToggleBtn.addEventListener('click', toggleChatWindow);
        closeChatBtn.addEventListener('click', toggleChatWindow);

        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const userInput = chatInput.value.trim();
            if (!userInput) return;

            addMessage(userInput, 'user');
            chatInput.value = '';
            showTypingIndicator();

            try {
                const aiResponse = await getAIResponse(userInput);
                removeTypingIndicator();
                addMessage(aiResponse, 'ai');
            } catch (error) {
                removeTypingIndicator();
                addMessage("Sorry, I'm having trouble connecting. Please try again later.", 'ai');
                console.error("Error fetching AI response:", error);
            }
        });

        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `flex items-start gap-3 mb-4 ${sender === 'user' ? 'justify-end' : ''}`;
            const content = `
                ${sender === 'ai' ? `<div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></div>` : ''}
                <div class="${sender === 'user' ? 'bg-purple-600 text-white rounded-lg rounded-br-none' : 'bg-gray-800 text-white rounded-lg rounded-tl-none'} p-3 max-w-xs">
                    <p class="text-sm">${text.replace(/\n/g, '<br>')}</p>
                </div>
            `;
            messageDiv.innerHTML = content;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.id = 'typing-indicator';
            typingDiv.className = 'flex items-start gap-3 mb-4';
            typingDiv.innerHTML = `
                <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></div>
                <div class="bg-gray-800 p-3 rounded-lg rounded-tl-none"><div class="flex items-center gap-1"><span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0s;"></span><span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s;"></span><span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></span></div></div>
            `;
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function removeTypingIndicator() {
            const indicator = document.getElementById('typing-indicator');
            if (indicator) indicator.remove();
        }

        async function getAIResponse(prompt) {
            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
            const fullPrompt = `${WEBSITE_CONTEXT}\n\n---\n\nINSTRUCTION: You are a helpful and friendly assistant for the FamToolApp website. Your name is FamToolApp Assistant. Answer the user's question based *only* on the information provided above. If the answer is not in the information, say "I'm sorry, I don't have information on that. Please visit our contact page for more specific questions." Do not make up answers. Answer in the same language as the user's question.\n\nUSER QUESTION: "${prompt}"\n\nANSWER:`;
            const payload = { contents: [{ parts: [{ text: fullPrompt }] }] };
            let retries = 3, delay = 1000;
            for (let i = 0; i < retries; i++) {
                try {
                    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                    if (response.ok) {
                        const result = await response.json();
                        if (result.candidates && result.candidates[0].content.parts[0].text) {
                            return result.candidates[0].content.parts[0].text;
                        }
                    }
                    if (response.status === 429) {
                        await new Promise(res => setTimeout(res, delay));
                        delay *= 2;
                        continue;
                    }
                    throw new Error(`API Error: ${response.statusText}`);
                } catch (error) {
                    if (i === retries - 1) throw error;
                    await new Promise(res => setTimeout(res, delay));
                    delay *= 2;
                }
            }
            return "I'm sorry, I couldn't process your request at the moment. Please try again.";
        }
    }
})();
