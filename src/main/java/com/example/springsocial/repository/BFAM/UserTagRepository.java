package com.example.springsocial.repository.BFAM;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springsocial.model.BFAM.UserTag;

@Repository
public interface UserTagRepository extends JpaRepository<UserTag,Long>{

	Optional<UserTag> findByIdAndUser(Long tagId, Long userId);

	


}
