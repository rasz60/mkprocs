package com.processmaker.mkprocs.modules.orders.repository;

import com.processmaker.mkprocs.modules.orders.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Orders, String> {
}
