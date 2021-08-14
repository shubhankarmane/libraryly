use libraryly;

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