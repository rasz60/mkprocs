package com.processmaker.mkprocs.modules.entity;

import com.processmaker.mkprocs.modules.dto.ModulesDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "mkp_modules")
@Data
@DynamicInsert
@DynamicUpdate
public class Modules {

    @Id
    @GeneratedValue(generator = "uuid2")
    private String moduleId;

    @Column(columnDefinition = "VARCHAR(200)")
    private String moduleName;

    @Column(columnDefinition = "VARCHAR(500)")
    private String modulePath;

    public Modules() {}

    public static Modules of(ModulesDto modulesDto) {
        Modules module = new Modules();

        module.setModuleName(modulesDto.getModuleName());
        module.setModulePath(modulesDto.getModulePath());

        return module;
    }

}
