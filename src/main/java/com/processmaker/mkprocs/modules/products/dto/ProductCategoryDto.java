package com.processmaker.mkprocs.modules.products.dto;

import com.processmaker.mkprocs.modules.products.entity.ProductCategory;
import lombok.Data;
import java.util.List;
@Data
public class ProductCategoryDto {

    public Long pdCategoryNum;
    public int pdCategoryLevel;
    public Long pdParentCategoryNum;
    public ProductCategory pdParentCategoryInfo;
    public String pdCategoryName;
    public String pdCategoryState;

    public ProductCategoryDto() {}

    public static ProductCategoryDto of (ProductCategory productCategory) {
        ProductCategoryDto pdcDto = new ProductCategoryDto();

        pdcDto.setPdCategoryNum(productCategory.getPdCategoryNum());
        pdcDto.setPdCategoryLevel(productCategory.getPdCategoryLevel());
        if ( productCategory.getPdParentCategoryInfo() != null )
            pdcDto.setPdParentCategoryNum(productCategory.getPdParentCategoryInfo().getPdCategoryNum());
        pdcDto.setPdParentCategoryInfo(productCategory.getPdParentCategoryInfo());
        pdcDto.setPdCategoryName(productCategory.getPdCategoryName());
        pdcDto.setPdCategoryState(productCategory.getPdCategoryState());

        return pdcDto;
    }

    public static List<ProductCategoryDto> of (List<ProductCategory> productCategoryList) {
        return productCategoryList.stream().map(pdct -> (ProductCategoryDto) ProductCategoryDto.of(pdct)).toList();
    }
}
