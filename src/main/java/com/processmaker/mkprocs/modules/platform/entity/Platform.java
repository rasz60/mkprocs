package com.processmaker.mkprocs.modules.platform.entity;

import com.processmaker.mkprocs.modules.platform.controller.PlatformController;
import com.processmaker.mkprocs.modules.platform.dto.PlatformDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDateTime;

@Entity
@Table(name="platform")
@Data
public class Platform {

    @Id
    @GenericGenerator(name="uuid2", strategy = "uuid2")
    @GeneratedValue(generator = "uuid2")
    @Column(columnDefinition = "VARCHAR(100)")
    private String pfNum;

    @Column(columnDefinition = "VARCHAR(500)")
    private String pfName;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime pfStartDate;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime pfEndDate;

    public Platform() {}

    public static Platform of(PlatformDto platformDto) {
        Platform platform = new Platform();

        platform.setPfNum(platformDto.getPfNum());
        platform.setPfName(platformDto.getPfName());
        platform.setPfStartDate(platformDto.getPfStartDate());
        platform.setPfEndDate(platformDto.getPfEndDate());

        return platform;
    }

}
