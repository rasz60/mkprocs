package com.processmaker.mkprocs.modules.products.service.impl;

import com.processmaker.mkprocs.modules.products.dto.ProductColorsDto;
import com.processmaker.mkprocs.modules.products.entity.ProductColors;
import com.processmaker.mkprocs.modules.products.repository.ProductColorsRepository;
import com.processmaker.mkprocs.modules.products.service.ProductColorService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductColorServiceImpl implements ProductColorService {

    private final ProductColorsRepository productColorsRepository;


    @Override
    public Result dupchk(String pdColorCode, String pdColorName) throws Exception {
        Result rst = null;
        int cnt = 0;
        int resultCode = 200;
        String resultMessage = "";
        cnt = productColorsRepository.countByPdColorCode("#"+pdColorCode);
        if ( cnt > 0 ) {
            resultCode = 501;
            resultMessage = "이미 등록된 색상 코드입니다.";
            return new Result(resultCode, resultMessage);
        }

        cnt = productColorsRepository.countByPdColorName(pdColorName);
        if ( cnt > 0 ) {
            resultCode = 502;
            resultMessage = "이미 등록된 색상 이름입니다.";
            return new Result(resultCode, resultMessage);
        }

        if ( cnt == 0 ) {
            resultMessage = "사용 가능한 색상 코드와 이름입니다.";
        }

        rst = new Result(resultCode, resultMessage);

        return rst;
    }

    public Result create(ProductColorsDto productColorsDto) throws Exception {
        Result rst = null;
        rst = dupchk(productColorsDto.getPdColorCode(), productColorsDto.pdColorName);

        if ( rst.getResultCode() == 200 ) {
            productColorsRepository.save(ProductColors.of(productColorsDto));
            rst.setResultMessage("색상 등록에 성공했습니다.");
        }

        return rst;
    }

    @Override
    public Result read() throws Exception {
        Result rst = null;

        Map<String, Object> result = new HashMap<>();
        result.put("pdCrList", ProductColorsDto.of(productColorsRepository.findAllByOrderByPdColorCodeAsc()));

        rst = new Result(200, result, "조회 성공");

        return rst;
    }

}
