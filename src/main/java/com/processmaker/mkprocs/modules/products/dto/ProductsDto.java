package com.processmaker.mkprocs.modules.products.dto;

import com.processmaker.mkprocs.modules.factory.entity.Factory;
import com.processmaker.mkprocs.modules.products.entity.ProductCategory;
import com.processmaker.mkprocs.modules.products.entity.ProductColors;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ProductsDto {

    private String pdNum;
    private String pdFcNum;
    private Factory pdFcInfo;
    private String pdName;
    private String pdCategoryNum;
    private ProductCategory pdCategoryInfo;
    private String pdColorNum;
    private ProductColors pdColorInfo;
    private LocalDateTime pdRegistDate;
    private int pdPrice;
    private String pdState;
    private int pdMount;

    public ProductsDto() {}

}
