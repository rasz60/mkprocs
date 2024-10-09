package com.processmaker.mkprocs.modules.factory.service;

import com.processmaker.mkprocs.modules.factory.dto.FactoryDto;
import com.processmaker.mkprocs.utils.Result;

public interface FactoryService {

    public Result create(FactoryDto factoryDto) throws Exception;
    public Result read() throws Exception;
}
