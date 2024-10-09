package com.processmaker.mkprocs.modules.factory.controller;

import com.processmaker.mkprocs.modules.factory.dto.FactoryDto;
import com.processmaker.mkprocs.modules.factory.service.FactoryService;
import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.modules.platform.dto.PlatformDto;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/fc")
@RequiredArgsConstructor
@Slf4j
public class FactoryController {

    public final FactoryService factoryService;
    @PostMapping("create")
    public Result create(@RequestBody FactoryDto factoryDto) {
        Result rst = null;
        try {
            rst = factoryService.create(factoryDto);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류");
        }
        return rst;
    }

    @GetMapping("list")
    public Result read() {
        Result rst = null;
        try {
            rst = factoryService.read();
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류");
        }
        return rst;
    }
}
