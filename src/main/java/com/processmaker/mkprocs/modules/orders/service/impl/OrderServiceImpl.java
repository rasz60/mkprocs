package com.processmaker.mkprocs.modules.orders.service.impl;

import com.processmaker.mkprocs.modules.orders.entity.Orders;
import com.processmaker.mkprocs.modules.orders.repository.OrderRepository;
import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.utils.ExcelParser;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    public final ExcelParser excelParser;

    public Result read() {
        Result rst = null;

        Map<String, Object> result = new HashMap<>();

        List<Orders> orders = orderRepository.findAll();
        result.put("odList", orders);

        rst = new Result(200, result, "조회 성공.");
        return rst;
    }
    @Override
    public Result parseBulk(MultipartFile orderData) throws Exception {
        Result rst = null;

        Map<String, Object> result = excelParser.upload(orderData);

        rst = new Result(200, result, "검증 완료.");

        return rst;
    }
}
