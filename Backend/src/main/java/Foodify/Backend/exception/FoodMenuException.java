package Foodify.Backend.exception;

public class FoodMenuException extends Exception{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

    public FoodMenuException(String message) {
		super(message);
	}
    
    public static String FoodMemuAlreadyExists() {
		return "Resturant with given Menu Name already exists";
	}

	public static String FoodMemuCategoryAlreadyExists() {
		return "Food Category already exists";
	}

	public static String FoodMemuCategoryItemAlreadyExists() {
		return "Food already exists";
	}

	public static String FoodMemuNotFound() {
		return "Menu Name not Found";
	}

}
