package com.example.springsocial.payload.BFAM;

public class UserTagPayload {
	
	private Long userId;
	
    private Long tagId;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getTagId() {
		return tagId;
	}

	public void setTagId(Long tagId) {
		this.tagId = tagId;
	}

	public UserTagPayload(Long userId, Long tagId) {
	
		this.userId = userId;
		this.tagId = tagId;
	}

	public UserTagPayload() {
		
	}

    // Constructors, getters, and setters
	
	
}
