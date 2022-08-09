package Foodify.Backend.service;

import Foodify.Backend.exception.Registered_Customer_Exception;
import Foodify.Backend.model.Registered_Customer;

public interface Registered_Customer_Sev {

	public Registered_Customer Login(String UserName,String Password ) throws Registered_Customer_Exception;
	//public Registered_Customer Sendemail(String UserName ) throws Registered_Customer_Exception;
	public Registered_Customer Login2(String UserName,String Password ) throws Registered_Customer_Exception;

}
