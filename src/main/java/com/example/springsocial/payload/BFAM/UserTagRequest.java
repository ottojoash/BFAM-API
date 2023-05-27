package com.example.springsocial.payload.BFAM;



import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UserTagRequest {
    @NotBlank(message = "Tag cannot be blank")
    @Size(max = 50, message = "Tag must be at most 50 characters long")
    private String tag;

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
