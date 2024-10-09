package com.processmaker.mkprocs.modules.products.repository;

import com.processmaker.mkprocs.modules.products.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products, String> {
}
