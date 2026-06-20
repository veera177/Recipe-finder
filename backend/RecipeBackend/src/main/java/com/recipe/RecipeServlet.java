package com.recipe;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/api/recipes")
public class RecipeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;  // fixes warning

    @Override
    protected void doOptions(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");

        // CORS
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

        int page = 1;

        try {
            page = Integer.parseInt(request.getParameter("page"));
        } catch (Exception e) {
            page = 1;
        }

        RecipeDAO dao = new RecipeDAO();
        List<Recipe> recipes = dao.getRecipes(page);

        PrintWriter out = response.getWriter();

        out.print("[");

        for (int i = 0; i < recipes.size(); i++) {
            Recipe r = recipes.get(i);

            out.print("{");
            out.print("\"id\":" + r.getId() + ",");
            out.print("\"title\":\"" + r.getTitle() + "\",");
            out.print("\"cuisine\":\"" + r.getCuisine() + "\",");
            out.print("\"rating\":" + r.getRating() + ",");
            out.print("\"calories\":" + r.getCalories() + ",");
            out.print("\"image\":\"" + r.getImage() + "\"");
            out.print("}");

            if (i < recipes.size() - 1) {
                out.print(",");
            }
        }

        out.print("]");
    }
}