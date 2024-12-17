package com.processmaker.mkprocs.modules.products.repository;

import com.processmaker.mkprocs.modules.products.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
