package com.processmaker.mkprocs.modules.products.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Data
@Table(name="product_colors")
@DynamicInsert
@DynamicUpdate
public class ProductColors {

    @Id
    @GenericGenerator(name="uuid2", strategy="uuid2")
    @GeneratedValue(generator="uuid2")
    @Column(columnDefinition="VARCHAR(100)")
    public String pdColorNum;

    @Column(columnDefinition="VARCHAR(100)")
    public String pdColorName;

    @Column(columnDefinition="VARCHAR(100)")
    public String pdColorCode;
}
