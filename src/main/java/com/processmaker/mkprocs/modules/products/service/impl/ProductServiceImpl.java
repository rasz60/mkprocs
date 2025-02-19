package com.processmaker.mkprocs.modules.products.service.impl;

import com.processmaker.mkprocs.modules.factory.entity.Factory;
import com.processmaker.mkprocs.modules.factory.repository.FactoryRepository;
import com.processmaker.mkprocs.modules.products.dto.ProductsDto;
import com.processmaker.mkprocs.modules.products.entity.ProductCategory;
import com.processmaker.mkprocs.modules.products.entity.ProductColors;
import com.processmaker.mkprocs.modules.products.entity.Products;
import com.processmaker.mkprocs.modules.products.repository.ProductCategoryRepository;
import com.processmaker.mkprocs.modules.products.repository.ProductColorsRepository;
import com.processmaker.mkprocs.modules.products.repository.ProductsRepository;
import com.processmaker.mkprocs.modules.products.service.ProductService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductsRepository productsRepository;
    private final FactoryRepository factoryRepository;
    private final ProductColorsRepository productColorsRepository;
    private final ProductCategoryRepository productCategoryRepository;
    @Override
    public Result create(ProductsDto productsDto) throws Exception {
        Result rst = null;

        Products pd = Products.of(productsDto);

        Optional<Factory> fc = factoryRepository.findById(productsDto.getPdFcNum());
        if ( fc.isPresent() ) {
            pd.setPdFcInfo(fc.get());
        } else {
            return new Result(501, null, "존재하지 않는 제조사입니다.");
        }

        Optional<ProductCategory> ct = productCategoryRepository.findById(productsDto.getPdCategoryLv3Num());
        if ( ct.isPresent() ) {
            pd.setPdCategoryInfo(ct.get());
        } else {
            return new Result(502, null, "존재하지 않는 카테고리입니다.");
        }

        Optional<ProductColors> cr = productColorsRepository.findById(productsDto.getPdColorNum());
        if ( cr.isPresent() ) {
            pd.setPdColorInfo(cr.get());
        } else {
            return new Result(503, null, "존재하지 않는 색상입니다.");
        }

        Long pdNum = productsRepository.save(pd).getPdNum();
        Map<String, Object> result = new HashMap<>();

        result.put("pdNum", pdNum);

        rst = new Result(200, result, "상품 등록이 완료되었습니다.");

        return rst;
    }

    public Result read() throws Exception {
        Result rst = null;

        Map<String, Object> result = new HashMap<>();

        List<Products> products = productsRepository.findAll();
        result.put("pdList", ProductsDto.of(products));

        rst = new Result(200, result, "조회 성공.");

        return rst;
    }
}
