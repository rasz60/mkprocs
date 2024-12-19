package com.processmaker.mkprocs.modules.products.controller;

import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.modules.products.dto.ProductCategoryDto;
import com.processmaker.mkprocs.modules.products.dto.ProductsDto;
import com.processmaker.mkprocs.modules.products.entity.Products;
import com.processmaker.mkprocs.modules.products.service.ProductCategoryService;
import com.processmaker.mkprocs.modules.products.service.ProductService;
import com.processmaker.mkprocs.utils.ExcelParser;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rest/pd")
@RequiredArgsConstructor
@Slf4j
public class ProductController {

    public final ProductService productService;
    public final ProductCategoryService productCategoryService;
    public final ExcelParser excelParser;

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

    @PostMapping("createBulk")
    public Result create(@RequestParam("productData") MultipartFile productData) {
        try {
            //List<Map<String, String>> parseData = excelParser.upload(productData);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return null;
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

    @GetMapping("ct/list/{level}/{parentCategoryId}")
    public Result categoryRead(@PathVariable(name = "level", required = true) String level
                             , @PathVariable(name = "parentCategoryId", required = false) String parentCategoryId) {
        Result rst = null;
        System.out.println("level : " + level + ", parentCategoryId : " +parentCategoryId);
        try {
            rst = productCategoryService.read(level, parentCategoryId);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }
}
