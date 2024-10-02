package com.processmaker.mkprocs.modules.orders.controller;

import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/order")
@RequiredArgsConstructor
public class OrderController {

    public final OrderService orderService;

    @GetMapping("list")
    public Result read() {
        return orderService.read();
    }
}
