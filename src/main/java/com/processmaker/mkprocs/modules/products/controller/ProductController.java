package com.processmaker.mkprocs.modules.products.controller;

import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.modules.products.dto.ProductCategoryDto;
import com.processmaker.mkprocs.modules.products.dto.ProductsDto;
import com.processmaker.mkprocs.modules.products.entity.Products;
import com.processmaker.mkprocs.modules.products.service.ProductCategoryService;
import com.processmaker.mkprocs.modules.products.service.ProductService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/pd")
@RequiredArgsConstructor
@Slf4j
public class ProductController {

    public final ProductService productService;
    public final ProductCategoryService productCategoryService;

    @PostMapping("create")
    public Result create(@RequestBody ProductsDto productsDto) {
        Result rst = null;
        try {
            rst = productService.create(productsDto);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    @PostMapping("ct/create")
    public Result categoryCreate(@RequestBody ProductCategoryDto productCategoryDto) {
        Result rst = null;
        try {
            rst = productCategoryService.create(productCategoryDto);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }


    @GetMapping("list")
    public Result read() {
        Result rst = null;
        try {
            rst = productService.read();
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    @GetMapping("ct/list")
    public Result categoryRead() {
        Result rst = null;
        try {
            rst = productCategoryService.read();
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }
}
