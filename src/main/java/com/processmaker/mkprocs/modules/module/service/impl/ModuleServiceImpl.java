package com.processmaker.mkprocs.modules.module.service.impl;

import com.processmaker.mkprocs.modules.module.dto.ModuleDto;
import com.processmaker.mkprocs.modules.module.entity.Module;
import com.processmaker.mkprocs.modules.module.repository.ModuleRepository;
import com.processmaker.mkprocs.modules.module.service.ModulesService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class ModuleServiceImpl implements ModulesService {

    private final ModuleRepository moduleRepository;
    @Override
    public Result create(ModuleDto moduleDto) {
        Result rst = null;

        try {
            Module module = Module.of(moduleDto);
            moduleRepository.save(module);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "모듈 생성 실패.");
        }

        return rst;
    }

    @Override
    public Result read() {
        Result rst = null;
        Map<String, Object> result = new HashMap<>();
        try {
            List<Module> list = moduleRepository.findAll();
            result.put("modules", list);

            rst = Result.builder()
                        .resultCode(200)
                        .result(result)
                        .resultMessage("모듈 조회 성공.")
                        .build();
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "모듈 조회 실패.");
        }

        return rst;
    }
}
