package com.processmaker.mkprocs.modules.products.service;

import com.processmaker.mkprocs.modules.products.dto.ProductColorsDto;
import com.processmaker.mkprocs.utils.Result;

public interface ProductColorService {
    public Result dupchk(String pdColorCode, String pdColorName) throws Exception;

    public Result create(ProductColorsDto productColorsDto) throws Exception;
    public Result read() throws Exception;
}
