/**
 * 
 */
package com.capsula.demos.web_model;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * @author tomas
 * 
 */
@XmlRootElement
public class User {
	
	private String id;
	private String firstName;
	private String familyName;

	/**
	 * 
	 */
	public User() {
	}
	
	/**
	 * 
	 * @param id
	 * @param firstName
	 * @param familyName
	 */
	public User(String id, String firstName, String familyName) {
		this.id = id;
		this.firstName = firstName;
		this.familyName = familyName;
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * @return the familyName
	 */
	public String getFamilyName() {
		return familyName;
	}

	/**
	 * @param familyName the familyName to set
	 */
	public void setFamilyName(String familyName) {
		this.familyName = familyName;
	}
}