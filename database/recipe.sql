use recipe_db;
CREATE TABLE recipes (
 id INT AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(255),
 cuisine VARCHAR(100),
 rating FLOAT,
 calories INT,
 image VARCHAR(500)
);

INSERT INTO recipes (title,cuisine,rating,calories,image) VALUES
('Chicken Biryani','Indian',4.7,550,'https://example.com/biryani.jpg'),
('Butter Chicken','Indian',4.6,600,'https://example.com/butterchicken.jpg'),
('Masala Dosa','Indian',4.5,350,'https://example.com/dosa.jpg'),
('Paneer Tikka','Indian',4.4,320,'https://example.com/paneer.jpg'),
('Veg Fried Rice','Chinese',4.2,400,'https://example.com/friedrice.jpg'),
('Hakka Noodles','Chinese',4.3,420,'https://example.com/noodles.jpg'),
('Spring Rolls','Chinese',4.1,300,'https://example.com/springroll.jpg'),
('Kung Pao Chicken','Chinese',4.5,480,'https://example.com/kungpao.jpg'),
('Margherita Pizza','Italian',4.6,500,'https://example.com/pizza.jpg'),
('Pasta Alfredo','Italian',4.4,520,'https://example.com/pasta.jpg'),
('Lasagna','Italian',4.7,650,'https://example.com/lasagna.jpg'),
('Risotto','Italian',4.3,480,'https://example.com/risotto.jpg'),
('Tacos','Mexican',4.5,400,'https://example.com/tacos.jpg'),
('Burrito','Mexican',4.4,550,'https://example.com/burrito.jpg'),
('Quesadilla','Mexican',4.2,430,'https://example.com/quesadilla.jpg'),
('Nachos','Mexican',4.1,450,'https://example.com/nachos.jpg'),
('Cheeseburger','American',4.6,700,'https://example.com/burger.jpg'),
('Hot Dog','American',4.3,500,'https://example.com/hotdog.jpg'),
('Fried Chicken','American',4.7,750,'https://example.com/friedchicken.jpg'),
('Pancakes','American',4.5,350,'https://example.com/pancakes.jpg'),
('Sushi','Japanese',4.6,300,'https://example.com/sushi.jpg'),
('Ramen','Japanese',4.7,450,'https://example.com/ramen.jpg'),
('Tempura','Japanese',4.4,380,'https://example.com/tempura.jpg'),
('Teriyaki Chicken','Japanese',4.5,420,'https://example.com/teriyaki.jpg');

INSERT INTO recipes(title,cuisine,rating,calories,image) VALUES
('Paneer Butter Masala','Indian',4.5,480,'https://picsum.photos/300?11'),
('Masala Dosa','Indian',4.6,320,'https://picsum.photos/300?12'),
('Tacos','Mexican',4.3,400,'https://picsum.photos/300?13'),
('Fried Rice','Chinese',4.1,520,'https://picsum.photos/300?14'),
('Ramen','Japanese',4.7,450,'https://picsum.photos/300?15'),
('Caesar Salad','Italian',4.0,250,'https://picsum.photos/300?16'),
('Pad Thai','Thai',4.4,430,'https://picsum.photos/300?17'),
('Falafel Wrap','Middle Eastern',4.2,380,'https://picsum.photos/300?18'),
('Butter Chicken','Indian',4.8,600,'https://picsum.photos/300?19'),
('Grilled Sandwich','American',3.9,300,'https://picsum.photos/300?20'),
('Veg Pizza','Italian',4.3,700,'https://picsum.photos/300?21'),
('Chicken Noodles','Chinese',4.5,540,'https://picsum.photos/300?22');

SELECT * FROM recipes;