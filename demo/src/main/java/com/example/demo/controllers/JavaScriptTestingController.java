package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class JavaScriptTestingController {
	@GetMapping("/javascript")
	public String javaScriptTestDisplay() {
		return "javascript-testing";
	}
}
