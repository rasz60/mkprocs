package com.processmaker.mkprocs.works.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name="MKPROCS_WORKS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Works {

    @Id
    @Column(columnDefinition = "VARCHAR(100)")
    private String workId;

    @Column(columnDefinition = "VARCHAR(10)")
    private String workType;

    @Column(columnDefinition = "VARCHAR(10)")
    private String workState;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime workStartDate;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime workEndDate;

    @Column(columnDefinition = "VARCHAR(4000)")
    private String workResultMessage;

}
