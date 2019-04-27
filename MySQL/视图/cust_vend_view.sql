create view cust_vend as
select customers.cust_id , vendors.vend_id from vendors , customers;