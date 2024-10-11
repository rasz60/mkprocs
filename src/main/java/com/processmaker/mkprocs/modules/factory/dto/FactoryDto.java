package com.processmaker.mkprocs.modules.factory.dto;

import lombok.Data;

import java.time.LocalDateTime;
@Data
public class FactoryDto {
    private String fcNum;
    private String fcName;
    private LocalDateTime fcStartDate;
    private LocalDateTime fcEndDate;
}