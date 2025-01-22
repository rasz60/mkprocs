package com.processmaker.mkprocs.modules.products.controller;

import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.modules.products.dto.ProductCategoryDto;
import com.processmaker.mkprocs.modules.products.dto.ProductsDto;
import com.processmaker.mkprocs.modules.products.entity.Products;
import com.processmaker.mkprocs.modules.products.service.ProductCategoryService;
import com.processmaker.mkprocs.modules.products.service.ProductColorService;
import com.processmaker.mkprocs.modules.products.service.ProductService;
import com.processmaker.mkprocs.utils.ExcelParser;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
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
    public final ProductColorService productColorService;
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
        } catch (DataIntegrityViolationException dive) {
            log.error(dive.getMessage());
            rst = new Result(500, "선택한 상위 분류에 이미 등록된 카테고리 입니다.");
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
    public Result categoryReadLevel() {
        return categoryRead(null, null);
    }

    @GetMapping("ct/list/{level}")
    public Result categoryReadLevel(@PathVariable(required = false) String level) {
        return categoryRead(level, null);
    }

    @GetMapping("ct/list/{level}/{parentCategoryId}")
    public Result categoryRead(@PathVariable(required = false) String level
                             , @PathVariable(required = false) String parentCategoryId) {
        Result rst = null;
        try {
            rst = productCategoryService.read(level, parentCategoryId);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }


    @PostMapping("ct/update")
    public Result categoryUpdate(@RequestBody ProductCategoryDto productCategoryDto) {
        Result rst = null;
        try {
            rst = productCategoryService.update(productCategoryDto);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    @DeleteMapping("ct/delete/{productCategoryNum}")
    public Result categoryDelete(@PathVariable("productCategoryNum") String productCategoryNum) {
        Result rst = null;
        try {
            rst = productCategoryService.delete(productCategoryNum);
        } catch (Exception e) {

            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    @GetMapping("cr/dupchk/{pdColorCode}/{pdColorName}")
    public Result colorDupchk(@PathVariable("pdColorCode") String pdColorCode, @PathVariable("pdColorName") String pdColorName) {
        Result rst = null;
        try {
            rst = productColorService.dupchk(pdColorCode, pdColorName);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }
}
