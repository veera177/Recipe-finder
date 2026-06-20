package com.recipe;

public class Recipe {

    private int id;
    private String title;
    private String cuisine;
    private float rating;
    private int calories;
    private String image;

    public Recipe() {}

    public Recipe(int id, String title, String cuisine, float rating, int calories, String image) {
        this.id = id;
        this.title = title;
        this.cuisine = cuisine;
        this.rating = rating;
        this.calories = calories;
        this.image = image;
    }

    public int getId() { return id; }

    public String getTitle() { return title; }

    public String getCuisine() { return cuisine; }

    public float getRating() { return rating; }

    public int getCalories() { return calories; }

    public String getImage() { return image; }

    public void setId(int id) { this.id = id; }

    public void setTitle(String title) { this.title = title; }

    public void setCuisine(String cuisine) { this.cuisine = cuisine; }

    public void setRating(float rating) { this.rating = rating; }

    public void setCalories(int calories) { this.calories = calories; }

    public void setImage(String image) { this.image = image; }
}