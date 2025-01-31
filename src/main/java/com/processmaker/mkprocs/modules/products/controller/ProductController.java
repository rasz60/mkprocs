package com.processmaker.mkprocs.modules.products.controller;

import com.processmaker.mkprocs.modules.orders.service.OrderService;
import com.processmaker.mkprocs.modules.products.dto.ProductCategoryDto;
import com.processmaker.mkprocs.modules.products.dto.ProductColorsDto;
import com.processmaker.mkprocs.modules.products.dto.ProductsDto;
import com.processmaker.mkprocs.modules.products.entity.Products;
import com.processmaker.mkprocs.modules.products.service.ProductCategoryService;
import com.processmaker.mkprocs.modules.products.service.ProductColorService;
import com.processmaker.mkprocs.modules.products.service.ProductService;
import com.processmaker.mkprocs.utils.ExcelParser;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rest/pd")
@RequiredArgsConstructor
@Slf4j
public class ProductController {

    public final ProductService productService;
    public final ProductCategoryService productCategoryService;
    public final ProductColorService productColorService;
    public final ExcelParser excelParser;

    /**
    * [Preview]
    * Desc.  : 신규 상품 등록
    * Param  : @RequestBody ProductsDto
    * Return : Result
    **/
    @PostMapping("create")
    public Result create(@RequestBody ProductsDto productsDto) {
        Result rst = null;
        try {
            rst = productService.create(productsDto);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    /**
     * [Preview]
     * Desc.  : 신규 상품 등록 (벌크)
     * Param  : MultipartFile (Excel)
     * Return : Result
     **/
    @PostMapping("createBulk")
    public Result create(@RequestParam("productData") MultipartFile productData) {
        try {
            //List<Map<String, String>> parseData = excelParser.upload(productData);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return null;
    }

    /**
     * [Preview]
     * Desc.  : 신규 상품 카테고리 등록
     * Param  : @RequestBody ProductsCategoryDto
     * Return : Result
     **/
    @PostMapping("ct/create")
    public Result categoryCreate(@RequestBody ProductCategoryDto productCategoryDto) {
        Result rst = null;
        try {
            rst = productCategoryService.create(productCategoryDto);
        } catch (DataIntegrityViolationException dive) {
            log.error(dive.getMessage());
            rst = new Result(500, "선택한 상위 분류에 이미 등록된 카테고리 입니다.");
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    /**
     * [Preview]
     * Desc.  : 상품 전체 조회
     * Param  :
     * Return : Result
     **/
    @GetMapping("list")
    public Result read() {
        Result rst = null;
        try {
            rst = productService.read();
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    /**
     * [Preview]
     * Desc.  : 상품 카테고리 전체 조회
     * Param  :
     * Return : Result
     **/
    @GetMapping("ct/list")
    public Result categoryReadLevel() {
        return categoryRead(null, null);
    }

    /**
     * [Preview]
     * Desc.  : 상품 카테고리 분류 단계별 조회
     * Param  : level
     * Return : Result
     **/
    @GetMapping("ct/list/{level}")
    public Result categoryReadLevel(@PathVariable(required = false) String level) {
        return categoryRead(level, null);
    }

    /**
     * [Preview]
     * Desc.  : 상품 카테고리 분류 단계, 상위 카테고리 기준 조회
     * Param  : level, parentCategoryId
     * Return : Result
     **/
    @GetMapping("ct/list/{level}/{parentCategoryId}")
    public Result categoryRead(@PathVariable(required = false) String level
                             , @PathVariable(required = false) String parentCategoryId) {
        Result rst = null;
        try {
            rst = productCategoryService.read(level, parentCategoryId);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    /**
     * [Preview]
     * Desc.  : 상품 카테고리 수정
     * Param  : @RequestBody ProductCategoryDto
     * Return : Result
     **/
    @PostMapping("ct/update")
    public Result categoryUpdate(@RequestBody ProductCategoryDto productCategoryDto) {
        Result rst = null;
        try {
            rst = productCategoryService.update(productCategoryDto);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    /**
     * [Preview]
     * Desc.  : 상품 카테고리 삭제
     * Param  : productCategoryNum
     * Return : Result
     **/
    @DeleteMapping("ct/delete/{productCategoryNum}")
    public Result categoryDelete(@PathVariable("productCategoryNum") String productCategoryNum) {
        Result rst = null;
        try {
            rst = productCategoryService.delete(productCategoryNum);
        } catch (Exception e) {

            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    /**
     * [Preview]
     * Desc.  : 상품 색상 조회
     * Param  :
     * Return : Result
     **/
    @GetMapping("cr/list")
    public Result colorRead() {
        Result rst = null;
        try {
            rst = productColorService.read();
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    /**
     * [Preview]
     * Desc.  : 상품 색상 조회(검색)
     * Param  : @PathVariable srchType, srchKeywords
     * Return : Result
     **/
    @GetMapping("cr/list/{srchType}/{srchKeywords}")
    public Result colorSearch(@PathVariable("srchType") String srchType,@PathVariable("srchKeywords") String srchKeywords) {
        Result rst = null;
        try {
            rst = productColorService.search(srchType, srchKeywords);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    /**
     * [Preview]
     * Desc.  : 상품 색상 중복 조회
     * Param  : pdColorCode, pdColorName
     * Return : Result
     **/
    @GetMapping("cr/dupchk")
    public Result colorDupchk(@RequestParam(name = "pdColorNum", required = false)  String pdColorNum,
                              @RequestParam(name = "pdColorCode") String pdColorCode,
                              @RequestParam(name = "pdColorName") String pdColorName,
                              @RequestParam(name = "prevPdColorCode", required = false) String prevPdColorCode,
                              @RequestParam(name = "prevPdColorName", required = false) String prevPdColorName,
                              @RequestParam(name = "pdColorEditFlag") String pdColorEditFlag
    ) {
        Result rst = null;
        try {

            ProductColorsDto dto = new ProductColorsDto();
            dto.setPdColorNum("".equals(pdColorNum) ? 0 : Long.parseLong(pdColorNum));
            dto.setPdColorCode(pdColorCode);
            dto.setPdColorName(pdColorName);
            dto.setPrevPdColorCode(prevPdColorCode);
            dto.setPrevPdColorName(prevPdColorName);
            dto.setPdColorEditFlag(Boolean.getBoolean(pdColorEditFlag));

            rst = productColorService.dupchk(dto);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    /**
     * [Preview]
     * Desc.  : 신규 상품 색상 등록
     * Param  : @RequestBody ProductColorsDto
     * Return : Result
     **/
    @PostMapping("cr/create")
    public Result colorCreate(@RequestBody ProductColorsDto productColorsDto) {
        Result rst = null;
        try {
            rst = productColorService.create(productColorsDto);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    /**
     * [Preview]
     * Desc.  : 신규 상품 색상 등록
     * Param  : @RequestBody ProductColorsDto
     * Return : Result
     **/
    @PutMapping("cr/update")
    public Result colorUpdate(@RequestBody ProductColorsDto productColorsDto) {
        Result rst = null;
        try {
            rst = productColorService.update(productColorsDto);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }

    /**
     * [Preview]
     * Desc.  : 상품 색상 삭제
     * Param  : @RequestBody pdColorsNum
     * Return : Result
     **/
    @DeleteMapping("cr/delete/{pdColorNum}")
    public Result colorDelete(@PathVariable("pdColorNum") String PdColorsNum) {
        Result rst = null;
        try {
            rst = productColorService.delete(PdColorsNum);
        } catch (Exception e) {
            log.error(e.getMessage());
            rst = new Result(500, "시스템 오류 발생");
        }
        return rst;
    }
}
