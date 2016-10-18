package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.portlet.ModelAndView;

import com.spring.DAO.UserDAO;
import com.spring.model.User;


@Controller
public class HomeController {
     
    @Autowired
    private UserDAO userDao;
     
    @RequestMapping(value="/",method = RequestMethod.GET)
    public String home(ModelMap model ) {
	       List<User> listUsers = userDao.list();
	//        ModelAndView model = new ModelAndView("/home");
	       //model.addObject("userList", listUsers);
 
    	//model.addAttribute("message", "Spring 3 MVC Hello World");
    	model.addAttribute("userList", listUsers);
		return "home";
    	
//    	ModelAndView model = new ModelAndView();
//		model.setViewName("home");
//		model.addObject("msg", "hiiiiiiiiiiiii");
//        return model;
    }
     
}