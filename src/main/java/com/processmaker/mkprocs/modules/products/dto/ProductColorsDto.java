package com.processmaker.mkprocs.modules.products.dto;

import com.processmaker.mkprocs.modules.products.entity.ProductColors;
import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
public class ProductColorsDto {
    public Long pdColorNum;
    public String pdColorName;
    public String pdColorCode;

    public String prevPdColorName;
    public String prevPdColorCode;

    public boolean pdColorEditFlag;

    public ProductColorsDto() {}

    public static ProductColorsDto of (ProductColors productColors) {
        ProductColorsDto dto = new ProductColorsDto();
        dto.setPdColorNum(productColors.getPdColorNum());
        dto.setPdColorCode(productColors.getPdColorCode());
        dto.setPdColorName(productColors.getPdColorName());
        return dto;
    }

    public static List<ProductColorsDto> of (List<ProductColors> productColors) {
        return productColors.stream().map(pdcr -> (ProductColorsDto) ProductColorsDto.of(pdcr)).toList();
    }
}
