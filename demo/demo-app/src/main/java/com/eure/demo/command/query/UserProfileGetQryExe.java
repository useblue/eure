package com.eure.demo.command.query;

import com.alibaba.cola.dto.SingleResponse;
import com.eure.demo.dto.UserProfileGetQry;
import com.eure.demo.dto.clientobject.UserProfileCO;
import com.eure.demo.gatewayimpl.database.UserProfileMapper;
import com.eure.demo.gatewayimpl.database.dataobject.UserProfileDO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class UserProfileGetQryExe {

    @Resource
    private UserProfileMapper userProfileMapper;

    public SingleResponse<UserProfileCO> execute(UserProfileGetQry qry) {
        UserProfileDO userProfileDO = userProfileMapper.getByUserId(qry.getUserId());
        UserProfileCO userProfileCO = new UserProfileCO();
        BeanUtils.copyProperties(userProfileDO, userProfileCO);
        return SingleResponse.of(userProfileCO);
    }

}
