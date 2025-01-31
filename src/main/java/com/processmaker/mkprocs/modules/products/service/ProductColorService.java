package com.processmaker.mkprocs.modules.products.service;

import com.processmaker.mkprocs.modules.products.dto.ProductColorsDto;
import com.processmaker.mkprocs.utils.Result;

public interface ProductColorService {
    public Result dupchk(ProductColorsDto productColorsDto) throws Exception;
    public Result create(ProductColorsDto productColorsDto) throws Exception;
    public Result read() throws Exception;
    public Result search(String srchType, String srchKeywords) throws Exception;
    public Result update(ProductColorsDto productColorsDto) throws Exception;
    public Result delete(String pdColorNum) throws Exception;
}
