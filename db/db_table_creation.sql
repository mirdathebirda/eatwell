USE eatwell;

CREATE TABLE IF NOT EXISTS howto (
	title VARCHAR(200),
	id VARCHAR(100) PRIMARY KEY UNIQUE,
    category INT, -- 0 for prep, 1, for cook , 2 for bake 
	completed BOOLEAN,
    images JSON,
	instructions JSON
);

CREATE TABLE IF NOT EXISTS nutrition (
	title VARCHAR(200),
	id VARCHAR(100) PRIMARY KEY UNIQUE,
    category INT, -- 0 for article, 1 for cheatsheet 
	date_posted DATETIME,
	read_state BOOLEAN,
	times_viewed INT,
	last_viewed DATETIME,
    body JSON
);

CREATE TABLE IF NOT EXISTS mealplan (
	title VARCHAR(200),
	id VARCHAR(100) PRIMARY KEY UNIQUE,
    category INT, -- 0 for breakfast, 1 for lunch/din , 2 for snacks
	prep_time INT,
	cook_time INT,
	total_time INT,
	ingredients JSON,
	instructions JSON,
	images JSON,
	nutrition_info JSON,
    skills SET('')
);
