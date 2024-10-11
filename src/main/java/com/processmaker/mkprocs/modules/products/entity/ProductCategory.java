package com.processmaker.mkprocs.modules.products.entity;

import com.processmaker.mkprocs.modules.products.dto.ProductCategoryDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name="product_category")
@DynamicInsert
@DynamicUpdate
public class ProductCategory {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(generator = "uuid2")
    @Column(columnDefinition = "VARCHAR(100)")
    public String pdCategoryNum;

    @Column(columnDefinition = "INT DEFAULT 1")
    public int pdCategoryLevel;

    @ManyToOne
    @JoinColumn(referencedColumnName = "pdCategoryNum", name = "pdParentCategoryInfo")
    public ProductCategory pdParentCategoryInfo;

    @Column(columnDefinition = "VARCHAR(500)")
    public String pdCategoryName;

    public ProductCategory() {}

    public static ProductCategory of(ProductCategoryDto productCategoryDto) {
        ProductCategory pdcg = new ProductCategory();

        pdcg.setPdCategoryNum(productCategoryDto.getPdCategoryNum());
        pdcg.setPdCategoryName(productCategoryDto.getPdCategoryName());
        pdcg.setPdCategoryLevel(productCategoryDto.getPdCategoryLevel());
        pdcg.setPdParentCategoryInfo(productCategoryDto.getPdParentCategoryInfo());

        return pdcg;
    }

    public static List<ProductCategory> of(List<ProductCategoryDto> productCategoryDtoList) {
        return productCategoryDtoList.stream().map(pdctDto -> (ProductCategory) ProductCategory.of(pdctDto)).toList();
    }
}
