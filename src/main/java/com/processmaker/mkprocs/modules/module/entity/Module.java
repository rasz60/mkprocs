package com.processmaker.mkprocs.modules.module.entity;

import com.processmaker.mkprocs.modules.module.dto.ModuleDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "mkp_modules")
@Data
@DynamicInsert
@DynamicUpdate
public class Module {

    @Id
    @GeneratedValue(generator = "uuid2")
    private String moduleId;

    @Column(columnDefinition = "VARCHAR(200)")
    private String moduleName;

    @Column(columnDefinition = "VARCHAR(500)")
    private String modulePath;

    public Module() {}

    public static Module of(ModuleDto moduleDto) {
        Module module = new Module();

        module.setModuleName(moduleDto.getModuleName());
        module.setModulePath(moduleDto.getModulePath());

        return module;
    }

}
