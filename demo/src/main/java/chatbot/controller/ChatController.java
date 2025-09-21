package chatbot.controller;

import chatbot.service.ChatService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chat")

@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:5500"})// enable CORS for all methods
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    // GET: /chat?message=hello
    @GetMapping
    public String ask(@RequestParam String message) {
        if (message.equalsIgnoreCase("hello")) {
            return "Hello! How are you today?";
        }
        return chatService.getResponse(message);
    }

    // POST: /chat
    @PostMapping
    public String askPost(@RequestBody String message) {
        return chatService.getResponse(message);
    }

    // GET: /chat/home
    @GetMapping("/home")
    public String home() {
        return "Rule-Based ChatBot API is running. Use /chat?message=your_message";
    }
}

