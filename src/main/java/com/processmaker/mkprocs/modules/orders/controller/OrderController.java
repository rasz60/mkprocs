package com.processmaker.mkprocs.modules.orders.controller;

import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.utils.ExcelParser;
import com.processmaker.mkprocs.utils.Result;
import jakarta.servlet.annotation.MultipartConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rest/od")
@RequiredArgsConstructor
@Slf4j
public class OrderController {

    public final OrderService orderService;
    public final ExcelParser excelParser;
    @PostMapping("parseBulk")
    public Result parseBulk(@RequestParam("orderData") MultipartFile orderData) {
        Result rst = null;
        try {
            rst = orderService.parseBulk(orderData);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return rst;
    }
    @PostMapping("createBulk")
    public Result create(@RequestParam("orderData") MultipartFile orderData) {
        Result rst = null;
        try {
            rst = orderService.parseBulk(orderData);
            //orderService.createBulk(orderData);
            //List<Map<String, String>> parseData = excelParser.upload(orderData);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return rst;
    }
    @GetMapping("list")
    public Result read() {
        return orderService.read();
    }
}
