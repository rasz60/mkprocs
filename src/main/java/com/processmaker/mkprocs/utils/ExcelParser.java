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

    Map<String, String> valid = new HashMap<>(); // validation
    String code = "";                            // validation code
    String validMsg = "";                        // validation msg
    List<Map<String, String>> parseData = new ArrayList<>(); // parsing

    public Map<String, Object> upload(MultipartFile file) throws Exception {
        Map<String, Object> result = new HashMap<>();

        String ext = file.getOriginalFilename();

        if ( ext.contains(".") )
            ext = ext.substring(ext.lastIndexOf(".") + 1);

        if ( ! "xls".equals(ext) || ! "xlsx".equals(ext) || ! "csv".equals(ext) ) {
            code = "501";
            validMsg = "확장자명을 확인해주세요. (.xlsx, .xls, .csv)";

            valid.put("code", code);
            valid.put("msg" , validMsg);
        } else {
            this.parsing(file, ext);
        }

        result.put("valid", valid);
        result.put("parseData", parseData);

        return result;
    }

    public void parsing(MultipartFile file, String ext) {
        Workbook workbook = null;

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
    }

    public void validHd() {
        //
    }
    public void validFc() {
        // 존재하는 제조사인지 (있으면 코드 매핑, 없으면 우선 신규 등록 요청 !exception)

    }

    public void validPd(int type) {
        // 존재하는 상품명인지 (있으면 중복 확인 요청, 없으면 신규)

    }

    public void validCt() {
        // 존재하는 상품 카테고리인지 (있으면 코드 매핑, 없으면 신규)

    }

    public void validCl() {
        // 존재하는 상품 컬러인지 (있으면 코드 매핑, 없으면 신규)

    }


    public List<String> getHeader(Sheet worksheet) throws Exception {
        List<String> header = new ArrayList<>();

        // column 명 추출
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
