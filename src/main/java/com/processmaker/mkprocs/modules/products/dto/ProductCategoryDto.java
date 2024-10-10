package com.processmaker.mkprocs.modules.products.dto;

import com.processmaker.mkprocs.modules.products.entity.ProductCategory;
import lombok.Data;
@Data
public class ProductCategoryDto {

    public String pdCategoryNum;
    public int pdCategoryLevel;
    public String pdParentCategoryNum;
    public ProductCategory pdParentCategoryInfo;
    public String pdCategoryName;


    public ProductCategoryDto() {}

    public static ProductCategoryDto of (ProductCategory productCategory) {
        ProductCategoryDto pdcDto = new ProductCategoryDto();

        pdcDto.setPdCategoryNum(productCategory.getPdCategoryNum());
        pdcDto.setPdCategoryLevel(productCategory.getPdCategoryLevel());
        pdcDto.setPdParentCategoryNum(productCategory.getPdParentCategoryInfo().getPdCategoryNum());
        pdcDto.setPdParentCategoryInfo(productCategory.getPdParentCategoryInfo());
        pdcDto.setPdCategoryName(productCategory.getPdCategoryName());

        return pdcDto;
    }
}
