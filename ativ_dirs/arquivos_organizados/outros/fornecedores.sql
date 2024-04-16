use fornecedores

create table fornecedores (
	codforn int primary key,
	nomeforn varchar (100),
	endforn varchar(100),
);

create table pe�as (
	codpe int primary key,
	nomepe varchar(100),
	cor varchar(100),
);

create table catalogo (
	codforn int,
	codpe int,
	primary key (codforn,codpe),
	pre�o decimal (5,2)
);

insert into fornecedores values (1, 'Alberto', 'Rua 3,44')
insert into fornecedores values (2, 'Maria', 'Rua 44,3')
insert into fornecedores values (3, 'Josefa', 'Av.Ramalho,334')
insert into fornecedores values (4, 'Paulo', 'Rua Irm� Serafina 303 ')
insert into fornecedores values (5, 'Ana', 'Av.Fo.Glic�rio 33')
insert into fornecedores values (6, 'Wilson', 'Rua 32,45 apto 4')
insert into fornecedores values (7, 'Bete', 'Av.Sete de Setembro,88')
insert into fornecedores values (8, 'Daniel', 'Rua 32,444,apto 2')
insert into fornecedores values (9, 'Graziela', 'Av.Sul 245 apto.42')
insert into fornecedores values (10, 'Eduardo', 'Rua Jardim Bot�nico 779')

insert into pe�as values (1, 'Copo Grande', 'Azul')
insert into pe�as values (2, 'Copo Grande', 'Vermelho')
insert into pe�as values (3, 'Copo Pequeno','Vermelho')
insert into pe�as values (4, 'Copo Pequeno', 'Verde')
insert into pe�as values (5, 'Prato grande', 'Amarelo')
insert into pe�as values (6, 'Prato pequeno', 'Amarelo')
insert into pe�as values (7, 'Garfo de pl�stico', 'Vermelho')
insert into pe�as values (8, 'Garfo de pl�stico', 'Verde')
insert into pe�as values (9, 'Faca de pl�stico', 'Vermelho')
insert into pe�as values (10,'Faca de pl�stico', 'Branco')
insert into pe�as values (11,'Garfo de metal', 'Verde')
insert into pe�as values (12,'Garfo de metal', 'Amarelo')

insert into catalogo values (1, 1, 110.5)
insert into catalogo values (5, 1, 99.3)
insert into catalogo values (7, 1, 98.9)
insert into catalogo values (8, 1, 100)
insert into catalogo values (1, 2, 80.7)
insert into catalogo values (2, 2, 70.6)
insert into catalogo values (10, 2, 75)
insert into catalogo values (3, 3, 55.5)
insert into catalogo values (9, 3, 80.9)
insert into catalogo values (10,3, 77.4)
insert into catalogo values (5, 4, 60.9)
insert into catalogo values (9, 4, 45.3)
insert into catalogo values (10, 4, 67.4)
insert into catalogo values (6, 7, 30.4)
insert into catalogo values (10, 7, 25.2)
insert into catalogo values (1, 8, 23.3)
insert into catalogo values (2, 8, 38.5)
insert into catalogo values (3, 9, 60.8)
insert into catalogo values (5, 9, 56.7)
insert into catalogo values (9, 9, 54.8)
insert into catalogo values (2, 10, 60)
insert into catalogo values (2, 11, 200)

select * from fornecedores
select * from pe�as
select * from catalogo

/* bloco 1 */

select f.nomeforn from fornecedores as f inner join pe�as as p on f.codforn = p.codpe where p.codpe = 1

select p.codpe from pe�as as p inner join fornecedores as f on f.codforn = p.codpe where f.nomeforn = 'Josefa'

select f.codforn from fornecedores as f inner join pe�as as p on f.codforn = p.codpe where p.cor = 'Vermelho'

select f.nomeforn, p.nomepe, p.cor from catalogo as c inner join fornecedores as f on c.codforn = f.codforn inner join pe�as as p on c.codpe = p.codpe 
where c.pre�o > 40

select f.nomeforn, p.nomepe, c.pre�o from catalogo as c inner join fornecedores as f on c.codforn = f.codforn inner join pe�as as p on c.codpe = p.codpe 
where p.nomepe like '%Grande%'

select p.nomepe, f.endforn from fornecedores as f inner join pe�as as p on f.codforn = p.codpe where p.nomepe like '%Garfo%'

/* bloco 2 */

insert into fornecedores values (12, 'Novo Fornecedor', 'Rua 5,78')
insert into pe�as values (14,'Nova pe�a', 'Roxo')

insert into catalogo values (20, 20, 20)

select p.nomepe, c.codpe from pe�as as p left join catalogo as c on c.codpe = p.codpe where c.codpe is null

select f.nomeforn, c.codforn from fornecedores as f left join catalogo as c on c.codforn = f.codforn where c.codforn is null

select f.nomeforn, c.codforn from fornecedores as f right join catalogo as c on c.codforn = f.codforn where f.codforn is null

select p.nomepe, c.codpe from pe�as as p right join catalogo as c on c.codpe = p.codpe where p.codpe is null

select max(pre�o) as max_pre�o from catalogo
select min(pre�o) as min_pre�o from catalogo
select count(*) as count_pe�as from pe�as
select format (avg(pre�o), 'N') as pre�o_medio from catalogo
select count(cor) as cor_vermelha from pe�as where cor = 'Vermelho'

select pe�as.nomepe, max(pre�o) as max_pre�o from catalogo inner join pe�as on pe�as.codpe = catalogo.codpe
group by pe�as.nomepe

select pe�as.nomepe, min(pre�o) as min_pre�o from catalogo inner join pe�as on pe�as.codpe = catalogo.codpe
group by pe�as.nomepe

select fornecedores.nomeforn, max(pre�o) as max_pre�o from catalogo inner join fornecedores on fornecedores.codforn = catalogo.codforn
group by fornecedores.nomeforn

select fornecedores.nomeforn, pe�as.nomepe, min(pre�o) as min_pre�o from catalogo inner join 
fornecedores on fornecedores.codforn = catalogo.codforn inner join pe�as on pe�as.codpe = catalogo.codpe 
group by fornecedores.nomeforn, pe�as.nomepe

select format (avg(pre�o), 'N') as pre�o_medio from catalogo inner join pe�as on pe�as.codpe = catalogo.codpe where pe�as.cor = 'Vermelho'

select fornecedores.nomeforn, count(*) as nome_pe from pe�as inner join catalogo on pe�as.codpe = catalogo.codpe inner join
fornecedores on fornecedores.codforn = catalogo.codforn where pe�as.nomepe like '%Garfo%' group by fornecedores.nomeforn


