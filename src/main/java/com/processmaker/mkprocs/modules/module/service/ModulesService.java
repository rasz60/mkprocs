package com.processmaker.mkprocs.modules.module.service;

import com.processmaker.mkprocs.modules.module.dto.ModuleDto;
import com.processmaker.mkprocs.utils.Result;

public interface ModulesService {

    public Result create(ModuleDto moduleDto);

    public Result read();
}
