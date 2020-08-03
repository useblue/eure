package com.eure.demo.dto;

import com.eure.demo.dto.clientobject.UserProfileCO;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class UserProfileUpdateCmd extends CommonCommand {

    @NotNull
    private UserProfileCO userProfileCO;
}
