package com.processmaker.mkprocs.modules.products.repository;

import com.processmaker.mkprocs.modules.products.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {

    public List<ProductCategory> findByPdCategoryLevel(int level);

    public List<ProductCategory> findByPdParentCategoryInfoAndPdCategoryLevel(ProductCategory productCategory, int level);
}
