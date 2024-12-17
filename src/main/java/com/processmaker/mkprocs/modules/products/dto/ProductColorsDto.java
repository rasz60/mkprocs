package com.processmaker.mkprocs.modules.products.dto;

import com.processmaker.mkprocs.modules.products.entity.ProductCategory;
import lombok.Data;

@Data
public class ProductColorsDto {
    public Long pdColorNum;
    public String pdColorName;
    public String pdColorCode;
}
