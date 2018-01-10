package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class HelloController {

	@GetMapping("/hello")
	@ResponseBody
	public String hello() {
		return "Hello from Spring!";
	}
	
	@GetMapping("/hello/{name}")
	@ResponseBody
	public String hello(@PathVariable String name) {
		return "Hello, "+ name +"!";
	}
}
