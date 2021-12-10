package com.misiontic.account_ms.models;

import org.springframework.data.annotation.Id;

import java.util.Date;


public class Request {
    @Id
    private Long id;
    private Long userId;
    private Date applicationdate;
    private Date responsedate;

    public Request(Long id, Long userId, Date applicationdate, Date responsedate) {
        this.id = id;
        this.userId = userId;
        this.applicationdate = applicationdate;
        this.responsedate = responsedate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Date getApplicationdate() {
        return applicationdate;
    }

    public void setApplicationdate(Date applicationdate) {
        this.applicationdate = applicationdate;
    }

    public Date getResponsedate() {
        return responsedate;
    }

    public void setResponsedate(Date responsedate) {
        this.responsedate = responsedate;
    }
}
