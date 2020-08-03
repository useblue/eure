package com.eure.demo.domain;

import com.eure.demo.domain.user.UserProfile;

public class DomainFactory {

    public static UserProfile getUserProfile(){
        return new UserProfile();
    }

}
