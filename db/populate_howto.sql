-- CREATE TABLE IF NOT EXISTS howto (
-- 	title VARCHAR(200),
-- 	id VARCHAR(100) PRIMARY KEY UNIQUE,
--  category INT, -- 0 for prep, 1, for cook , 2 for bake 
-- 	completed BOOLEAN,
--     images JSON,
-- 	instructions JSON
-- );
USE eatwell;

INSERT INTO howto (title,id,category,completed,images,instructions) 
values(
'Fry an Egg',
uuid(),
1,
false,
'{"image1": "/assets/images/howtos/fryegg.jpg"}',
'{"steps": ["Heat 2 tbsp of butter in a skillet over a medium-high heat","Break an egg into the pan.", "Cook until egg white is cooked through and yolk is cooked to your liking (it can be runny or completely firm)"]
}'
);

-- TRUNCATE TABLE eatwell.howto; 

SELECT * from eatwell.howto;