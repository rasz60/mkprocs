package com.processmaker.mkprocs.utils;

import lombok.extern.slf4j.Slf4j;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.util.*;

@Slf4j
public class PythonModuleRunner {

    public static Result pythonModuleRun(String pythonPath, String... args) {
        Result rst = null;
        try {
            String line = "";

            int argsLength = args.length;
            if ( argsLength == 5 ) { // 변수가 5개 일 때만
                ProcessBuilder pb = new ProcessBuilder("python", "-u", pythonPath);
                for (int i = 0; i < args.length; i++) {
                    pb.command().add(args[i]); // 변수 설정
                }
                Process process = pb.start(); // 모듈 시작

                rst = new Result(200, null, "모듈 실행 성공");
            } else {
                rst = new Result(501, null, "모듈 실행 실패 - 변수 누락");
            }
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(502, null, "모듈 실행 실패 - 파일 실행 실패");
        }

        return rst;
    }
}
