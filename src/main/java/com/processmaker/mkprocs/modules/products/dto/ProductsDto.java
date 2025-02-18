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
    private Long pdColorNum;
    private ProductColors pdColorInfo;
    private LocalDateTime pdRegistDate;
    private int pdPrice;
    private String pdState;
    private int pdMount;

    private ProductCategory pdCategoryLv1;
    private ProductCategory pdCategoryLv2;
    private ProductCategory pdCategoryLv3;
    private Long pdCategoryLv1Num;
    private Long pdCategoryLv2Num;
    private Long pdCategoryLv3Num;
    public ProductsDto() {}

    public static ProductsDto of(Products products) {
        ProductsDto pdDto = new ProductsDto();

        pdDto.setPdCategoryInfo(products.getPdCategoryInfo());

        pdDto.setPdNum(products.getPdNum());
        pdDto.setPdFcInfo(products.getPdFcInfo());
        pdDto.setPdName(products.getPdName());
        pdDto.setPdRegistDate(products.getPdRegistDate());
        pdDto.setPdPrice(products.getPdPrice());
        pdDto.setPdState(products.getPdState());
        pdDto.setPdMount(products.getPdMount());

        return pdDto;
    }

    public static List<ProductsDto> of(List<Products> products) {
        return products.stream().map(pd -> (ProductsDto) ProductsDto.of(pd)).toList();
    }

    public void setPdCategoryInfo(ProductCategory productCategory) {
        if ( productCategory != null ) {
            this.setPdCategoryLv3(productCategory);
            this.setPdCategoryLv3Num(productCategory.getPdCategoryNum());

            this.setPdCategoryLv2(productCategory.getPdParentCategoryInfo());
            this.setPdCategoryLv2Num(productCategory.getPdParentCategoryInfo().getPdCategoryNum());

            this.setPdCategoryLv1(productCategory.getPdParentCategoryInfo().getPdParentCategoryInfo());
            this.setPdCategoryLv1Num(productCategory.getPdParentCategoryInfo().getPdParentCategoryInfo().getPdCategoryNum());
        }
    }
}
