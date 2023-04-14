create table movie (
movie_id int NOT NULL,
movie_name varchar(100) NOT NULL,
movie_language varchar(100) NOT NULL,
movie_hour int NOT NULL,
genre varchar(100) NOT NULL,
movie_description varchar(256) NOT NULL
);
INSERT Into movie(movie_id, movie_name, movie_language, movie_hour, genre, movie_description)
values (1, 'RRR','Hindi',180,'Action','Good');
