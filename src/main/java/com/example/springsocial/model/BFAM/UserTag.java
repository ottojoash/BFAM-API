package com.example.springsocial.model.BFAM;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.example.springsocial.model.User;
import com.example.springsocial.model.BFAM.enums.TagType;

@Entity
public class UserTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Enumerated(EnumType.STRING)
    private TagType tag;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
}
