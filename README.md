# Recipe API Documentation

## Overview

The Recipe API allows users to manage recipes, including creating, reading, updating, and deleting recipes.

## Base URL

```
http://localhost:3000/api/recipes
```

## Endpoints

### 1. **Get All Recipes**

#### `GET /api/recipes`

This endpoint retrieves all recipes in the database.

**Request Example:**

```bash
GET http://localhost:3000/api/recipes
```

**Response:**

* **200 OK**

  ```json
  {
      "success": true,
      "message": "Get all recipes",
      "data": [
          {
              "_id": "60c7b2f5f2c2b442a8d57f0b",
              "Recipe_key": "R001",
              "RecipeName": "Spaghetti Bolognese",
              "Ingredients": ["Spaghetti", "Tomato", "Beef", "Garlic"],
              "Recipetype": "Main Course"
          },
          {
              "_id": "60c7b2f5f2c2b442a8d57f0c",
              "Recipe_key": "R002",
              "RecipeName": "Apple Pie",
              "Ingredients": ["Apple", "Sugar", "Butter", "Flour"],
              "Recipetype": "Dessert"
          }
      ]
  }
  ```

* **500 Internal Server Error**

  ```json
  {
      "success": false,
      "message": "Error occurred while fetching recipes",
      "error": "Database connection error"
  }
  ```

---

### 2. **Get Recipe by ID**

#### `GET /api/recipes/:recipeID`

This endpoint retrieves a specific recipe by its unique ID.

**Request Example:**

```bash
GET http://localhost:3000/api/recipes/60c7b2f5f2c2b442a8d57f0b
```

**Response:**

* **200 OK**

  ```json
  {
      "success": true,
      "message": "Fetched recipe for ID 60c7b2f5f2c2b442a8d57f0b",
      "data": {
          "_id": "60c7b2f5f2c2b442a8d57f0b",
          "Recipe_key": "R001",
          "RecipeName": "Spaghetti Bolognese",
          "Ingredients": ["Spaghetti", "Tomato", "Beef", "Garlic"],
          "Recipetype": "Main Course"
      }
  }
  ```

* **404 Not Found**

  ```json
  {
      "success": false,
      "message": "No recipe found with ID 60c7b2f5f2c2b442a8d57f0b"
  }
  ```

* **500 Internal Server Error**

  ```json
  {
      "success": false,
      "message": "Server error while fetching recipe with ID 60c7b2f5f2c2b442a8d57f0b",
      "error": "Database connection error"
  }
  ```

---

### 3. **Create Recipe**

#### `POST /api/recipes`

This endpoint allows the creation of a new recipe.

**Request Example:**

```bash
POST http://localhost:3000/api/recipes
Content-Type: application/json
```

**Request Body:**

```json
{
    "Recipe_key": "R003",
    "RecipeName": "Caesar Salad",
    "Ingredients": ["Lettuce", "Chicken", "Croutons", "Caesar Dressing"],
    "Recipetype": "Salad"
}
```

**Response:**

* **201 Created**

  ```json
  {
      "success": true,
      "message": "The recipe has been created"
  }
  ```

* **500 Internal Server Error**

  ```json
  {
      "success": false,
      "message": "Error while creating the recipe: {error message}"
  }
  ```

---

### 4. **Update Recipe**

#### `PUT /api/recipes/:recipeID`

This endpoint allows the updating of an existing recipe by its ID.

**Request Example:**

```bash
PUT http://localhost:3000/api/recipes/60c7b2f5f2c2b442a8d57f0b
Content-Type: application/json
```

**Request Body:**

```json
{
    "Recipe_key": "R001",
    "RecipeName": "Spaghetti Carbonara",
    "Ingredients": ["Spaghetti", "Pancetta", "Eggs", "Cheese"],
    "Recipetype": "Main Course"
}
```

**Response:**

* **200 OK**

  ```json
  {
      "success": true,
      "message": "The recipe has been updated"
  }
  ```

* **400 Bad Request** (Invalid ID)

  ```json
  {
      "success": false,
      "message": "Invalid recipe ID"
  }
  ```

* **404 Not Found**

  ```json
  {
      "success": false,
      "message": "No recipe found or no changes made"
  }
  ```

* **500 Internal Server Error**

  ```json
  {
      "success": false,
      "message": "Error while updating the recipe: {error message}"
  }
  ```

---

### 5. **Delete Recipe**

#### `DELETE /api/recipes/:recipeID`

This endpoint allows the deletion of a specific recipe by its ID.

**Request Example:**

```bash
DELETE http://localhost:3000/api/recipes/60c7b2f5f2c2b442a8d57f0b
```

**Response:**

* **204 No Content**

  ```json
  {
      "success": true,
      "message": "The recipe has been deleted"
  }
  ```

* **400 Bad Request** (Invalid ID)

  ```json
  {
      "success": false,
      "message": "Invalid recipe ID"
  }
  ```

* **404 Not Found**

  ```json
  {
      "success": false,
      "message": "Recipe not found"
  }
  ```

* **500 Internal Server Error**

  ```json
  {
      "success": false,
      "message": "Error while deleting the recipe: {error message}"
  }
  ```

---

## Error Handling

The API follows standard HTTP status codes and returns appropriate error messages in the response body. The most common errors you may encounter are:

* **400 Bad Request**: Invalid or missing parameters.
* **404 Not Found**: Resource not found (e.g., recipe not found with a given ID).
* **500 Internal Server Error**: Something went wrong on the server side.

---

## Example cURL Requests

* **Get All Recipes**

  ```bash
  curl -X GET http://localhost:3000/api/recipes
  ```

* **Get Recipe by ID**

  ```bash
  curl -X GET http://localhost:3000/api/recipes/60c7b2f5f2c2b442a8d57f0b
  ```

* **Create Recipe**

  ```bash
  curl -X POST http://localhost:3000/api/recipes -H "Content-Type: application/json" -d '{
      "Recipe_key": "R003",
      "RecipeName": "Caesar Salad",
      "Ingredients": ["Lettuce", "Chicken", "Croutons", "Caesar Dressing"],
      "Recipetype": "Salad"
  }'
  ```

* **Update Recipe**

  ```bash
  curl -X PUT http://localhost:3000/api/recipes/60c7b2f5f2c2b442a8d57f0b -H "Content-Type: application/json" -d '{
      "Recipe_key": "R001",
      "RecipeName": "Spaghetti Carbonara",
      "Ingredients": ["Spaghetti", "Pancetta", "Eggs", "Cheese"],
      "Recipetype": "Main Course"
  }'
  ```

* **Delete Recipe**

  ```bash
  curl -X DELETE http://localhost:3000/api/recipes/60c7b2f5f2c2b442a8d57f0b
  ```

---

## Conclusion

This API allows you to manage recipes by performing CRUD operations. Make sure to use the correct HTTP methods and pass the necessary parameters and request bodies.

If you encounter any issues, check the error response for more details.

---

This should provide a comprehensive and easy-to-follow API documentation for your project. Let me know if you need further adjustments!
