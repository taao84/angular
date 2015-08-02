/**
 * 
 */
package com.capsula.demos.rest_resources;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.UriInfo;

import com.capsula.demos.web_model.User;

/**
 * @author tomas
 *
 */
@Path("/users")
public class UsersResource {
  @Context
  UriInfo uriInfo;
  @Context
  Request request;

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public List<User> getUsers () {
    List<User> users = new ArrayList<User>();
    User user1 = new User("1", "Tomas", "Arango");
    User user2 = new User("2", "Lucy", "Liu");
    User user3 = new User("3", "Matt", "Damon");
    User user4 = new User("3", "Tom", "Yorke");
    User user5 = new User("3", "Omar", "Rodriguez");
    users.addAll(Arrays.asList(new User[] { user1, user2, user3, user4, user5 }));
    return users;
  }
}