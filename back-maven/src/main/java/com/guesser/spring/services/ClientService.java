package com.guesser.spring.services;

import com.guesser.spring.entities.Client;
import com.guesser.spring.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService implements IClientService {


    @Autowired
    private ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }



    @Override
    public List<Client> findAll() {
        return this.clientRepository.findAll();
    }

    @Override
    public Optional<Client> findOne(Long id) {
        return this.clientRepository.findById(id);
    }

    @Override
    public Client create(Client client) {
        return this.clientRepository.save(client);
    }


}
