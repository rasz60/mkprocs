package com.processmaker.mkprocs.modules.products.service.impl;

import ch.qos.logback.core.util.StringUtil;
import com.processmaker.mkprocs.modules.products.dto.ProductCategoryDto;
import com.processmaker.mkprocs.modules.products.entity.ProductCategory;
import com.processmaker.mkprocs.modules.products.repository.ProductCategoryRepository;
import com.processmaker.mkprocs.modules.products.service.ProductCategoryService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
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
        if ( StringUtil.isNullOrEmpty(level) && StringUtil.isNullOrEmpty(parentCategoryId)) {
            categories = ProductCategoryDto.of(productCategoryRepository.findByPdCategoryLevel(1));
        } else if (!StringUtil.isNullOrEmpty(level) && StringUtil.isNullOrEmpty(parentCategoryId) ) {
            categories = ProductCategoryDto.of(productCategoryRepository.findByPdCategoryLevel(Integer.parseInt(level)));
        }
        else {
            Optional<ProductCategory> ppd = productCategoryRepository.findById(Long.parseLong(parentCategoryId));

            if (ppd.isPresent()) {
                categories = ProductCategoryDto.of(productCategoryRepository.findByPdParentCategoryInfoAndPdCategoryLevel(ppd.get(), Integer.parseInt(level)));
            }

        }
        Map<String, Object> pdCtList = new HashMap<>();
        pdCtList.put("pdCtList", categories);

        rst = new Result(200, pdCtList, "조회 성공." );

        return rst;
    }
}
