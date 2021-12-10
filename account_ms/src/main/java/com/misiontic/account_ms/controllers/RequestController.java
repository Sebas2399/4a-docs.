package com.misiontic.account_ms.controllers;

import com.misiontic.account_ms.exceptions.UserIDNotFoundException;
import com.misiontic.account_ms.exceptions.RequestIDNotFoundException;
import com.misiontic.account_ms.models.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/request")
public class RequestController {

    @Autowired
    Applicationprocess applicationprocess;

    @PostMapping("/add_request")
    Request addRequest(@RequestBody Request request){
        return applicationprocess.addRequest(request);
    }

    @GetMapping("/get_request_By_userId/{userId}")
    List<Request> getRequestByUser(@PathVariable Long userId){
        if(applicationprocess.getRequestByUser(userId).isEmpty()) {
            throw new UserIDNotFoundException("No hay solicitud por el usuario ingresado: "+ HttpStatus.NOT_FOUND);
        }
        else{
            return applicationprocess.getRequestByUser(userId);
        }
    }


    @GetMapping("/getReservationById/{reservationID}")
    Optional<Request> getRequestById(@PathVariable Long requestID){
        return applicationprocess.findRequestById(requestID);
    }

    @GetMapping("/get_All_Request")
    List <Request> getAllRequest(){
        return applicationprocess.getAllRequest();
    }

    @DeleteMapping("/delete_Request_By_Id/{id}")
    String deleteRequest(@PathVariable Long id){
        if(applicationprocess.findRequestById(id).isEmpty()){
            throw new RequestIDNotFoundException("No hay solicitud con ID "+id+" , "+HttpStatus.NOT_FOUND);
        }else{
            applicationprocess.deleteRequestBy(id);
            return "Solicitud con id "+id+" eliminada, "+ HttpStatus.ACCEPTED;
        }
    }

    @PutMapping("/updateRequest")
    Request updateReservation(@RequestBody Request request){
        if(applicationprocess.findRequestById(request.getId()).isEmpty()){
            throw new RequestIDNotFoundException("No se encontro solicitud con el Id ingresado "+request.getId()+", "+HttpStatus.NOT_FOUND);
        }else{
            return applicationprocess.updateRequest(request);
        }
    }


    @GetMapping("/getTimeByService")
    ArrayList<Long> getTimeByService(@RequestBody Request request){
        if(applicationprocess.findRequestById(request.getId()).isEmpty()){
            throw new RequestIDNotFoundException("No se encontro la reserva con el ID "+request.getId()+", "+HttpStatus.NOT_FOUND);
        }else{
            return applicationprocess.TimeByRequest(request);
        }
    }

    @GetMapping("/getSizeList")
    int getSizeList(){
        return applicationprocess.ListSize();
    }

    @GetMapping("/getID")
    int getID(){
        return applicationprocess.ListSize()+1;
    }
}
