package com.processmaker.mkprocs.modules.factory.entity;

import com.processmaker.mkprocs.modules.factory.dto.FactoryDto;
import com.processmaker.mkprocs.modules.products.entity.Products;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="factory")
@Getter
@Setter
public class Factory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long fcNum;

    @Column(columnDefinition = "VARCHAR(500)")
    private String fcName;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime fcStartDate;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime fcEndDate;

    @Column(columnDefinition = "VARCHAR(1)")
    private String fcState;

    private String fcStateName;

    public Factory() {}
    public static Factory of(FactoryDto factoryDto) {
        Factory fc = new Factory();

        fc.setFcNum(factoryDto.getFcNum());
        fc.setFcName(factoryDto.getFcName());
        fc.setFcStartDate(factoryDto.getFcStartDate());
        fc.setFcEndDate(factoryDto.getFcEndDate());

        return fc;
    }

    public void setFcStateName() {

        String fcStateName = "";
        String state = this.fcState;
        LocalDateTime sDate = this.fcStartDate;
        LocalDateTime eDate = this.fcEndDate;
        LocalDateTime now = LocalDateTime.now();

        if ( state.equals("C") ) {

           if ( sDate.isAfter(now) ) {
               fcStateName = "시작 전";
           } else if ( eDate.isBefore(now) ) {
               fcStateName = "종료";
           } else {
               fcStateName = "계약 중";
           }

        }

        if ( state.equals("D") ) {
           fcStateName = "파기";
        }

        if ( state.equals("P") ) {
           fcStateName = "일시 정지";
        }

        this.fcStateName = fcStateName;
    }
}
