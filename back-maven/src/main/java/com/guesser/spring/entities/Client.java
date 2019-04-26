package com.guesser.spring.entities;

import javax.persistence.*;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;
    @Column
    private String name;
    @Column
    private String date_birth;
    @Column
    private String prof_empr;
    @Column
    private String address;
    @Column
    private String number;
    @Column
    private String neighborhood;
    @Column
    private String city;
    @Column
    private String state;
    @Column
    private String cpf_cnpj;
    @Column
    private String obs;

    public Client() {

    }

    public Client(String name, String date_birth, String prof_empr, String address, String number, String neighborhood, String city, String state, String cpf_cnpj, String obs) {
        this.name = name;
        this.date_birth = date_birth;
        this.prof_empr = prof_empr;
        this.address = address;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
        this.cpf_cnpj = cpf_cnpj;
        this.obs = obs;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate_birth() {
        return date_birth;
    }

    public void setDate_birth(String date_birth) {
        this.date_birth = date_birth;
    }

    public String getProf_empr() {
        return prof_empr;
    }

    public void setProf_empr(String prof_empr) {
        this.prof_empr = prof_empr;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCpf_cnpj() {
        return cpf_cnpj;
    }

    public void setCpf_cnpj(String cpf_cnpj) {
        this.cpf_cnpj = cpf_cnpj;
    }

    public String getObs() {
        return obs;
    }

    public void setObs(String obs) {
        this.obs = obs;
    }
}