package com.processmaker.mkprocs.utils;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
@Slf4j
public class ExcelParser {

    public List<Map<String, String>> upload(MultipartFile file) throws Exception {
        List<Map<String, String>> parseData = new ArrayList<>();
        Workbook workbook = null;
        String ext = file.getOriginalFilename();

        if ( ext.contains(".") )
            ext = ext.substring(ext.lastIndexOf(".") + 1);


        try {
            // 엑셀 97 - 2003
            if ( "xls".equals(ext) ) {
                workbook = new HSSFWorkbook(file.getInputStream());
            } else {
                workbook = new XSSFWorkbook(file.getInputStream());
            }

            // 첫 번째 시트 불러오기
            Sheet worksheet = workbook.getSheetAt(0);

            List<String> header = getHeader(worksheet);

            System.out.println(header);

            for ( int i = 0; i < worksheet.getPhysicalNumberOfRows(); i++ ) {
                Row row = worksheet.getRow(i);

                if ( row != null ) {
                    for ( int c = 0; c <= row.getLastCellNum(); c++ ) {
                        Cell cell = row.getCell(c);
                        String value = null;

                        if ( cell != null ) {
                            value = parseValue(cell);
                        }

                        if ( value != null ) {
                            System.out.println(value);
                        }
                    }
                }
            }

        } catch (Exception e) {
            log.error(e.getMessage());
            throw new RuntimeException("parsing error.");
        }
        return parseData;
    }

    public List<String> getHeader(Sheet worksheet) throws Exception {
        List<String> header = new ArrayList<>();
        Row row = worksheet.getRow(worksheet.getFirstRowNum());
        if ( row != null ) {

            for (int i = row.getFirstCellNum(); i < row.getLastCellNum(); i++) {
                String value = null;
                Cell cell = row.getCell(i);
                if ( cell != null )
                    value = parseValue(cell);
                else
                    continue;

                if ( value != null )
                    header.add(value);
                else
                    throw new RuntimeException("[" + i + "th] HEADER NAME IS EMPTY.");
            }
        }
        return header;
    }

    public String parseValue(Cell cell) {
        // 날짜포맷
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd");
        String value = "";

        if (cell != null) {
            // 타입별로 내용 읽기
            switch (cell.getCellType()) {
                case FORMULA:
                    value = cell.getCellFormula();
                    break;
                case NUMERIC:
                    if (HSSFDateUtil.isCellDateFormatted(cell)) { // 숫자- 날짜 타입이다.
                        value = formatter.format(cell.getDateCellValue());
                    } else {
                        double numericCellValue = cell.getNumericCellValue();
                        value = String.valueOf(numericCellValue);
                        if (numericCellValue == Math.rint(numericCellValue)) {
                            value = String.valueOf((int) numericCellValue);
                        } else {
                            value = String.valueOf(numericCellValue);
                        }
                    }
                    break;
                case BLANK:
                    value = cell.getBooleanCellValue() + "";
                    break;
                case ERROR:
                    value = cell.getErrorCellValue() + "";
                    break;
                case BOOLEAN:
                    boolean chk = cell.getBooleanCellValue();
                    value = chk ? "TRUE" : "FALSE";
                    break;
                default:
                    value = cell.getStringCellValue() + "";
                    break;
            }
        }
        return value;
    }

}
