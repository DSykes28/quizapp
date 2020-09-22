-- Users table seeds here (Example)

INSERT INTO users (name, email, password) VALUES ('Alice', 'lostin@wonderland.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Kira', 'bendit@beckham.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Jordan', 'caleb@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Ellen', 'ripley@lv426.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Kyle', 'reese@future.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Hasan', 'minhaj@patriot.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Jose', 'martinez@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Ava', 'duvarney@yahoo.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Selma', 'letreign@freedom.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Roger', 'fred@hotmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Salvadore', 'madness@dali.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Trog', 'dorThe@burninator.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Alyesha', 'bendit@beckham.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Jen', 'wentworth@gmail.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Chris', 'evans@americasass.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Kamala', 'khan@secrets.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Miles', 'morales@secrets.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Amadeus', 'chou@secrets.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Shang', 'chi@yahoo.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Luc', 'besson@gmail.com', 'password');


INSERT INTO quiz_names (user_id, title, private, total_score) VALUES ('4', 'Aliens Movie Trivia');
INSERT INTO quiz_names (user_id, title, private, total_score) VALUES ('9', 'Country capitals!');
INSERT INTO quiz_names (user_id, title, private, total_score) VALUES ('17', '2020 Music');
INSERT INTO quiz_names (user_id, title, private, total_score) VALUES ('20', 'Foreign Film');
INSERT INTO quiz_names (user_id, title, private, total_score) VALUES ('7', 'Expanded Star Wars Trivia');
INSERT INTO quiz_names (user_id, title, private, total_score) VALUES ('7', 'Star Trek Trivia');
INSERT INTO quiz_names (user_id, title, private, total_score) VALUES ('1', 'Sci-Fi Authors');
INSERT INTO quiz_names (user_id, title, private, total_score) VALUES ('1', 'Fantasy Authors', TRUE);
INSERT INTO quiz_names (user_id, title, private, total_score) VALUES ('13', 'State capitals');
INSERT INTO quiz_names (user_id, title, private, total_score) VALUES ('3', '');
INSERT INTO quiz_names (user_id, title, private, total_score) VALUES ('16', '');







INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (1, 'What is the name of the colony that Ellen Riley and crew go to investigate?', 'Calpamos', 'LV-492', 'Yautja Prime', 'LV-426');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (1, 'Which of the following Colonial Space Marine died first?', 'Hudson', 'Spunkmeyer', 'Vasquez', 'Frost');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (1, 'Which of the following Aliens actors did not also appear in Terminator?', 'Michael Biehn', 'Bill Paxton', 'Lance Henriksen', 'Al Matthews');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (1, 'What is the name of the ship Sulaco they travel on in Aliens?', 'Nostromo', 'Prometheus', 'Auriga', 'Sulaco');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (1, 'How long was Ellen Ripley in Hyper-sleep?', '66 years', '11 months', '102 years', '57 years');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (2, 'What is the capital of Latvia?', 'Tallinn', 'Minsk', 'Vilnius', 'Riga');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (2, 'What is the capital of Uzbekistan?', 'Ashgabat', 'Nur-Sultan', 'Bishkek', 'Tashkent');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (2, 'What is the capital of Eritrea?', 'Bangui', 'Addis Ababa', 'Bamako', 'Asmara');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (2, 'What is the capital of Equador?', 'Lima', 'Valparaíso', 'La Paz', 'Quito');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (2, 'What is the capital of Malta?', 'Tirana', 'Vaduz', 'Andorra la Vella', 'Valletta');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (2, 'What is the capital of American Samoa?', 'Port Moresby', 'Palikir', 'Papeete', 'Pago Pago');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (2, 'What is the capital of Trinidad and Tobago?', 'Hamilton', 'Philipsburg', 'Kingstown', 'Port of Spain');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (2, 'What is the capital of Laos?', 'Phnom Penh', 'Nay Pyi Taw', 'Dili', 'Vientiane');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (3, 'Who sings Blinding Lights?', 'Dua Lipa', 'Future', 'Drake', 'The Weeknd');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (3, 'Which is a Pinkfong song?', 'Blueberry Faygo', 'Yummy', 'Rover', 'Baby Shark');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (3, 'Who sings Ooh LA LA?', 'Sneakbo', 'Black Eyes Peas', 'Paris', 'Run the Jewels');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (3, 'Who of the following is not a member of Prophets of Rage?', 'Tom Morello', 'Chuck D', 'B-Real', 'Zack de la Rocha');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (3, 'Who sings Memories?', 'Justin Bieber', 'Harry Styles', 'Ed Sheeran', 'Maroon 5');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (3, 'Who sings State of the Union?', 'Nas', 'Joyner Lucas', 'Lil Baby', 'Public Enemy');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (3, 'Which song does not feature Drake?', 'Only You Freestyle', 'Popstar', 'Greece', 'Rockstar');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (3, 'Which sone appeared on Bill and Ted Face the Music?', 'Hero', 'California Snow', 'The End of the Game', 'Beginning of the End');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (4, 'Which Film won best Foreign Film at the 1999 Oscars?', 'Crouching Tiger, Hidden Dragon', "No Man's Land", 'Life is Beautiful', 'All About My Mother');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (4, 'Who directed the French film Crimson River?', 'Luc Besson', 'Jean-Luc Godard', 'Jean-Jacques Annaud', 'Mathieu Kassovitz');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (4, 'Which director helmed the German film Das Boot?', 'Oliver Hirschbiegel', 'Florian Henckel von Donnersmarck', 'Werner Herzog', 'Wolfgang Petersen');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (4, 'Who directed Train to Busan?', 'Jee-woon Kim', 'Bong Joon Ho', 'Hoon-jung Park', 'Sang-ho Yeon');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (4, 'Who was the director of Audition?', 'Shion Sono', 'Takeshi Kitano', 'Hideo Nakata', 'Takashi Miike');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (5, 'Which character did Warwick Davis play in Return of the Jedi?', 'Admiral Piett', 'Nien Nunb', 'Admiral Ackbar', 'Wicket');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (5, "What was the name of Kyle Katarn's first ship?", 'The Outrider', 'IG-2000', 'Sun Crusher', 'Moldy Crow');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (5, 'Which of the following is not a child of Leia and Han in the now discontinued expanded universe?', 'Jacen', 'Jaina', 'Anakin', 'Ben');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (5, 'What was the cause of death of Chewbacca?', 'Finally hunted down by Bossk', 'Shot in the back by a Stormtrooper', 'Eaten by a sand worm', 'A moon fell on him');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (5, 'Where did Luke train his students?', 'Coruscant', 'Hoth', 'Myrkr', 'Yavin 4');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (6, 'What class of ship was the Enterprise during the original series?', 'Enterprise', 'Defiant', 'Reliant', 'Constitution');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (6, 'Who was the Captain of the Enterpries NX-01?', 'Rachel Garrett', 'Katherine Janeway', 'Hikaru Sulu', 'Jonathan Archer');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (6, 'Chrisopher Plumber played a Klingon in Star Trek: The Undiscovered Country, what was his name?', 'Khan', 'Gorkon', 'Azetbur', 'Chang');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (6, 'Which of the following character did Michael Dorn NOT play in Star Trek?', 'Worf son of Mogh', 'Klingon Defense Attorney', 'Willie Hawkins', 'Klingon Chef');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (6, 'How many episodes were there of Deep Space 9?', '142', '188', '212', '176');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (6, 'Who did Alexander Siddiq marry during their time on Deep Space 9?', 'Nicole de Boer', 'Terry Farrel', 'Chase Masterson', 'Nana Visitor');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (7, 'Who wrote Rendezvous with Rama?', 'Issac Asimov', 'Philip K Dick', 'Orson Scott Card', 'Arthur C Clarke');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (7, 'Which was not written by Frank Herbert?', 'Children of Dune', 'Chapterhouse: Dune', 'Heretics of Dune', 'Hunters of Dune');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (7, 'Which Hugo Award winning author wrote the Mars Trilogy?', 'Anne McCaffrey', 'William Gibson', 'Robert J. Sawyer', 'Kim Stanley Robinson');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (7, 'Who wrote Fahrenheit 451?', 'Arthur C Clarke', 'Hal Clement', 'Issac Asimov', 'Ray Bradbury');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (7, 'Who wrote The Calculating Stars?', 'Jeff VanderMeer', 'N. K. Jemisin', 'Mur Lafferty', 'Mary Robinette Kowal');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (8, 'Who wrote The Eye of the World?', 'Terry Goodkind', 'RA Salvatore', 'Ed Greenwood', 'Robert Jordan');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (8, 'In what year was The Hobbit published?', '1943', '1939', '1941', '1937');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (8, 'Who wrote the Dragonriders of Pern series?', 'Ursula K. Le Guin', 'Timothy Zahn', 'George R. R. Martin', 'Anne McCaffery');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (8, 'Which series is not related to David Eddings?', 'Elenium', 'Belgariad', 'Malloreon', 'Cosmere');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (8, 'Which author is best known for Discworld?', 'Brandon Sanderson', 'Terry Brooks', 'David Gemmel', 'Terry Pratchett');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (9, 'What is the capital of Nebraska?', 'Omaha', 'Columbus', 'Fremont', 'Lincoln');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (9, 'What is the capital of Wyoming?', 'Gillette', 'Casper', 'Rock Springs', 'Cheyenne');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (9, 'What is the capital of Delaware?', 'Georgetown', 'Millsboro', 'Wilmington', 'Dover');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (9, 'What is the capital of South Dakota?', 'Bismarck', 'Sioux Falls', 'Rapid City', 'Pierre');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (9, 'What is the capital of West Virginia?', 'Richmond', 'Huntington', 'Clarksburg', 'Charleston');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (10, '?', '', '', '', '');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (10, '?', '', '', '', '');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (10, '?', '', '', '', '');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (10, '?', '', '', '', '');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (10, '?', '', '', '', '');
INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (10, '?', '', '', '', '');
