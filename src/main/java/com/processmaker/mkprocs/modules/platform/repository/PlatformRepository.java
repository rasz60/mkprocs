package com.processmaker.mkprocs.modules.platform.repository;

import com.processmaker.mkprocs.modules.platform.entity.Platform;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlatformRepository extends JpaRepository<Platform, Long> {

}
