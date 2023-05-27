package com.example.springsocial.service.BFAM;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.model.BFAM.UserTag;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.repository.BFAM.UserTagRepository;


@Service
public class UserTagService {
	@Autowired
    private  UserTagRepository userTagRepository;

 
    public List<UserTag> getTags() {
        return userTagRepository.findAll();
    }

    public UserTag createTag(UserTag userTag) {
        return userTagRepository.save(userTag);
    }

    public void deleteTag(Long id) {
        userTagRepository.deleteById(id);
    }

    public UserTag updateTag(UserTag userTag) {
        return userTagRepository.save(userTag);
    }

    public UserTag getUserTag(Long id) {
        return userTagRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("UserTag", "id", id));
    }

  
}
