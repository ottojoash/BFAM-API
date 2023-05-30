package com.example.springsocial.controller.BFAM;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springsocial.model.BFAM.Tag;
import com.example.springsocial.payload.ApiResponse;
import com.example.springsocial.service.BFAM.TagService;

@RestController
@RequestMapping("/auth")
public class TagController {
	@Autowired
    private  TagService tagService;

	
	  @GetMapping("/tags/a")
	    public List<Tag> getAllTags() {
	        List<Tag> tags = tagService.getAllTags();
	        return tags;
	    }

	    @GetMapping("/tags/g/{id}")
	    public ResponseEntity<Tag> getTagById(@PathVariable Long id) {
	        Tag tag = tagService.getTagById(id);
	        return new ResponseEntity<>(tag, HttpStatus.OK);
	    }

    @PostMapping("/tags/c")
    public ResponseEntity<ApiResponse> createTag(@RequestBody Tag tag) {
        Tag createdTag = tagService.createTag(tag);
        return ResponseEntity.ok(new ApiResponse(true, "Tag created successfully"));
    }


    @PutMapping("/tags/u/{id}")
    public ResponseEntity<ApiResponse> updateTag(@PathVariable Long id, @RequestBody Tag updatedTag) {
        Tag tag = tagService.updateTag(id, updatedTag);
        return ResponseEntity.ok(new ApiResponse(true, "Tag Updated successfully"));
    }

    @DeleteMapping("/tags/d/{id}")
    public ResponseEntity<ApiResponse> deleteTag(@PathVariable Long id) {
        tagService.deleteTag(id);
        return ResponseEntity.ok(new ApiResponse(true, "Tag deleted successfully"));
    }
    
  //assign tag  to user
    
    @PutMapping("/tags/{userId}/tag/{tagId}")
    public ResponseEntity<ApiResponse> assignTagToUser(@PathVariable Long userId, @PathVariable Long tagId) {
    	
        tagService.assignTagToUser(userId, tagId);
        return ResponseEntity.ok(new ApiResponse(true, "Tag assigened to user  successfully"));
    }
}
