use libraryly;

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