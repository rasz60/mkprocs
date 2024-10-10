package com.processmaker.mkprocs.modules.orders.dto;

import com.processmaker.mkprocs.modules.orders.entity.OrderItems;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
@Data
public class OrdersDto {

    private String odNum;
    private String odType;
    private String odTargetNum;
    List<OrderItems> oiList = new ArrayList<>();
    private LocalDateTime odDate;
    private String odState;
    private LocalDateTime odRegistDate;
    private LocalDateTime odEndDate;
    private String odRegisterId;

}
