package com.processmaker.mkprocs.modules.products.repository;

import com.processmaker.mkprocs.modules.products.entity.ProductColors;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductColorsRepository extends JpaRepository<ProductColors, Long> {

    int countByPdColorCode(String pdColorCode);

    int countByPdColorName(String pdColorName);

}
