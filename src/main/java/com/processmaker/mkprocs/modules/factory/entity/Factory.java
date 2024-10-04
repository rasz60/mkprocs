package com.processmaker.mkprocs.modules.factory.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name="factory")
@Data
public class Factory {

    @Id
    @GeneratedValue(generator = "uuid2")
    private String fcNum;

    @Column(columnDefinition = "VARCHAR(500)")
    private String fcName;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime fcStartDate;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime fcEndDate;

}
