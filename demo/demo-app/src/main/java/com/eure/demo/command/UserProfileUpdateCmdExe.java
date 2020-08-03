package com.eure.demo.command;

import com.alibaba.cola.dto.Response;
import com.eure.demo.convertor.UserProfileConvertor;
import com.eure.demo.domain.user.UserProfile;
import com.eure.demo.dto.UserProfileUpdateCmd;
import com.eure.demo.domain.gateway.UserProfileGateway;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class UserProfileUpdateCmdExe{

    @Resource
    private UserProfileGateway userProfileGateway;

    public Response execute(UserProfileUpdateCmd cmd) {
        UserProfile userProfile = UserProfileConvertor.toEntity(cmd.getUserProfileCO());
        userProfileGateway.update(userProfile);
        return Response.buildSuccess();
    }
}