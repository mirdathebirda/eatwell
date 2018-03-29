-- CREATE TABLE IF NOT EXISTS nutrition (
-- 	title VARCHAR(200),
-- 	id VARCHAR(100) PRIMARY KEY UNIQUE,
--     category INT, -- 0 for article, 1 for cheatsheet 
-- 	date_posted DATETIME,
-- 	read_state BOOLEAN,
-- 	times_viewed INT,
-- 	last_viewed DATETIME,
--     body JSON
-- );

USE eatwell;

INSERT INTO nutrition(title,id,date_posted,read_state,times_viewed,last_viewed,body) 
values(
'10 Ways to Make Recipes Healthier',
uuid(),
2000-01-01 10:00:00.000000,
false,
0,
1000-01-01 00:00:00.000000,
'{}'
);