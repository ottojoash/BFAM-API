package com.example.springsocial.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springsocial.model.BFAM.Tag;

@Repository
public interface TagRepository  extends JpaRepository<Tag,Long>{
	
Optional<Tag> findById(Long tagid);
}
