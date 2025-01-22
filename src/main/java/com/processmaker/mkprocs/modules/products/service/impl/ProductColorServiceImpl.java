package com.processmaker.mkprocs.modules.products.service.impl;

import com.processmaker.mkprocs.modules.products.repository.ProductColorsRepository;
import com.processmaker.mkprocs.modules.products.service.ProductColorService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
        cnt = productColorsRepository.countByPdColorCode(pdColorCode);
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
}
