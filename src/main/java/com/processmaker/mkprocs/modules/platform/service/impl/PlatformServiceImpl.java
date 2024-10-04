package com.processmaker.mkprocs.modules.platform.service.impl;

import com.processmaker.mkprocs.modules.platform.dto.PlatformDto;
import com.processmaker.mkprocs.modules.platform.entity.Platform;
import com.processmaker.mkprocs.modules.platform.repository.PlatformRepository;
import com.processmaker.mkprocs.modules.platform.service.PlatformService;
import com.processmaker.mkprocs.utils.Result;

import java.util.HashMap;
import java.util.Map;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlatformServiceImpl implements PlatformService {

    public final PlatformRepository platformRepository;

    public Result create(PlatformDto platformDto) throws Exception {
        Result rst = null;

        Platform pf = Platform.of(platformDto);
        platformRepository.save(pf);

        Map<String, Object> result = new HashMap<>();
        result.put("pfNum", pf.getPfNum());

        rst = new Result(200, result, "성공적으로 등록 되었습니다.");

        return rst;
    }

    public Result read() {
        Result rst = new Result();

        return rst;
    }
}
