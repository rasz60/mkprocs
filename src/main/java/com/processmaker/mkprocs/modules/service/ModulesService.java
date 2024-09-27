package com.processmaker.mkprocs.modules.service;

import com.processmaker.mkprocs.modules.dto.ModulesDto;
import com.processmaker.mkprocs.modules.entity.Modules;
import com.processmaker.mkprocs.utils.Result;

import java.util.List;

public interface ModulesService {

    public Result create(ModulesDto modulesDto);

    public Result read();
}
