package com.processmaker.mkprocs.modules.products.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name="product_category",
       uniqueConstraints = @UniqueConstraint(
               columnNames = {"pdCategoryLevel", "pdCategoryName", "pdParentCategoryInfo"}
       )
)
@DynamicInsert
@DynamicUpdate
public class ProductCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long pdCategoryNum;

    @Column(columnDefinition = "INT DEFAULT 1")
    public int pdCategoryLevel;

    @ManyToOne
    @JoinColumn(referencedColumnName = "pdCategoryNum", name = "pdParentCategoryInfo")
    public ProductCategory pdParentCategoryInfo;

    @Column(columnDefinition = "VARCHAR(500)")
    public String pdCategoryName;

    @Column(columnDefinition = "VARCHAR(1)")
    public String pdCategoryState;

    @OneToMany(mappedBy = "pdParentCategoryInfo", fetch = FetchType.EAGER)
    @JsonIgnore
    List<ProductCategory> pdCategoryChild = new ArrayList<>();

    public ProductCategory() {}

    public static ProductCategory of(ProductCategoryDto productCategoryDto) {
        ProductCategory pdcg = new ProductCategory();

        pdcg.setPdCategoryNum(productCategoryDto.getPdCategoryNum());
        pdcg.setPdCategoryName(productCategoryDto.getPdCategoryName());
        pdcg.setPdCategoryLevel(productCategoryDto.getPdCategoryLevel());
        pdcg.setPdParentCategoryInfo(productCategoryDto.getPdParentCategoryInfo());
        pdcg.setPdCategoryState(productCategoryDto.getPdCategoryState());
        return pdcg;
    }

    public static List<ProductCategory> of(List<ProductCategoryDto> productCategoryDtoList) {
        return productCategoryDtoList.stream().map(pdctDto -> (ProductCategory) ProductCategory.of(pdctDto)).toList();
    }
}
