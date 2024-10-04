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
    @GeneratedValue(generator = "uuid2")
    private String oiNum;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(referencedColumnName="odNum", name = "oiOdInfo")
    private Orders oiOdInfo;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(referencedColumnName="pdNum", name = "oiPdInfo")
    private Products oiPdInfo;

    @Column(columnDefinition = "INT")
    private int oi_mount;

    @Column(columnDefinition = "INT")
    private int oi_supply_mount;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime oi_supply_date;
}
