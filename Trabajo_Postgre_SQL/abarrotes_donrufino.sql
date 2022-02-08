-- Creación tabla groceries

create table groceries (
	sku serial primary key,
	name varchar(150) not null,
	description varchar(150) not null,
	price int not null
);

-- Creación tabla customers

create table customers (
	customer_id serial primary key,
	first_name varchar(150) not null,
	last_name varchar(150) not null,
	email varchar(150) unique not null,
	phone varchar(15) not null,
	address varchar(150) not null,
	postal_code varchar(150) not null,
	suburb varchar(150)
);

-- Creación tabla sales

create table sales (
	sale_id serial primary key,
	sku int not null,
	customer_id  int not null,
	quantity int not null,
	foreign key (customer_id) references customers(customer_id),
	foreign key (sku) references groceries(sku)
);

-- Llenado tabla groceries

insert into groceries (name, description, price)
values
('pollo', 'pollo entero fresco precio por kilo', 8.89);

-- pollo, pollo entero fresco precio por kilo, 8.89
-- tomate, tomate itanliano precio por kilo, 3.19
-- cebolla roja, cebolla roja precio por kilo, 1.99
-- platano, platano de seda precio por kilo, 2.63
-- arroz, arroz extra añejo precio por bolsa 5kg, 19.90
-- aceituna, aceituna negra entera extra cuisine & co pote 280 gr., 6.23
-- mayonesa, mayonesa alacena doypack 950gr, 13.99
-- atún, trozos de atún nicolini lata 170gr, 4.80
-- huevos, huevos pardos bandeja 15 unidades, 7.90
-- carne, bisteck de paleta nacional precio por kilo, 37.90

--Llenado tabla customers

insert into customers (first_name, last_name, email, phone, address, suburb, postal_code)
values
('Juan Carlos', 'Villacorta Reyes', 'jcvillacorta@gmail.com', 943544089, 'Av. Grau 650', 'Club Grau', 'Monterrey');
-- ('Brad', 'Pitt', 'brad@gmail.com', 943544090, 'Av. Bacon 650', 'Cape Bacon', 'Guadalajara')
-- ('Angelina', 'Jolie', 'joliegirl@gmail.com', 943544091, 'Av. Pitt 650', 'Pitin', 'Guadalajara');
-- ('Milla', 'Jojovich', 'resident@gmail.com', 943544092, 'Av. Monster 650', 'Racoon', 'Cancun');
-- ('Jennifer', 'Aniston', 'firstfriend@gmail.com', 943544093, 'Av. New York 650', 'Playa Norte', 'Cancun');
-- ('Michael', 'Douglas', 'moneyfirst@gmail.com', 943544094, 'Av. Wall Street 650', 'Playa Sur', 'Cancun');
-- ('Kirk', 'Douglas', 'espartaco@gmail.com', 943544095, 'Av. Smog 650', 'Roma', 'Mexico DF');
-- ('Antonio', 'Banderas', 'zorro@gmail.com', 943544096, 'Av. California 650', 'Chilaquiles', 'Mexico DF')
-- ('Steven', 'Spielberg', 'etcomehome@gmail.com', 943544097, 'Av. Hollywood 650', 'Tamales', 'Tijuana');

-- Llenado tabla sales

insert into sales (sku, customer_id, quantity)
values 
(1, 1, 3);

--etc

--Consultas BD

--a. ID de los clientes de la Ciudad de Monterrey

select customer_id from customers where postal_code='Monterrey'

--b. ID y descripción de los productos que cuesten menos de 15 pesos

select sku, description, price from groceries where price<15

--c. ID y nombre de los clientes, cantidad vendida, y descripción del producto, en las ventas en las cuales se vendieron más de 10 unidades.

select sale_id, first_name, last_name, quantity, description
from customers as c
inner join sales as s
on c.customer_id=s.customer_id
inner join groceries as g
on g.sku=s.sku
where quantity>10

--d. ID y nombre de los clientes que no aparecen en la tabla de ventas (Clientes que no han comprado productos)

select customers.customer_id, first_name, last_name
from customers 
where customers.customer_id not in (select customer_id from sales)

--e. ID y nombre de los clientes que han comprado todos los productos de la empresa.

select customers.customer_id, first_name, last_name
from customers
where (select count (distinct sku)
	  from sales where customers.customer_id=sales.customer_id) =
	  (select count (*) from groceries)

--f. ID y nombre de cada cliente y la suma total (suma de cantidad) de los productos que ha comprado.

select customers.customer_id, first_name, last_name, sum(sales.quantity)
from customers
left join sales
on customers.customer_id=sales.customer_id
group by customers.customer_id

--g. ID de los productos que no han sido comprados por clientes de Guadalajara.

select sku, name
from groceries 
where sku not in (select sku from customers natural join sales
where postal_code='Guadalajara')

--h. ID de los productos que se han vendido a clientes de Monterrey y que también se han vendido a clientes de Cancún.

select distinct sku
from customers natural join sales
where postal_code='Monterrey' and sku in (select sku from customers natural join sales where postal_code='Cancun')

--i. Nombre de las ciudades en las que se han vendido todos los productos.

select postal_code 
from customers
natural join sales
group by postal_code
having count (distinct sku) = (select count(*) from groceries)

--j. Cantidad de productos vendidos a clientes de Guadalajara, Cancún y Monterrey.

select quantity, description, s.sku
from customers as c
inner join sales as s
on c.customer_id=s.customer_id
inner join groceries as g
on g.sku=s.sku
where postal_code='Guadalajara' and quantity in (select sku from customers natural join sales where postal_code='Cancun') 
and quantity in (select sku from customers natural join sales where postal_code='Monterrey')
-- sobre esta última no sé si el resultado es correcto