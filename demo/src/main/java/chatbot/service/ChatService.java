package chatbot.service;

import org.springframework.stereotype.Service;

@Service
public class ChatService {

    public String getResponse(String input) {
        if (input == null || input.isEmpty()) {
            return "Please say something!";
        }

        input = input.toLowerCase();

        if (input.contains("hello") || input.contains("hi")) {
            return "Hello! How are you today?";
        } else if (input.contains("how are you")) {
            return "I'm just code, but I'm doing great! Thanks for asking.";
        } else if (input.contains("your name")) {
            return "I'm Chatty, your rule-based chatbot.";
        } else if (input.contains("weather")) {
            return "I can't check the weather, but I hope it's nice where you are!";
        } else if (input.contains("joke")) {
            return "Why do Java developers wear glasses? Because they don't see sharp!";
        } else {
            return "Sorry, I don't understand that. Can you try asking something else?";
        }
    }
}
