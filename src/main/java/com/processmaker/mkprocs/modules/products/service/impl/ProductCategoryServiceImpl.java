package com.processmaker.mkprocs.modules.products.service.impl;

import ch.qos.logback.core.util.StringUtil;
import com.processmaker.mkprocs.modules.products.dto.ProductCategoryDto;
import com.processmaker.mkprocs.modules.products.entity.ProductCategory;
import com.processmaker.mkprocs.modules.products.repository.ProductCategoryRepository;
import com.processmaker.mkprocs.modules.products.service.ProductCategoryService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.internal.log.SubSystemLogging;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductCategoryServiceImpl implements ProductCategoryService {

    private final ProductCategoryRepository productCategoryRepository;
    @Override
    public Result create(ProductCategoryDto productCategoryDto) throws Exception {
        Result rst = null;
        ProductCategory pdct = null;

        Long parentNum = productCategoryDto.getPdParentCategoryNum();

        Optional<ProductCategory> opPdct = productCategoryRepository.findById(parentNum);

        if (opPdct.isPresent()) {
            ProductCategory parentPdct = opPdct.get();
            productCategoryDto.setPdParentCategoryInfo(parentPdct);
        } else {
            throw new RuntimeException("ParentCategoryNotFound.");
        }

        pdct = ProductCategory.of(productCategoryDto);
        pdct.setPdCategoryState("Y");
        Long pdctNum = productCategoryRepository.save(pdct).getPdCategoryNum();

        Map<String, Object> result = new HashMap<>();
        result.put("pdCategoryNum", pdctNum);

        rst = new Result(200, result, "카테고리 등록이 완료되었습니다.");

        return rst;
    }
    @Override
    public Result read(String level, String parentCategoryId) throws Exception {
        Result rst = null;
        List<ProductCategoryDto> categories = new ArrayList<>();
        if ( StringUtil.isNullOrEmpty(level) && StringUtil.isNullOrEmpty(parentCategoryId)) { // parameter 모두 빈 값일 때
            categories = ProductCategoryDto.of(productCategoryRepository.findByPdCategoryLevel(1)); // 대분류만 조회
        }
        else if (!StringUtil.isNullOrEmpty(level) && StringUtil.isNullOrEmpty(parentCategoryId) ) { // 특정 분류 레벨만 조회 시
            categories = ProductCategoryDto.of(productCategoryRepository.findByPdCategoryLevel(Integer.parseInt(level))); // 해당되는 분류만 조회
        }
        else { // parameter 모두 존재하는 경우
            Optional<ProductCategory> ppd = productCategoryRepository.findById(Long.parseLong(parentCategoryId)); // 부모 카테고리 조회

            if (ppd.isPresent()) { // 부모 카테고리가 존재하는 경우
                categories = ProductCategoryDto.of(productCategoryRepository.findByPdParentCategoryInfoAndPdCategoryLevel(ppd.get(), Integer.parseInt(level)));
            }
        }
        Map<String, Object> pdCtList = new HashMap<>();
        pdCtList.put("pdCtList", categories);

        rst = new Result(200, pdCtList, "조회 성공." );

        return rst;
    }

    @Override
    public Result update(ProductCategoryDto productCategoryDto) throws Exception {
        Result rst = null;
        int rstCode = 0;
        String rstMsg = "";

        long ctNum = productCategoryDto.getPdCategoryNum();
        ProductCategory ct = getPresentObject(ctNum);
        if ( ct != null ) {
            ct.setPdCategoryName(productCategoryDto.getPdCategoryName());
            productCategoryRepository.save(ct);
            rstCode = 200;
            rstMsg = "카테고리 수정에 성공했습니다.";
        } else {
            rstCode = 401;
            rstMsg = "존재하지 않는 카테고리 입니다.";
        }
        rst = new Result(rstCode, rstMsg );
        return rst;
    }


    @Override
    public Result delete(String productCategoryNum) throws Exception {
        Result rst = null;
        int rstCode = 0;
        String rstMsg = "";

        ProductCategory ct = getPresentObject(Long.parseLong(productCategoryNum));
        if ( ct != null ) {
            productCategoryRepository.delete(ct);
            rstCode = 200;
            rstMsg = "카테고리 삭제에 성공했습니다.";
        } else {
            rstCode = 401;
            rstMsg = "존재하지 않는 카테고리 입니다.";
        }

        rst = new Result(rstCode, rstMsg );
        return rst;
    }

    private ProductCategory getPresentObject(long productCategoryNum) {
        ProductCategory ct = null;
        Optional<ProductCategory> targetCt = productCategoryRepository.findById(productCategoryNum);
        if ( targetCt.isPresent() ) {
            ct = targetCt.get();
        }
        return ct;
    }
}
