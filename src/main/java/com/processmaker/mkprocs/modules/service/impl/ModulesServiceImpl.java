package com.processmaker.mkprocs.modules.service.impl;

import com.processmaker.mkprocs.modules.dto.ModulesDto;
import com.processmaker.mkprocs.modules.entity.Modules;
import com.processmaker.mkprocs.modules.repository.ModulesRepository;
import com.processmaker.mkprocs.modules.service.ModulesService;
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
public class ModulesServiceImpl implements ModulesService {

    private final ModulesRepository modulesRepository;
    @Override
    public Result create(ModulesDto modulesDto) {
        Result rst = null;

        try {
            Modules module = Modules.of(modulesDto);
            modulesRepository.save(module);
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
            List<Modules> list = modulesRepository.findAll();
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
