package com.guesser.spring.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.guesser.spring.entities.Client;


@Repository
public interface ClientRepository extends JpaRepository<Client, Long> { }
