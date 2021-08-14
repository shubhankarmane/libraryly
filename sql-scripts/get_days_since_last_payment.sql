use libraryly;

drop procedure if exists get_days_since_last_payment;

delimiter $$

create procedure get_days_since_last_payment(IN customerId int)
begin
    select (datediff(current_date, lastPaymentDate)) as difference_in_days from customers where id = customerId;
end $$

delimiter ;