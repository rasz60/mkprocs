package com.processmaker.mkprocs.modules.products.entity;

import com.processmaker.mkprocs.modules.factory.entity.Factory;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDateTime;

@Entity
@Table(name="products")
@Data
@DynamicInsert
@DynamicUpdate
public class Products {

    @Id
    @GeneratedValue(generator = "uuid2")
    private String pdNum;

    @ManyToOne
    @JoinColumn(referencedColumnName = "fcNum", name = "pdFcInfo")
    private Factory pd_fc_info;

    @Column(columnDefinition = "VARCHAR(1000)")
    private String pd_name;

    @Column(columnDefinition = "VARCHAR(100)")
    private String pd_category;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime pd_regist_date;

    @Column(columnDefinition = "INT")
    private int pd_price;

    @Column(columnDefinition = "VARCHAR(1)")
    private String pd_state;

    @Column(columnDefinition = "INT")
    private int pd_mount;
}
