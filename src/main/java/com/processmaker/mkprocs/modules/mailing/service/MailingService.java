package com.processmaker.mkprocs.modules.mailing.service;

import com.processmaker.mkprocs.utils.Result;

public interface MailingService {

    public Result readTemplate(String category);
    public Result createTemplate();

}
