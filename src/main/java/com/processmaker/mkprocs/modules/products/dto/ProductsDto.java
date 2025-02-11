package com.processmaker.mkprocs.modules.products.dto;

import com.processmaker.mkprocs.modules.factory.entity.Factory;
import com.processmaker.mkprocs.modules.products.entity.ProductCategory;
import com.processmaker.mkprocs.modules.products.entity.ProductColors;
import com.processmaker.mkprocs.modules.products.entity.Products;
import lombok.Data;
import java.util.List;
import java.time.LocalDateTime;

@Data
public class ProductsDto {

    private Long pdNum;
    private Long pdFcNum;
    private Factory pdFcInfo;
    private String pdName;
    private Long pdCategoryNum;
    private ProductCategory pdCategoryInfo;
    private Long pdColorNum;
    private ProductColors pdColorInfo;
    private LocalDateTime pdRegistDate;
    private int pdPrice;
    private String pdState;
    private int pdMount;

    public ProductsDto() {}

    public static ProductsDto of(Products products) {
        ProductsDto pdDto = new ProductsDto();

        pdDto.setPdNum(products.getPdNum());
        pdDto.setPdFcInfo(products.getPdFcInfo());
        pdDto.setPdName(products.getPdName());
        pdDto.setPdCategoryInfo(products.getPdCategoryInfo());
        pdDto.setPdRegistDate(products.getPdRegistDate());
        pdDto.setPdPrice(products.getPdPrice());
        pdDto.setPdState(products.getPdState());
        pdDto.setPdMount(products.getPdMount());

        return pdDto;
    }

    public static List<ProductsDto> of(List<Products> products) {
        return products.stream().map(pd -> (ProductsDto) ProductsDto.of(pd)).toList();
    }
}
