package com.growx.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/test")
    public Map<String, String> testEndpoint() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Backend is connected successfully!");
        response.put("status", "UP");
        return response;
    }
}
