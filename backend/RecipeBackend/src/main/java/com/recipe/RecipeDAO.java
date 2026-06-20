package com.recipe;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class RecipeDAO {

    public List<Recipe> getRecipes(int page) {

        List<Recipe> list = new ArrayList<>();

        int limit = 12;
        int offset = (page - 1) * limit;

        try {

            Connection conn = DBConnection.getConnection();

            String sql = "SELECT * FROM recipes LIMIT ? OFFSET ?";

            PreparedStatement ps = conn.prepareStatement(sql);

            ps.setInt(1, limit);
            ps.setInt(2, offset);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                Recipe r = new Recipe();

                r.setId(rs.getInt("id"));
                r.setTitle(rs.getString("title"));
                r.setCuisine(rs.getString("cuisine"));
                r.setRating(rs.getFloat("rating"));
                r.setCalories(rs.getInt("calories"));
                r.setImage(rs.getString("image"));

                list.add(r);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }
}