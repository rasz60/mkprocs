package com.processmaker.mkprocs.works.repository;

import com.processmaker.mkprocs.works.entity.Works;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorksRepository extends JpaRepository<Works, String> {
}
