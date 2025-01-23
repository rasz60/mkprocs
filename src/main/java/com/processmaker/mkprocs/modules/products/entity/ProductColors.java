package com.processmaker.mkprocs.modules.products.entity;

import com.processmaker.mkprocs.modules.products.dto.ProductColorsDto;
import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import java.util.List;

@Entity
@Data
@Table(name="product_colors")
@DynamicInsert
@DynamicUpdate
public class ProductColors {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long pdColorNum;

    @Column(columnDefinition="VARCHAR(100)")
    private String pdColorName;

    @Column(columnDefinition="VARCHAR(100)")
    private String pdColorCode;

    public ProductColors() {}

    public static ProductColors of (ProductColorsDto productColorsDto) {
        ProductColors entity = new ProductColors();
        entity.setPdColorNum(productColorsDto.getPdColorNum());
        entity.setPdColorCode(productColorsDto.getPdColorCode());
        entity.setPdColorName(productColorsDto.getPdColorName());
        return entity;
    }

    public static List<ProductColors> of (List<ProductColorsDto> productColorsDto) {
        return productColorsDto.stream().map(pdcr -> ProductColors.of(pdcr)).toList();
    }
}
