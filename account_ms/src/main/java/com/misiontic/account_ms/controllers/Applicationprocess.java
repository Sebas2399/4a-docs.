package com.misiontic.account_ms.controllers;

import com.misiontic.account_ms.models.Request;
import com.misiontic.account_ms.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class Applicationprocess {

    @Autowired
    AccountRepository accountRepository;

    //add a new Reservation
    public Request addRequest(Request request){
        return accountRepository.save(request);
    }

    //find a reservation by id
    public Optional<Request> findRequestById(Long id){
        return accountRepository.findRequestById(id);
    }

    public void deleteRequestBy(Long id){
        accountRepository.deleteRequestBy(id);
    }

    public List<Request> getRequestByUser(Long userId){
        return accountRepository.findRequestByUserId(userId);

    }

    //get all reservations
    public List<Request> getAllRequest(){
        return  accountRepository.findAll();
    }

    //update reservation
    public Request updateRequest(Request request){
        addRequest(request);
        return request;
    }


    //calculate hours
    public ArrayList<Long> TimeByRequest(Request request) {
        ArrayList <Long> time = new ArrayList<>();
        long diff = request.getResponsedate().getTime() - request.getApplicationdate().getTime();
        long seconds = diff / 1000;
        long minutes  = diff / (60 * 1000);
        long hours = diff / (60 * 60 * 1000);
        long days = diff /(24 * 60 * 60 *1000);
        System.out.println("Time in seconds: " + seconds + " seconds.");
        System.out.println("Time in minutes: " + minutes + " minutes.");
        System.out.println("Time in hours: " + hours + " hours.");
        System.out.println("Time in days: " + days + " days");
        time.add(0, days);
        time.add(1,hours);
        time.add(2,minutes);
        time.add(3,seconds);
        return time;
    }

    public int ListSize(){
        int size = 0;
        size = getAllRequest().size();
        return size;
    }
}
