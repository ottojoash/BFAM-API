package com.example.springsocial.controller.BFAM;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.BFAM.UserTag;
import com.example.springsocial.payload.ApiResponse;
import com.example.springsocial.payload.BFAM.UserTagRequest;
import com.example.springsocial.repository.BFAM.UserTagRepository;

@RestController
@RequestMapping("/auth/tag")
public class UserTagController {
	@Autowired
	private UserTagRepository userTagRepository;

	@GetMapping("/all")
//	@PreAuthorize("hasRole('USER')") // Requires user role
	public List<UserTag> getAllTags() {
		return userTagRepository.findAll();
	}

	@PostMapping("/C")
//	@PreAuthorize("hasRole('USER')") // Requires user role
	public ResponseEntity<ApiResponse> createTag(@Valid @RequestBody UserTagRequest userTagRequest) {
		UserTag userTag = new UserTag(userTagRequest.getTag());
		
		
		userTagRepository.save(userTag);
		return ResponseEntity.ok(new ApiResponse(true, "Tag created successfully"));
	}

	
	@DeleteMapping("/delete/{tagId}")
//	@PreAuthorize("hasRole('USER')") // Requires user role
	public ResponseEntity<ApiResponse> deleteTag(@PathVariable("tagId") Long tagId) {
		userTagRepository.deleteById(tagId);
		return ResponseEntity.ok(new ApiResponse(true, "Tag deleted successfully"));
	}

	@PutMapping("/update/{tagId}")
//	@PreAuthorize("hasRole('USER')") // Requires user role
	public ResponseEntity<ApiResponse> updateTag(@PathVariable("tagId") Long tagId,
			@Valid @RequestBody UserTagRequest userTagRequest) {
		UserTag userTag = userTagRepository.findById(tagId)
				.orElseThrow(() -> new ResourceNotFoundException("UserTag", "id", tagId));
		userTag.setTag(userTagRequest.getTag());
		
		System.out.println(userTagRequest.getTag());
		userTagRepository.save(userTag);
		return ResponseEntity.ok(new ApiResponse(true, "Tag updated successfully"));
	}

   

}