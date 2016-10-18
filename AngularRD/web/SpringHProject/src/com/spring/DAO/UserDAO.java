package com.spring.DAO;

import java.util.List;

import com.spring.model.User;;
 
public interface UserDAO {
    public List<User> list();
    public  void saveUser(User user); 
}