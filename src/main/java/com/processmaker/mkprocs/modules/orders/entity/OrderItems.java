package com.processmaker.mkprocs.modules.orders.entity;

import com.processmaker.mkprocs.modules.products.entity.Products;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDateTime;

@Entity
@Table(name="orderItems")
@Data
@DynamicInsert
@DynamicUpdate
public class OrderItems {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long oiNum;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(referencedColumnName="odNum", name = "oiOdInfo")
    private Orders oiOdInfo;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(referencedColumnName="pdNum", name = "oiPdInfo")
    private Products oiPdInfo;

    @Column(columnDefinition = "INT")
    private int oiMount;

    @Column(columnDefinition = "INT")
    private int oiSupplyMount;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime oiSupplyDate;

    @Column(columnDefinition = "VARCHAR(1)")
    private String oiState;
}
