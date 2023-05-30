package com.example.springsocial.service.BFAM;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.model.BFAM.Tag;
import com.example.springsocial.payload.ApiResponse;
import com.example.springsocial.repository.TagRepository;
import com.example.springsocial.repository.UserRepository;

@Service
public class TagService {
	@Autowired
    private  TagRepository tagRepository;

	@Autowired
    private UserRepository userRepository;
 
    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    public Tag getTagById(Long id) {
        return tagRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tag not found with id: " ,"id", id));
    }

    public Tag createTag(Tag tag) {
        return tagRepository.save(tag);
    }

    public Tag updateTag(Long id, Tag updatedTag) {
        Tag tag = getTagById(id);
        tag.setTagName(updatedTag.getTagName());
        return tagRepository.save(tag);
    }

    public void deleteTag(Long id) {
        Tag tag = getTagById(id);
        tagRepository.delete(tag);
    }
    
    //assign tag to user
    
   
    public Tag assignTagToUser(Long userid,Long tagid ){
    	Tag tag = tagRepository.findById(tagid).get();
    	User user = userRepository.findById(userid).get();   
    	
    	if(tag !=null && user !=null) {
    		tag.addUserToTag(user);
      
    	}else {
    		throw new ResourceNotFoundException("INVALID TAG / USER", "tagid","userid");
    	}
    	
      	return tagRepository.save(tag);	
    	
    }
    
    
}
