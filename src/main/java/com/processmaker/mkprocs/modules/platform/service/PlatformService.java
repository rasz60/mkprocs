package com.processmaker.mkprocs.modules.platform.service;

import com.processmaker.mkprocs.modules.platform.dto.PlatformDto;
import com.processmaker.mkprocs.utils.Result;

public interface PlatformService {

    public Result create(PlatformDto platformDto) throws Exception ;
    public Result read() throws Exception;
}
