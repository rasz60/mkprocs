package com.processmaker.mkprocs.modules.products.service.impl;

import com.processmaker.mkprocs.modules.factory.entity.Factory;
import com.processmaker.mkprocs.modules.factory.repository.FactoryRepository;
import com.processmaker.mkprocs.modules.platform.entity.Platform;
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

        Products pd = setProducts(productsDto);
        String pdNum = productsRepository.save(pd).getPdNum();

        Map<String, Object> result = new HashMap<>();
        result.put("pdNum", pdNum);

        rst = new Result(200, result, "상품 등록이 완료되었습니다.");

        return rst;
    }

    public Result read() throws Exception {
        Result rst = null;

        Map<String, Object> result = new HashMap<>();

        List<Products> products = productsRepository.findAll();
        result.put("pdList", products);

        rst = new Result(200, result, "조회 성공.");

        return rst;
    }

    public Products setProducts(ProductsDto productsDto) throws Exception {
        setPdFcInfo(productsDto);
        setPdColorInfo(productsDto);
        setPdCategoryInfo(productsDto);

        return Products.of(productsDto);
    }

    public void setPdFcInfo(ProductsDto productsDto) throws Exception {
        Optional<Factory> fc = factoryRepository.findById(productsDto.getPdFcNum());
        if ( fc.isPresent() ) {
            productsDto.setPdFcInfo(fc.get());
        } else {
            throw new RuntimeException("FactoryNotFound.");
        }
    }

    public void setPdColorInfo(ProductsDto productsDto) throws Exception {
        Optional<ProductColors> pdc = productColorsRepository.findById(productsDto.getPdColorNum());
        if ( pdc.isPresent() ) {
            productsDto.setPdColorInfo(pdc.get());
        } else {
            throw new RuntimeException("ProductColorNotFound.");
        }
    }
    public void setPdCategoryInfo(ProductsDto productsDto) throws Exception {
        Optional<ProductCategory> pdcg = productCategoryRepository.findById(productsDto.getPdCategoryNum());
        if ( pdcg.isPresent() ) {
            productsDto.setPdCategoryInfo(pdcg.get());
        } else {
            throw new RuntimeException("ProductCategoryNotFound.");
        }
    }
}
