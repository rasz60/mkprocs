package com.processmaker.mkprocs.modules.products.service;

import com.processmaker.mkprocs.modules.products.dto.ProductsDto;
import com.processmaker.mkprocs.utils.Result;

public interface ProductService {

    public Result create(ProductsDto productsDto) throws Exception;
    public Result read() throws Exception;

}
