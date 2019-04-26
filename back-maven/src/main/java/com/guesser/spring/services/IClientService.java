package com.guesser.spring.services;

import java.util.List;
import java.util.Optional;
import com.guesser.spring.entities.Client;

public interface IClientService {
    List<Client> findAll();
    Optional<Client> findOne(Long id);
    Client create(Client client);
}
