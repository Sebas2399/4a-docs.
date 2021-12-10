package com.misiontic.account_ms.repositories;

import com.misiontic.account_ms.models.Request;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface AccountRepository extends MongoRepository<Request, Long> {

    Optional <Request> findRequestById(Long id);
    List<Request> findRequestByUserId(Long userid);
    void deleteRequestBy(Long id);
}
