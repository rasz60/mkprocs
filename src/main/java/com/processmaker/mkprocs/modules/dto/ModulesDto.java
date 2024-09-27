package com.processmaker.mkprocs.modules.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class ModulesDto {
    private String moduleId;
    private String moduleName;
    private String modulePath;
}
