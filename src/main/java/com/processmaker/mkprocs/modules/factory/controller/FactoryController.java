package com.processmaker.mkprocs.modules.factory.controller;

import com.processmaker.mkprocs.modules.factory.service.FactoryService;
import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/fc")
@RequiredArgsConstructor
public class FactoryController {

    public final FactoryService factoryService;

    @GetMapping("list")
    public Result read() {
        return factoryService.read();
    }
}
