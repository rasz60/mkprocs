package com.processmaker.mkprocs.modules.products.service;

import com.processmaker.mkprocs.utils.Result;

public interface ProductColorService {
    public Result dupchk(String pdColorCode, String pdColorName) throws Exception;
}
