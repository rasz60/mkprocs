package com.processmaker.mkprocs.modules.products.entity;

import com.processmaker.mkprocs.modules.factory.entity.Factory;
import com.processmaker.mkprocs.modules.products.dto.ProductsDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="products")
@Data
@DynamicInsert
@DynamicUpdate
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long pdNum;

    @ManyToOne
    @JoinColumn(referencedColumnName = "fcNum", name="pdFcInfo")
    private Factory pdFcInfo;

    @Column(columnDefinition = "VARCHAR(1000)")
    private String pdName;

    @ManyToOne
    @JoinColumn(referencedColumnName = "pdCategoryNum", name="pdCategoryInfo")
    private ProductCategory pdCategoryInfo;

    @ManyToOne
    @JoinColumn(referencedColumnName = "pdColorNum", name="pdColorInfo")
    private ProductColors pdColorInfo;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime pdRegistDate;

    @Column(columnDefinition = "INT")
    private int pdPrice;

    @Column(columnDefinition = "VARCHAR(1)")
    private String pdState;

    @Column(columnDefinition = "INT")
    private int pdMount;

    public Products() {}

    public static Products of(ProductsDto productsDto) {
        Products pd = new Products();

        pd.setPdNum(productsDto.getPdNum());
        pd.setPdFcInfo(productsDto.getPdFcInfo());
        pd.setPdName(productsDto.getPdName());
        pd.setPdRegistDate(productsDto.getPdRegistDate());
        pd.setPdPrice(productsDto.getPdPrice());
        pd.setPdState(productsDto.getPdState());
        pd.setPdMount(productsDto.getPdMount());

        return pd;
    }

    public static List<Products> of(List<ProductsDto> productsDto) {
        return productsDto.stream().map(pdDto -> (Products) Products.of(pdDto)).toList();
    }
}
