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
}
