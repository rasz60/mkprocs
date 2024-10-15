package com.processmaker.mkprocs.modules.orders.controller;

import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.utils.Result;
import jakarta.servlet.annotation.MultipartConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/rest/od")
@RequiredArgsConstructor
public class OrderController {

    public final OrderService orderService;
    @PostMapping("create")
    public Result create(@RequestPart("orderData") MultipartFile orderData) {
        System.out.println(orderData);
        return null;
    }
    @GetMapping("list")
    public Result read() {
        return orderService.read();
    }
}
