package com.processmaker.mkprocs.modules.mailing.controller;

import com.processmaker.mkprocs.modules.mailing.service.MailingService;
import com.processmaker.mkprocs.utils.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/mailing")
@RequiredArgsConstructor
public class MailingController {

    public final MailingService mailingService;

    @GetMapping("readTemplates/{category}")
    public Result readTemplates(@PathVariable(required = false, value="category") String category) {
        return mailingService.readTemplate(category);
    }

}
