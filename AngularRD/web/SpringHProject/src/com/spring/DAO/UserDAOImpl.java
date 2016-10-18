package com.spring.DAO;

import java.util.List;

import com.spring.model.User;
 
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.transaction.annotation.Transactional;
 
public class UserDAOImpl implements UserDAO {
    private SessionFactory sessionFactory;
 
    public UserDAOImpl(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
 
    @Override
    @Transactional
    public List<User> list() {
     /*   @SuppressWarnings("unchecked")
        List<User> listUser = (List<User>) sessionFactory.getCurrentSession()
                .createCriteria(User.class)
                .setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY).list();
 
        return listUser;*/
    	Session session=sessionFactory.getCurrentSession();
    //	Query query=session.createQuery("from User where username=:username");
    	Query query=session.createQuery("from User");
    	//query.setParameter("username", "teju");
    	@SuppressWarnings("unchecked")
    	List<User> listUser=query.list();
    	return listUser;
    }
 
  
  public void saveUser(User user){
	  
	  Session session=sessionFactory.getCurrentSession();
	  user.setUsername("Ronak");
	  user.setPassword("123");
	  user.setEmail("r@yahoo.com");
	  session.persist(user);
  } 
}
