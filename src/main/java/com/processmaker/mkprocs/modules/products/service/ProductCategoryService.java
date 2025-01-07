package com.processmaker.mkprocs.modules.products.service;

import com.processmaker.mkprocs.modules.products.dto.ProductCategoryDto;
import com.processmaker.mkprocs.utils.Result;

public interface ProductCategoryService {
    public Result create(ProductCategoryDto productCategoryDto) throws Exception;
    public Result read(String level, String parentCategoryId) throws Exception;
    public Result update(ProductCategoryDto productCategoryDto) throws Exception;
}
