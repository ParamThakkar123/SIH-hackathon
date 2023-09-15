import React, { useState } from 'react'
import axios from 'axios'

const Chatbot = () => {
    const PALM_API_KEY = "AIzaSyBG2xjYOlpeivuM2dSatzBu_0Kgtpsm_kY";
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const generateText = async () => {
        if(inputText.trim() === ''){
            return;
        }

        const apiURL = 'https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage';
        const requestData = {
            prompt: {
                context: '',
                examples: [],
                messages: [{content: inputText}] 
            },
            temperature: 0.25,
            top_k: 40,
            top_p: 0.95,
            candidate_count: 1,
        };
        const headers = {
            'Content-Type': 'application/json'
        };

        try{
            const response = await axios.post(`${apiURL}?key=${PALM_API_KEY}`, requestData, {
                headers,
            })

            if(response.status === 200){
                if(response.data && response.data.candidates && response.data.candidates.length > 0){
                    const botResponse = response.data.candidates[0].content;
                    
                    const newUserMessage = {
                        id: messages.length + 1,
                        text: inputText,
                        sender: 'user',
                        timestamp: new Date().getTime(),
                    };
    
                    const newBotMessage = {
                        id: messages.length + 1,
                        text: botResponse,
                        sender: 'bot',
                        timestamp: new Date().getTime(),
                    };

                    setMessages([...messages, newUserMessage, newBotMessage]);
                    setInputText('');
                }else{
                    console.error('Response structure is not as expected!!');
                }
            }else{
                console.error('Google cloud API response failed with status: ', response.status);
            }
        } catch(error){
            console.error('An error occurred while making the google cloud API request ', error);
        }
    }
  return (
    <div>
        <li>
            
        </li>
    </div>
  )
}

export default Chatbot