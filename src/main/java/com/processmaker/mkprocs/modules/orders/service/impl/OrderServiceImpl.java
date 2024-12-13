package com.processmaker.mkprocs.modules.orders.service.impl;

import com.processmaker.mkprocs.modules.orders.entity.Orders;
import com.processmaker.mkprocs.modules.orders.repository.OrderRepository;
import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.utils.ExcelParser;
import com.processmaker.mkprocs.utils.Result;
import com.processmaker.mkprocs.works.entity.Works;
import com.processmaker.mkprocs.works.repository.WorksRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
@Slf4j
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final WorksRepository worksRepository;
    //private final ExcelParser excelParser;
    private final String excelPath;
    private final String excelParser;

    public OrderServiceImpl(OrderRepository orderRepository,
                            WorksRepository worksRepository,
                            @Value("${root.loc-path}") String locRoot,
                            @Value("${file.excel-upload.path}") String excelPath,
                            @Value("${python.modules.excel-parser}") String excelParser
    ) {
        this.orderRepository = orderRepository;
        this.worksRepository = worksRepository;
        this.excelPath       = locRoot + excelPath;
        this.excelParser     = locRoot + excelParser;
    }

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
        String workId = String.valueOf(UUID.randomUUID());
        Map<String, Object> result = new HashMap<>();
        try {
            // 파일 upload
            String originFileNm = orderData.getOriginalFilename();
            String extension = originFileNm.substring(originFileNm.lastIndexOf("."));
            File targetFile = new File(this.excelPath + workId + extension);
            orderData.transferTo(targetFile);
            rst = new Result(200, result, "업로드 성공.");

            // workID DB 저장
            worksRepository.save(Works.builder()
                                        .workId(workId)
                                        .workType("od")
                                        .workState("U")
                                        .workStartDate(LocalDateTime.now())
                                        .build());
            // python 실행 : 변수 4개 필요 (파일경로, 데이터 시작 row, 엑셀 컬럼 범위, 헤더 row)
            String modulePath = this.excelParser;

            rst = new Result(201, result, "파싱 중.");

        } catch(Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, result, "업로드 실패.");
        }

        return rst;
    }
}
