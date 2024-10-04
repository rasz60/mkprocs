package com.processmaker.mkprocs.modules.platform.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PlatformDto {
    private String pfNum;
    private String pfName;
    private LocalDateTime pfStartDate;
    private LocalDateTime pfEndDate;
}
