SELECT number,
CASE 
    WHEN number % 2 = 0 THEN 'Even' 
    ELSE 'Odd'
END 
AS is_even FROM numbers;


SELECT
    GREATEST(
        a + b + c,
        a * (b + c), 
        a * b * c, 
        a + b * c, 
        (a + b) * c,
        a * b + c
    )
AS res FROM expression_matter;


SELECT s, UPPER(s) AS res FROM makeuppercase;


SELECT price * amount AS total FROM items;


SELECT n, m,
CASE
    WHEN n < 0 OR m < 0 THEN 0
    ELSE n * m
END
AS res FROM paperwork;


SELECT * FROM people WHERE age > 50 ORDER BY age DESC;


SELECT str, REVERSE(str) AS res FROM solution;


SELECT n, n / 2 AS res FROM oddcount;


SELECT s, REPLACE(s, '!', '') AS res FROM removeexclamationmarks;


SELECT s, n, REPEAT(s, n) AS res FROM repeatstr;


SELECT CEIL((yr - 1) / 100) + 1 AS Century FROM years;


SELECT (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000) AS res FROM past;


SELECT n, n * 2 - 2 AS res FROM ntheven;


SELECT la_liga_goals + copa_del_rey_goals + champions_league_goals AS res FROM goals;


SELECT a, b, 180 - (a + b) AS res FROM otherangle;


SELECT x, REPLACE(x, ' ', '') AS res FROM nospace;


SELECT MOD(number1, number2) AS mod FROM decimals;


SELECT
    FLOOR(number1) AS number1,
    CEIL(number2) AS number2
FROM decimals;


SELECT
    TO_HEX(legs) AS legs,
    TO_HEX(arms) AS arms
FROM monsters;


SELECT * FROM companies ORDER BY employees DESC;


SELECT * FROM students WHERE tuition_received = FALSE;


INSERT INTO participants VALUES ('HungryVovka', '28', TRUE);
SELECT * FROM participants;


SELECT * FROM travelers WHERE country NOT IN ('Canada', 'USA', 'Mexico');


SELECT * FROM users WHERE age >= 18;


SELECT custid, custname, custstate FROM customers;


SELECT DISTINCT age FROM people;


SELECT 
    MIN(age) AS age_min, 
    MAX(age) AS age_max 
FROM people;


SELECT SUM(age) AS age_sum FROM people;


SELECT *, FLOOR(hours * 0.5) AS liters FROM cycling;


SELECT - number AS res FROM opposite;


SELECT id,
CASE
    WHEN desired_height - up_speed <= 0 THEN 1
    ELSE CEIL(
        (desired_height - up_speed)::NUMERIC / (up_speed - down_speed * 1.0)
    )::INTEGER + 1
END
AS num_days FROM growing_plant;


SELECT CAST(POWER(n, 3) AS INT) AS res FROM nums;

-- or

SELECT n * n * n AS res FROM nums;


SELECT bound - (bound % divisor) AS res FROM max_multiple;


SELECT (n - 2) * 180 AS res FROM angle;


SELECT
CASE
    WHEN SUM(ASCII(letter) - 96) % 26 = 0
        THEN 'z'
    WHEN SUM(ASCII(letter) - 96) <= 26
        THEN CHR(CAST(SUM(ASCII(letter) - 96) AS INT) + 96)
    WHEN SUM(ASCII(letter) - 96) > 26
        THEN CHR(CAST(SUM(ASCII(letter) - 96) % 26 AS INT) + 96)
    ELSE 'z'
END
AS letter FROM letters;
