drop database if exists libraryly;

create database libraryly;

use libraryly;

create table authors
(
    id        int auto_increment primary key,
    name      varchar(255) not null,
    createdAt datetime     not null,
    updatedAt datetime     not null
);

create table genres
(
    id        int auto_increment
        primary key,
    name      varchar(255) not null,
    createdAt datetime     not null,
    updatedAt datetime     not null
);

create table books
(
    id        int auto_increment
        primary key,
    title     varchar(255) not null,
    stock     int          not null,
    isbn      varchar(255) not null,
    imageUrl  varchar(255) null,
    pages     int          not null,
    authorId  int          not null,
    genreId   int          not null,
    createdAt datetime     not null,
    updatedAt datetime     not null,
    constraint books_ibfk_1
        foreign key (authorId) references authors (id),
    constraint books_ibfk_2
        foreign key (genreId) references genres (id)
);

create table customers
(
    id              int auto_increment
        primary key,
    firstName       varchar(255) not null,
    lastName        varchar(255) not null,
    email           varchar(255) not null,
    phone           varchar(255) not null,
    lastPaymentDate datetime     null,
    createdAt       datetime     not null,
    updatedAt       datetime     not null
);

create table statuses
(
    id        int auto_increment
        primary key,
    status    varchar(255) not null,
    createdAt datetime     not null,
    updatedAt datetime     not null
);

create table users
(
    id        int auto_increment
        primary key,
    userName  varchar(255) not null,
    password  varchar(255) not null,
    createdAt datetime     not null,
    updatedAt datetime     not null
);

create table rentals
(
    id           int auto_increment
        primary key,
    bookId       int      not null,
    customerId   int      not null,
    statusId     int      not null,
    dateRented   datetime null,
    dateReturned datetime null,
    createdAt    datetime not null,
    updatedAt    datetime not null,
    constraint rentals_ibfk_1
        foreign key (bookId) references books (id),
    constraint rentals_ibfk_2
        foreign key (customerId) references customers (id),
    constraint rentals_ibfk_3
        foreign key (statusId) references statuses (id)
);

drop procedure if exists create_rental_for_customer;

delimiter $$

create procedure create_rental_for_customer(IN book_id int, IN customer_id int)
begin
    start transaction;
    insert into rentals (bookId, customerId, statusId, dateRented, dateReturned, createdAt, updatedAt)
    values (book_id, customer_id, 1, sysdate(), default, sysdate(), sysdate());

    update books set stock = stock - 1 where id = book_id;

    select * from rentals where id = last_insert_id();
    commit;
end $$

delimiter ;

drop procedure if exists get_days_since_last_payment;

delimiter $$

create procedure get_days_since_last_payment(IN customerId int)
begin
    select (datediff(current_date, lastPaymentDate)) as difference_in_days from customers where id = customerId;
end $$

delimiter ;

drop procedure if exists return_rental_for_customer;

delimiter $$

create procedure return_rental_for_customer(IN customer_id int)
begin
    start transaction;
    select id from rentals where customerId = customer_id and statusId = 1 into @rental_update_id;
    select bookId from rentals where customerId = customer_id and statusId = 1 into @book_update_id;

    update rentals set dateReturned = sysdate(), statusId = 2 where id = @rental_update_id;

    update books set stock = stock + 1 where id = @book_update_id;

    select * from rentals where id = @rental_update_id;
    commit;
end $$

delimiter ;

insert into authors (name, createdAt, updatedAt)
values ('Lewis Carroll', sysdate(), sysdate()),
       ('Lord Dunsany', sysdate(), sysdate()),
       ('T H White', sysdate(), sysdate()),
       ('C S Lewis', sysdate(), sysdate()),
       ('Mikhail Bulgakov', sysdate(), sysdate()),
       ('Zen Cho', sysdate(), sysdate()),
       ('Rey Bradbury', sysdate(), sysdate()),
       ('Aldous Huxley', sysdate(), sysdate()),
       ('Thomas Harris', sysdate(), sysdate()),
       ('William Peter Blatty', sysdate(), sysdate()),
       ('Tana French', sysdate(), sysdate()),
       ('Agatha Christie', sysdate(), sysdate()),
       ('Caleb Carr', sysdate(), sysdate()),
       ('Dennis Lehane', sysdate(), sysdate()),
       ('Michael Crichton', sysdate(), sysdate()),
       ('Tom Clancy', sysdate(), sysdate()),
       ('Coleen Hoover', sysdate(), sysdate()),
       ('Diana Gibaldon', sysdate(), sysdate()),
       ('Ron Chernow', sysdate(), sysdate()),
       ('Mark Kurlansky', sysdate(), sysdate()),
       ('Michael Pollan', sysdate(), sysdate()),
       ('Julie Powell', sysdate(), sysdate()),
       ('Anthony Bourdain', sysdate(), sysdate());

insert into genres (name, createdAt, updatedAt)
values ('Fantasy', sysdate(), sysdate()),
       ('Science Fiction', sysdate(), sysdate()),
       ('Horror', sysdate(), sysdate()),
       ('Mystery', sysdate(), sysdate()),
       ('Action', sysdate(), sysdate()),
       ('Romance', sysdate(), sysdate()),
       ('Historical', sysdate(), sysdate()),
       ('Food And Drink', sysdate(), sysdate());

insert into books (title, stock, isbn, imageUrl, pages, authorId, genreId, createdAt, updatedAt)
values ('Alice’s Adventures in Wonderland', 7, '9780194227230', '', 192, 1, 1, sysdate(), sysdate()),
       ('The King of Elfland’s Daughter', 5, '9780345216281', '', 301, 2, 1, sysdate(), sysdate()),
       ('The Sword in the Stone', 2, '9780006753995', '', 312, 3, 1, sysdate(), sysdate()),
       ('The Lion, the Witch, and the Wardrobe', 9, '9780060276362', '', 208, 4, 1, sysdate(), sysdate()),
       ('The Master and Margarita', 9, '9780140455465', '', 448, 5, 1, sysdate(), sysdate()),
       ('A Sorcerer to the Crown', 13, '9780425283370', '', 384, 6, 1, sysdate(), sysdate()),
       ('Farenheit 451', 12, '9780743247221', '', 256, 7, 2, sysdate(), sysdate()),
       ('Brave New World', 4, '9780582060166', '', 311, 8, 2, sysdate(), sysdate()),
       ('Red Dragon', 8, '9780708981696', '', 432, 9, 3, sysdate(), sysdate()),
       ('The Exorcist', 8, '9780060103651', '', 400, 10, 3, sysdate(), sysdate()),
       ('In The Woods', 11, '9780670038602', '', 608, 11, 3, sysdate(), sysdate()),
       ('And Then There Were None', 15, '9780008123208', '', 256, 12, 4, sysdate(), sysdate()),
       ('The Alienist', 7, '9780525510277', '', 496, 13, 4, sysdate(), sysdate()),
       ('Shutter Island', 13, '9780060545505', '', 380, 14, 4, sysdate(), sysdate()),
       ('Jurassic Park', 13, '9780099282914', '', 448, 15, 5, sysdate(), sysdate()),
       ('The Lost World', 18, '9780307291844', '', 393, 15, 5, sysdate(), sysdate()),
       ('Red Rabbit', 12, '9783453436824', '', 640, 16, 5, sysdate(), sysdate()),
       ('It Ends With Us', 16, '9781501110368', '', 384, 17, 6, sysdate(), sysdate()),
       ('Outlander', 21, '9780440212560', '', 640, 18, 6, sysdate(), sysdate()),
       ('Grant', 12, '9780143110637', '', 1104, 19, 7, sysdate(), sysdate()),
       ('Salt: A World History', 12, '9780142001615', '', 484, 20, 8, sysdate(), sysdate()),
       ('The Omnivore''s Dilemma: A Natural History of Four Meals', 11, '9781594200823', '', 450, 21, 8, sysdate(),
        sysdate()),
       ('Julie and Julia: 365 Days, 524 Recipes, 1 Tiny Apartment Kitchen', 11, '9780316109697', '', 310, 22, 8,
        sysdate(), sysdate()),
       ('Kitchen Confidential: Adventures in the Culinary Underbelly', 6, '9780060899226', '', 321, 23, 8, sysdate(),
        sysdate());



insert into statuses (status, createdAt, updatedAt)
values ('Open', sysdate(), sysdate()),
       ('Closed', sysdate(), sysdate());