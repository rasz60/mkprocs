package com.processmaker.mkprocs.modules.factory.service.impl;

import com.processmaker.mkprocs.modules.factory.dto.FactoryDto;
import com.processmaker.mkprocs.modules.factory.entity.Factory;
import com.processmaker.mkprocs.modules.factory.repository.FactoryRepository;
import com.processmaker.mkprocs.modules.factory.service.FactoryService;
import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.modules.platform.entity.Platform;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class FactoryServiceImpl implements FactoryService {

    public final FactoryRepository factoryRepository;

    public Result create(FactoryDto factoryDto) throws Exception {
        Result rst = null;

        Factory fc = Factory.of(factoryDto);
        factoryRepository.save(fc);

        Map<String, Object> result = new HashMap<>();
        result.put("fcNum", fc.getFcNum());

        rst = new Result(200, result, "성공적으로 등록 되었습니다.");

        return rst;
    }
    public Result read() throws Exception {
        Result rst = null;
        Map<String, Object> result = new HashMap<>();

        List<Factory> factories = factoryRepository.findAll();
        result.put("fcList", factories);

        rst = new Result(200, result, "조회 성공.");
        return rst;
    }
}
