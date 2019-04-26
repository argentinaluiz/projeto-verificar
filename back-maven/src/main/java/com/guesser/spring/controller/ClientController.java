package com.guesser.spring.controller;

import com.guesser.spring.entities.Client;
import com.guesser.spring.services.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping("/clients")
public class ClientController {
    @Autowired
    private IClientService clientService;

    public ClientController(IClientService clientService){
        this.clientService = clientService;
    }

    @GetMapping
    public List<Client> findAll(){
        return this.clientService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Client> findOne(@PathVariable("id") Long id){
        return this.clientService.findOne(id);
    }

    @PostMapping
    @ResponseBody
    public Client create(@RequestBody Client client){
        return this.clientService.create(client);
    }

}
