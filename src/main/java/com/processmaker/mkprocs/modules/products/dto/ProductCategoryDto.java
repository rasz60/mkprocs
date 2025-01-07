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
    public Long pdCategoryLv1Num;
    public Long pdCategoryLv2Num;
    public int pdCategoryChildCnt;
    public boolean pdChildOpen;
    public boolean pdParentCategoryChng;

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
        if ( productCategory.getPdCategoryLevel() > 1 ) {
            ProductCategory pct = pdcDto.getPdParentCategoryInfo();
            if ( productCategory.getPdCategoryLevel() == 2 ) {
                pdcDto.setPdCategoryLv1Num(pct.getPdCategoryNum());
            } else {
                pdcDto.setPdCategoryLv2Num(pct.getPdCategoryNum());
                pdcDto.setPdCategoryLv1Num(pct.getPdParentCategoryInfo().getPdCategoryNum());
            }
        }

        pdcDto.setPdCategoryChildCnt(productCategory.getPdCategoryChild().size());
        pdcDto.setPdChildOpen(false);
        pdcDto.setPdParentCategoryChng(false);
        return pdcDto;
    }

    public static List<ProductCategoryDto> of (List<ProductCategory> productCategoryList) {
        return productCategoryList.stream().map(pdct -> (ProductCategoryDto) ProductCategoryDto.of(pdct)).toList();
    }
}
