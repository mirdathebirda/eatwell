-- CREATE TABLE IF NOT EXISTS mealplan (
-- 	title VARCHAR(200),
-- 	id VARCHAR(200) PRIMARY KEY UNIQUE,
-- 	prep_time INT,
-- 	cook_time INT,
-- 	total_time INT,
-- 	ingridients LONGTEXT,
-- 	instructions LONGTEXT,
-- 	serving_size INT,
-- 	nutrition_info LONGTEXT
-- );

INSERT INTO mealplan(id) values(uuid());