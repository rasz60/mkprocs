package com.processmaker.mkprocs.modules.products.controller;

import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.modules.products.service.ProductService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/pd")
@RequiredArgsConstructor
public class ProductController {

    public final ProductService productService;

    @GetMapping("list")
    public Result read() {
        return productService.read();
    }
}
