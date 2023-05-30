package com.example.springsocial.model.BFAM;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.example.springsocial.model.User;
import java.util.*;

@Entity
@Table(name = "tags")
public class Tag {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String tagName;

	@ManyToMany
	@JoinTable(name = "userTag",
	joinColumns = @JoinColumn(name = "user_id"),  
	inverseJoinColumns = @JoinColumn(name = "tag_id"))
	
	private Set<User> userstags = new HashSet<>();

	public Set<User> getUsers() {
		return userstags;
	}

	public void setUsers(Set<User> users) {
		this.userstags = users;
	}

	public Tag(String tagName) {

		this.tagName = tagName;
	}

	public Tag() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTagName() {
		return tagName;
	}

	public void setTagName(String tagName) {
		this.tagName = tagName;
	}

	public void addUserToTag(User user) {
		// TODO Auto-generated method stub
		userstags.add(user);
	}

	// Constructors, getters, and setters

}