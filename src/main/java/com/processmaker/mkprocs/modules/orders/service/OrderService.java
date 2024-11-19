package com.processmaker.mkprocs.modules.orders.service;

import com.processmaker.mkprocs.utils.Result;
import org.springframework.web.multipart.MultipartFile;

public interface OrderService {

    public Result read();
    public Result parseBulk(MultipartFile orderData) throws Exception;
}
