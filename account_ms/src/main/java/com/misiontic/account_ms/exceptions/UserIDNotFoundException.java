package com.misiontic.account_ms.exceptions;

public class UserIDNotFoundException extends RuntimeException{
    public UserIDNotFoundException(String message) {
        super(message);
    }
}
