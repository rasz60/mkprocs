package com.processmaker.mkprocs.modules.factory.entity;

import com.processmaker.mkprocs.modules.factory.dto.FactoryDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDateTime;

@Entity
@Table(name="factory")
@Data
public class Factory {

    @Id
    @GenericGenerator(name="uuid2", strategy = "uuid2")
    @GeneratedValue(generator = "uuid2")
    @Column(columnDefinition = "VARCHAR(100)")
    private String fcNum;

    @Column(columnDefinition = "VARCHAR(500)")
    private String fcName;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime fcStartDate;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime fcEndDate;

    public Factory() {}
    public static Factory of(FactoryDto factoryDto) {
        Factory fc = new Factory();

        fc.setFcNum(factoryDto.getFcNum());
        fc.setFcName(factoryDto.getFcName());
        fc.setFcStartDate(factoryDto.getFcStartDate());
        fc.setFcEndDate(factoryDto.getFcEndDate());

        return fc;
    }

}
