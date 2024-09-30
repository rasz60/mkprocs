package com.processmaker.mkprocs.controller.rest;

import com.processmaker.mkprocs.modules.dto.ModulesDto;
import com.processmaker.mkprocs.modules.entity.Modules;
import com.processmaker.mkprocs.modules.service.ModulesService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rest")
@RequiredArgsConstructor
public class MkprocsRestController {

    public final ModulesService modulesService;

    @PostMapping("modules/create")
    public Result create(@RequestBody ModulesDto ModulesDto) {
        return modulesService.create(ModulesDto);
    }
    @GetMapping("modules/list")
    public Result read() {
        return modulesService.read();
    }

    @GetMapping("test")
    public Result test() { return new Result(200, (Map<String, Object>) new HashMap<String,Object>().put("test","success"), "테스트 성공."); }
}
