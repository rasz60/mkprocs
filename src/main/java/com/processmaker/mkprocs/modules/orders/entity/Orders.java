package com.processmaker.mkprocs.modules.orders.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="orders")
@Data
@DynamicInsert
@DynamicUpdate
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long odNum;

    @Column(columnDefinition = "VARCHAR(1)")
    private String odType;

    @Column(columnDefinition = "VARCHAR(1000)")
    private Long odTargetNum;

    @OneToMany(mappedBy = "oiOdInfo", fetch = FetchType.EAGER)
    List<OrderItems> oiList = new ArrayList<>();

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime odDate;

    @Column(columnDefinition = "VARCHAR(1)")
    private String odState;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime odRegistDate;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime odEndDate;

    @Column(columnDefinition = "VARCHAR(300)")
    private String odRegisterId;
}
