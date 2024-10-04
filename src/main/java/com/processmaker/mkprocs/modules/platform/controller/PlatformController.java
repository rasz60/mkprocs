package com.processmaker.mkprocs.modules.platform.controller;

import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.modules.platform.dto.PlatformDto;
import com.processmaker.mkprocs.modules.platform.service.PlatformService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/pf")
@RequiredArgsConstructor
@Slf4j
public class PlatformController {

    public final PlatformService platformService;

    @PostMapping("create")
    public Result create(@RequestBody PlatformDto platformDto) {
        Result rst = null;
        try {
            rst = platformService.create(platformDto);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류");
        }

        return rst;
    }

    @GetMapping("list")
    public Result read() {
        return platformService.read();
    }
}
