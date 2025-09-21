package chatbot.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

    @GetMapping("/")
    public String home() {
        return "ChatBot API is running. Use /chat?message=your_message";
    }
}

