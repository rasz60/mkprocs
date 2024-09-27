package com.processmaker.mkprocs.utils;

import lombok.Builder;
import lombok.Data;

import java.util.Map;

@Data
public class Result {
    private int resultCode;
    private Map<String, Object> result;
    private String resultMessage;

    public Result() {}

    public Result(int resultCode, String resultMessage) {
        this.resultCode = resultCode;
        this.resultMessage = resultMessage;
    }

    @Builder
    public Result(int resultCode, Map<String, Object> result, String resultMessage) {
        this.resultCode = resultCode;
        this.result = result;
        this.resultMessage = resultMessage;
    }
}
