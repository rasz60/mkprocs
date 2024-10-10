package com.processmaker.mkprocs.modules.products.service.impl;

import com.processmaker.mkprocs.modules.products.dto.ProductCategoryDto;
import com.processmaker.mkprocs.modules.products.entity.ProductCategory;
import com.processmaker.mkprocs.modules.products.repository.ProductCategoryRepository;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class ProductCategoryServiceImpl {

    private final ProductCategoryRepository productCategoryRepository;

    public Result create(ProductCategoryDto productCategoryDto) throws Exception {
        Result rst = null;
        ProductCategory pdct = null;

        String parentNum = productCategoryDto.getPdParentCategoryNum();

        if (! "".equals(parentNum) ) {
            Optional<ProductCategory> opPdct = productCategoryRepository.findById();

            if (opPdct.isPresent()) {
                ProductCategory parentPdct = opPdct.get();
                productCategoryDto.setPdParentCategoryInfo(parentPdct);
            } else {
                throw new RuntimeException("ParentCategoryNotFound.");
            }
        }

        pdct = ProductCategory.of(productCategoryDto);
        String pdctNum = productCategoryRepository.save(pdct).getPdCategoryNum();

        Map<String, Object> result = new HashMap<>();
        result.put("pdCategoryNum", pdctNum);

        rst = new Result(200, result, "카테고리 등록이 완료되었습니다.");

        return rst;
    }

    public Result read() throws Exception {
        Result rst = null;

        List<ProductCategory> categories = productCategoryRepository.findAll();
        
        // dto List로 변환

        return rst;
    }
}
