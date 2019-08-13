/*   |-------------------------------------------------------------|
     | Creation of the database and all necessary tables           |
     | Usama Guenedi                                               |
	 | 2019, TF Bern                                               |
     |-------------------------------------------------------------|   */


# Creates the database if it has not already been created. The database is called Sporttag_DB
CREATE DATABASE IF NOT EXISTS Sporttag_DB;

# Uses the newly created database
USE Sporttag_DB;


# Creates the table called Klasse
CREATE table IF NOT EXISTS Klasse (
	ID_Klasse int NOT NULL AUTO_INCREMENT,
    Klassenname VARCHAR(30),
    PRIMARY KEY (ID_Klasse)
    );

# Creates the table called Rolle
CREATE table IF NOT EXISTS Rolle(
	ID_Rolle int NOT NULL AUTO_INCREMENT,
    Rolle varchar(50),
    PRIMARY KEY (ID_Rolle)
);

# Creates the table called User
CREATE table IF NOT EXISTS User (
	ID_User int NOT NULL AUTO_INCREMENT,
	Nachname varchar(255),
	Vorname varchar(255),
	Kuerzel varchar(255),
    Rolle_ID int,
	Klasse_ID int,
    PRIMARY KEY (ID_User),
    FOREIGN KEY (Rolle_ID) REFERENCES Rolle(ID_Rolle),
    FOREIGN KEY (Klasse_ID) REFERENCES Klasse(ID_Klasse)
);

# Creates the table called Sportarten
CREATE table IF NOT EXISTS Sportarten (
	ID_Sportarten int NOT NULL AUTO_INCREMENT,
    Sportarten VARCHAR(50),
    PRIMARY KEY (ID_Sportarten)
);

# Creates the table called Auswahl
CREATE table IF NOT EXISTS Auswahl (
	ID_Priorität int NOT NULL AUTO_INCREMENT,
	Schugroesse int,
    User_ID int,
	Erste_Sportart int,
	Zweite_Sportart int,
    Dritte_Sportart int,
    PRIMARY KEY (ID_Priorität),
    FOREIGN KEY (User_ID) REFERENCES User(ID_User),
    FOREIGN KEY (Erste_Sportart) REFERENCES Sportarten(ID_Sportarten),
    FOREIGN KEY (Zweite_Sportart) REFERENCES Sportarten(ID_Sportarten),
    FOREIGN KEY (Dritte_Sportart) REFERENCES Sportarten(ID_Sportarten)
);
    